import { MenuOutlined } from "@ant-design/icons/lib/icons";
import GridProducts from "../../components/GridProducts";
import Seo from "../../components/Seo";
import { MainPage, NavBar } from "./styles";
import DrawerPage from "../../components/Drawer";
import { useEffect, useState } from "react";
import { getProduct } from "../../services/Product";

interface ProductData {
  id: string;
  name: string;
  thumb: string;
}

interface Props {
  products: ProductData[];
}

const Products: React.FC<Props> =  ({ products }: Props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [product, setProducts] = useState<ProductData[]>([]);
 
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
        setProducts(data.data);
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
      </NavBar>
      <MainPage>
        <GridProducts products={product} category="Mais Vendidos" />
      </MainPage>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const data = await getProduct();
    return {
      props: {
        products: data,
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      props: {
        products: [],
      },
    };
  }
}

export default Products