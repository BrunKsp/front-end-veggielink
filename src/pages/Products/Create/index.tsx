import { ChangeEvent, useCallback} from "react";
import { useForm } from "react-hook-form";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

import {Typography } from "@mui/material";
import Seo from "../../../components/Seo";
import { DivText, FlexWrap,MainPage, Image, Card } from "./styles";


interface IForm {
  name: string;
  description?: string;
  category?: string;
  photo?: string;
}

const validationSchema = yup.object({
  name: yup.string().required("Campo obrigatório"),
  category: yup.string(),
  photo: yup.string(),
  description: yup.string().max(150, "Máximo de 150 caracteres"),
});

export default function CreateProduct() {

  const {
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const submitForm = useCallback(async (data: IForm) => {
    try {
      
    } catch (error: any) {
      if (error?.response?.status === 400) {
      }
    }
  }, []);

  const handleChange =
    (
      name: "name" | "photo" | "description" | "category"
    ) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(name, e.target.value === "" ? undefined : e.target.value, {
        shouldValidate: true,
      });
    };

  return (
    <>
      {<Seo title="Criar Produto" description="Cadastre seu novo produto" />}
      <MainPage>
        <Card>
          <FlexWrap>
            <DivText>
              <h1>Cadastrar Produto</h1>
            </DivText>
            <Image>
            </Image>
            <TextField
              margin="normal"
              required
              fullWidth
              name="name"
              label="Nome"
              type={"text"}
              id="nome"
              onChange={handleChange("name")}
              helperText={
                errors.name && (
                  <Typography variant="body2" color="error">
                    {errors.name.message}
                  </Typography>
                )
              }
              sx={{ borderRadius: 1 }}
            />
             <TextField
              margin="normal"
              fullWidth
              name="description"
              label="Descricao"
              type={"text"}
              id="descricao"
              onChange={handleChange("description")}
              helperText={
                errors.description && (
                  <Typography variant="body2" color="error">
                    {errors.description?.message}
                  </Typography>
                )
              }
              sx={{ borderRadius: 1 }}
            />
            <TextField
              margin="normal"
              fullWidth
              name="category"
              label="Categoria"
              type={"text"}
              id="segmento"
              onChange={handleChange("category")}
              helperText={
                errors.category && (
                  <Typography variant="body2" color="error">
                    {errors.category?.message}
                  </Typography>
                )
              }
              sx={{ borderRadius: 1 }}
            />
            <Button
              variant="contained"
              fullWidth
              size="large"
              disableElevation
              onClick={handleSubmit(submitForm)}
              sx={{
                mt: 3,
                mb: 2,
                borderRadius: 2,
                bgcolor: "#08F9B0",
                color: "black",
                fontSize: 15,
                fontFamily: "Sora, sans-serif",
                fontWeight: 800,
                "&:hover": {
                  backgroundColor: "#08F9B0",
                },
              }}
            >
              Criar
            </Button>
          </FlexWrap>
        </Card>
      </MainPage>
    </>
  );
}
