import React from "react";
import { GridItem, ProductImage, GridContainer, Grid } from "./styles";

interface IProduct {
  id:string;
  name:string;
  thumb:string;
}

interface IProps {
  id?: string;
  category?: string;
  thumb?: string;
  products: IProduct[];
}

const GridProducts: React.FC<IProps> = ({ category, products }) => {
  return (
    <GridContainer>
      <h1>{category}</h1>
      <Grid>
        {products?.map((product) => (
          <GridItem key={product.id} >
            <ProductImage src={product.thumb} alt={product.name} />
            {/* <ProductName>{product.name}</ProductName>
            <ProductCategory>{product.category}</ProductCategory> */}
          </GridItem>
        ))}
      </Grid>
    </GridContainer>
  );
}

export default GridProducts;
