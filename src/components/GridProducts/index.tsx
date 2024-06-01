import React from "react";
import { GridItem, ProductImage, GridContainer, Grid, ProductLink } from "./styles";

interface IProduct {
  id: string;
  name: string;
  thumb: string;
}

interface IProps {
  category?: string;
  products: IProduct[];
}

const GridProducts: React.FC<IProps> = ({ category, products }) => {
  return (
    <GridContainer>
      <h1>{category}</h1>
      <Grid>
        {products.map((product) => (
          <GridItem key={product.id}>
            <ProductLink
              href={`/products/info-product/${product.id}`}
              style={{ textDecoration: "none" }}
            >
              <ProductImage src={product.thumb} alt={product.name} />
            </ProductLink>
          </GridItem>
        ))}
      </Grid>
    </GridContainer>
  );
};

export default GridProducts;
