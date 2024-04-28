import { MenuOutlined } from "@ant-design/icons";
import Seo from "../components/Seo";
import {
  DivText,
  FlexWrap,
  Logo,
  MainPage,
  Image,
  NavBar,
  Monitoramento,
  Clientes,
} from "./styles";
import { useState } from "react";
import DrawerPage from "../components/Drawer";
import Button from "@mui/material/Button";

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };
  return (
    <>
      {<Seo title="Pagina inicial" description="inicio App VeggieLink" />}
      <MainPage>
        {/* <NavBar>
          <MenuOutlined onClick={handleOpenDrawer} />
        </NavBar>
        <DrawerPage open={drawerOpen} onClose={handleCloseDrawer} /> */}
        <FlexWrap>
          <DivText>
            <h2>Gerencie e divulgue seus produtos com</h2>
            <span>o VeggieLink.</span>
          </DivText>
          <Monitoramento>
            <h2> Monitore seu produto com tecnologia de ponta</h2>
          </Monitoramento>
          <Image>
            <Logo src={require("../assets/Images/ambiental.png")} alt="logo" />
          </Image>
          <Clientes>
            <h2>Encontre o seu cliente perfeito</h2>
          </Clientes>
          <Image>
            <Logo src={require("../assets/Images/feliz.png")} alt="logo" />
          </Image>
          <Button
            variant="contained"
            size="large"
            disableElevation
            onClick={() => {
              window.location.href = "/signin";
            }}
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
            Cadastre-se já
          </Button>
        </FlexWrap>
      </MainPage>
    </>
  );
}
