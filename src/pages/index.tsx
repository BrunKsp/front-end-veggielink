import { MenuOutlined } from "@ant-design/icons";
import Seo from "../components/Seo";
import {
  DivText,
  FlexWrap,
  MainPage,
  NavBar,
  Monitoramento,
  ImgNavBar,
  LogoNavBar,
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
      <NavBar>
        <MenuOutlined onClick={handleOpenDrawer} />
        <ImgNavBar>
          <LogoNavBar
            src={require("../assets/Images/LogoVeggie.png")}
            alt="logo"
          />
        </ImgNavBar>
        <DrawerPage open={drawerOpen} onClose={handleCloseDrawer} />
      </NavBar>
      <MainPage>
        <FlexWrap>
          <DivText>
            <h2>Gerencie e divulgue seus produtos de maneira simplificada</h2>
          </DivText>
          <Monitoramento>
            <p> Impulsione seus produtos com a VeggieLink</p>
          </Monitoramento>
          <Button
            variant="contained"
            size="small"
            disableElevation
            onClick={() => {
              window.location.href = "/sigin";
            }}
            sx={{
              mt: 3,
              mb: 2,
              borderRadius: 2,
              bgcolor: "#08F9B0",
              color: "black",
              fontSize: 20,
              fontFamily: "Sora, sans-serif",
              "&:hover": {
                backgroundColor: "#08F9B0",
              },
            }}
          >
            Teste a plataforma
          </Button>
        </FlexWrap>
      </MainPage>
    </>
  );
}
