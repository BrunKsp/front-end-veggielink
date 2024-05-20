import { ChangeEvent, useCallback, useState } from "react";
import { useForm } from "react-hook-form";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

import { IconButton, InputAdornment } from "@mui/material";
import Seo from "../../../components/Seo";
import { DivText, FlexWrap, Logo, MainPage, Image, Card } from "./styles";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { login } from "../../../services/User";
import { setToken } from "../../../services/api";
interface IForm {
  email: string;
  password: string;
}

const validationSchema = yup.object({
  email: yup.string().required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

export default function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

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
      console.log("oi", data);
      const response = await login(data);
      const token = response.data.token;
      localStorage.setItem("authToken", token);
      setToken(token);
      console.log(response);
      window.location.href = "https://www.youtube.com/watch?v=1CIIIv9dfzg";
    } catch (error: any) {
      if (error?.response?.status === 400) {
      }
    }
  }, []);

  const handleChange =
    (name: "email" | "password") =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(name, e.target.value, { shouldValidate: true });
    };

  return (
    <>
      {<Seo title="Login" description="" />}
      <MainPage>
        <Card>
          <FlexWrap>
            <DivText>
              <h1>Bem Vindo</h1>
            </DivText>
            <Image>
              <Logo
                src={require("../../../assets/Images/LogoVeggie.png")}
                alt="logo"
              />
            </Image>
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email"
              type={"text"}
              id="email"
              onChange={handleChange("email")}
              helperText={errors.email?.message}
              sx={{ borderRadius: 1 }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Senha"
              name="password"
              type={showPassword ? "text" : "password"}
              onChange={handleChange("password")}
              autoFocus
              helperText={errors.password?.message}
              sx={{ borderRadius: 1 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <a
              href="/sigIn"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h4>Não possui uma conta? Cadastre-se</h4>
            </a>
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
              Login
            </Button>
          </FlexWrap>
        </Card>
      </MainPage>
    </>
  );
}
