import React, { useEffect, useState } from "react";
import { MenuOutlined } from "@ant-design/icons/lib/icons";
import GridProducts from "../../components/GridProducts";
import Seo from "../../components/Seo";
import { MainPage, NavBar } from "./styles";
import DrawerPage from "../../components/Drawer";
import { getProduct } from "../../services/Product";
import Notification from "../../components/Notification";

interface ProductData {
  id: string;
  name: string;
  thumb: string;
}

interface ProductCategory {
  [key: string]: ProductData[];
}

const Products: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [productCategories, setProductCategories] = useState<ProductCategory>({});
  
  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProduct();
        setProductCategories(data.data);
      } catch (error) {
        <Notification type={"error"} content={"Erro ao buscar Produto!"} />
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
        <h1>Produtos</h1>
      </NavBar>
      <MainPage>
        {Object.keys(productCategories).map((category) => (
          <GridProducts
            key={category}
            category={category}
            products={productCategories[category]}
          />
        ))}
      </MainPage>
    </>
  );
};

export async function getServerSideProps() {
  try {
    const data = await getProduct();
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

export default Products;
