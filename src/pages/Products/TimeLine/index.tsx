import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MenuOutlined, SmileOutlined } from "@ant-design/icons/lib/icons";
import Seo from "../../../components/Seo";
import DrawerPage from "../../../components/Drawer";
import { getProductById } from "../../../services/Product";
import { Button, Card } from "@mui/material";
import Notification from "../../../components/Notification";
import { NavBar, MainPage } from "../styles";
import {
  Header,
  StyledLink,
  ProductName,
  ImageView,
  ProductImage,
  DescriptionView,
} from "./styles";
import { Timeline } from "antd";

interface ProductData {
  id: string;
  name: string;
  thumb: string;
  description: string;
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
        <MenuOutlined onClick={handleOpenDrawer} style={{ fontSize: "32px" }} />
        <DrawerPage open={drawerOpen} onClose={handleCloseDrawer} />
        <Header>
          <StyledLink href="/products">
            <ProductName>Produtos</ProductName>
          </StyledLink>
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
          <a href="/sigIn" style={{ textDecoration: "none", color: "inherit" }}>
            <h4>Compre direto com o produtor</h4>
          </a>
          <Timeline
            items={[
              {
                color: "green",
                children: "Create a services site 2015-09-01",
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
                    <p>Technical testing 1</p>
                    <p>Technical testing 2</p>
                    <p>Technical testing 3 2015-09-01</p>
                  </>
                ),
              },
              {
                color: "gray",
                children: (
                  <>
                    <p>Technical testing 1</p>
                    <p>Technical testing 2</p>
                    <p>Technical testing 3 2015-09-01</p>
                  </>
                ),
              },
              {
                color: "gray",
                children: (
                  <>
                    <p>Technical testing 1</p>
                    <p>Technical testing 2</p>
                    <p>Technical testing 3 2015-09-01</p>
                  </>
                ),
              },
              {
                color: "#00CCFF",
                dot: <SmileOutlined />,
                children: <p>Custom color testing</p>,
              },
            ]}
          />
        </Card>
      </MainPage>
    </>
  );
};

export default TimeLineProduct;
