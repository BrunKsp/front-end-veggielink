import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MenuOutlined, SmileOutlined } from "@ant-design/icons/lib/icons";
import Seo from "../../../components/Seo";
import DrawerPage from "../../../components/Drawer";
import { getProductById } from "../../../services/Product";
import Notification from "../../../components/Notification";
import {
  Header,
  StyledLink,
  ProductName,
  ImageView,
  ProductImage,
  DescriptionView,
  Card,
  CardTimeLine,
  HeaderContainer,
  NavBar,
  MainPage,
} from "./styles";
import { Timeline } from "antd";

interface ProductData {
  id: string;
  name: string;
  thumb: string;
  description: string;
  solo: string;
  fertilizer: string;
  plantingDate: string;
  harvestDate: string;
}

const TimeLineProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [product, setProduct] = useState<ProductData | null>(null);

  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id as string);
        console.log(data);
        setProduct(data.data);
      } catch (error) {
        <Notification type={"error"} content={"Erro ao buscar Produto!"} />;
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <>
      <Seo title="Produtos" />
      <NavBar>
        <MenuOutlined onClick={handleOpenDrawer} style={{ fontSize: "24px" }} />
        <HeaderContainer>
          <StyledLink href="/products">
            <ProductName>Produtos</ProductName>
          </StyledLink>
        </HeaderContainer>
        <DrawerPage open={drawerOpen} onClose={handleCloseDrawer} />
        <Header>
          <ProductName>/{product?.name}</ProductName>
        </Header>
      </NavBar>
      <MainPage>
        <Card>
          <ImageView>
            <ProductImage src={product?.thumb} alt={product?.name} />
          </ImageView>
          <DescriptionView>
            <p>{product?.description}</p>
          </DescriptionView>
        </Card>
        <CardTimeLine>
          <Timeline
            items={[
              {
                color: "green",
                children: `Colhido dia ${product?.harvestDate?.slice(0,10)}`,
              },
              {
                color: "green",
                children: "Create a services site 2015-09-01",
              },
              {
                color: "red",
                children: (
                  <>
                    <p>Solve initial network problems 1</p>
                    <p>Solve initial network problems 2</p>
                    <p>Solve initial network problems 3 2015-09-01</p>
                  </>
                ),
              },
              {
                children: (
                  <>
                     <p>Adubação {product?.fertilizer}</p>
                  </>
                ),
              },
              {
                color: "gray",
                children: (
                  <>
                    <p>Data de Plantio {product?.plantingDate.slice(0, 10)}</p>
                  </>
                ),
              },
              {
                color: "gray",
                children: (
                  <>
                    <p>Data de Preparação {product?.plantingDate.slice(0, 10)}</p>
                    <p>
                      Preparação do Solo{product?.solo}
                    </p>
                  </>
                ),
              },
            ]}
          />
        </CardTimeLine>
      </MainPage>
    </>
  );
};

export default TimeLineProduct;
