import React from "react";
import { Skeleton } from "antd";
import {
  GridItem,
  ProductImage,
  GridContainer,
  Grid,
  ProductLink,
} from "./styles";

interface IProduct {
  id: string;
  name: string;
  thumb: string;
}

interface IProps {
  category?: string;
  products: IProduct[];
  loading: boolean; // Adicione uma propriedade de carregamento
}

const GridProducts: React.FC<IProps> = ({ category, products, loading }) => {
  console.log(loading);
  return (
    <GridContainer>
      {loading ? (
        <Skeleton.Input active />
      ) : (
        <h1>{category}</h1>
      )}
      <Grid>
        {products.map((product) => (
          <GridItem key={product.id}>
            {loading ? (
              <Skeleton.Image active />
            ) : (
              <ProductLink
                href={`/products/info-product/${product.id}`}
                style={{ textDecoration: "none" }}
              >
                <ProductImage src={product.thumb} alt={product.name} />
              </ProductLink>
            )}
          </GridItem>
        ))}
      </Grid>
    </GridContainer>
  );
};

export default GridProducts;
