import { Button } from "@mui/material";
import { Drawer } from "antd";
import { Links, CustomDrawerHeader, LogoNavBar} from "../Drawer/styles";
interface DrawerPageProps {
  onClose: () => void;
  open: boolean;
}

export default function DrawerPage({ onClose, open }: DrawerPageProps) {
  return (
    <>
      <Drawer
        title={
          <CustomDrawerHeader>
            <LogoNavBar
              src={require("../../assets/Images/LogoVeggie.png")}
              alt="logo"
            />
          </CustomDrawerHeader>
        }
        onClose={onClose}
        open={open}
        placement="left"
      >
        <Links>
          <a
            href="/login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h2>Login</h2>
          </a>
          <a
            href="https://www.linkedin.com/in/brunok-siqueirap/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h2>Contato</h2>
          </a>
          <h2>Quem Somos</h2>
        </Links>
        <Button
          variant="contained"
          size="small"
          disableElevation
          onClick={() => {
            window.location.href = "/sigin";
          }}
          sx={{
            mt: 4,
            mb: 2,
            borderRadius: 2,
            bgcolor: "#08F9B0",
            color: "black",

            fontFamily: "Sora, sans-serif",
            "&:hover": {
              backgroundColor: "#08F9B0",
            },
          }}
        >
          Teste a plataforma
        </Button>
      </Drawer>
    </>
  );
}
