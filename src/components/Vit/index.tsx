import React, { useState } from "react";
import { Button, Upload, Image, message, Card } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { RcFile } from "antd/es/upload/interface";
import Seo from "../Seo";
import { Cards, NavBar } from "./styles";
import DrawerPage from "../Drawer";
import axios from "axios";
import Title from "antd/es/typography/Title";

const { Dragger } = Upload;

interface Classification {
  classification: string;
  probabilities: number[];
}

const ImageUploadWithAntD = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [classification, setClassification] = useState<Classification | null>(
    null
  );
  const handleOpenDrawer = () => setDrawerOpen(true);
  const handleCloseDrawer = () => setDrawerOpen(false);

  const handleImageUpload = async (file: RcFile) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      let base64Image = reader.result as string;

      const base64ImageToSend = base64Image.replace(
        /^data:image\/[a-zA-Z]+;base64,/,
        ""
      );

      setImagePreview(base64Image);
      sendImageToEndpoint(base64ImageToSend);
    };

    reader.readAsDataURL(file);
    return false;
  };

  const sendImageToEndpoint = async (base64Image: string) => {
    try {
      base64Image.replace(/^data:image\/[a-zA-Z]+;base64,/, "");
      const response = await axios.post("https://3d6f-45-238-139-36.ngrok-free.app/predict", {
        image_base64: base64Image,
      });

      setClassification(response.data);
      console.log(response, "oi");
    } catch (error) {
      console.error("Erro ao enviar imagem:", error);
      message.error("Erro ao enviar imagem.");
    }
  };

  const getCardColor = (probability: number, type: "infected" | "healthy") => {
    if (type === "infected") {
      return probability > 50 ? "rgb(255, 0, 0)" : "rgba(248, 7, 7, 0.429)";
    }
    return probability > 50 ? "#08F9B0" : "#08f9702c";
  };

  return (
    <>
      <Seo title="Detecção de Doenças" />
      <NavBar>
        <MenuOutlined onClick={handleOpenDrawer} style={{ fontSize: "24px" }} />
        <DrawerPage open={drawerOpen} onClose={handleCloseDrawer} />
      </NavBar>
      <Cards>
        <Card style={{width: '80%',marginRight:"30px",marginTop:'20px'}}>
          <Dragger
            accept="image/*"
            showUploadList={false}
            customRequest={({ file, onSuccess }) => {
              handleImageUpload(file as RcFile);
            }}
            style={{ marginLeft: "6px" }}
          >
            <Button type="text" style={{ textDecoration: "none" }}>
              Clique para Selecionar Imagem
            </Button>
          </Dragger>

          {imagePreview && (
            <div
              style={{
                marginTop: "20px",
                textAlign: "center",
                marginLeft: "30px",
                marginBottom: "20px"
              }}
            >
              <h2>Imagem Selecionada:</h2>
              <Image
                src={imagePreview}
                alt="Imagem Selecionada"
                width={200}
                style={{ marginTop: "20px" }}
              />
            </div>
          )}
          {classification && (
            <>
              <Title
                level={3}
                style={{
                  color:
                    classification.classification === "Saudável"
                      ? "green"
                      : "red",
                }}
              >
                Classificação: {classification.classification}
              </Title>

              {/* Card de Probabilidade Saudável */}
              <Card
                style={{
                  marginBottom: "10px",
                  backgroundColor: getCardColor(
                    classification.probabilities[1],
                    "healthy"
                  ),
                }}
              >
                Probabilidade Prevista (Saudável):{" "}
                {classification.probabilities[1]?.toFixed(2)}%
              </Card>

              {/* Card de Probabilidade Infectada */}
              <Card
                style={{
                  backgroundColor: getCardColor(
                    classification.probabilities[0],
                    "infected"
                  ),
                }}
              >
                Probabilidade Prevista (Infectada):{" "}
                {classification.probabilities[0]?.toFixed(2)}%
              </Card>
            </>
          )}
        </Card>
      </Cards>
    </>
  );
};

export default ImageUploadWithAntD;
