import React, { useEffect, useState } from "react";
import { MenuOutlined } from "@ant-design/icons/lib/icons";
import Seo from "../../../components/Seo";
import { Card, DescriptionView, ImageView, MainPage, NavBar, ProductImage } from "./styles";
import DrawerPage from "../../../components/Drawer";
import { getProductById } from "../../../services/Product";
import { Button } from "@mui/material";

interface ProductData {
  id: string;
  name: string;
  thumb: string;
  description: string;
}

const InfoProduct: React.FC<{ id: string }> = ({ id }) => {
  // Modifique as props para receber o id como parâmetro
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [product, setProductCategories] = useState<ProductData>();
  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductById("664fde759c45abee5df616be");
        console.log("🚀 ~ fetchProducts ~ data:", data.data);
        setProductCategories(data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Seo title="Produtos" />
      <NavBar>
        <MenuOutlined onClick={handleOpenDrawer} style={{ fontSize: "32px" }} />
        <DrawerPage open={drawerOpen} onClose={handleCloseDrawer} />
        <h1>{product?.name}</h1>
      </NavBar>
      <MainPage>
      <Card>
        <ImageView>
          <ProductImage src={product?.thumb} alt={product?.name} />
        </ImageView>
        <DescriptionView>
            <p>{product?.description}</p>
        </DescriptionView>
        <a href="/sigIn" style={{ textDecoration: "none", color: "inherit" }}>
          <h4>Compre direto com o produtor</h4>
        </a>
        <Button
          variant="contained"
          fullWidth
          size="small"
          disableElevation
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
          Comprar
        </Button>
        </Card>
      </MainPage>
    </>
  );
};

export async function getServerSideProps(context : string) {
  const id  = context;
  try {
    const data = await getProductById(id);
    return {
      props: {
        products: data.data, // Supondo que `data.data` é o objeto de categorias
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      props: {
        products: {},
      },
    };
  }
}

export default InfoProduct;
