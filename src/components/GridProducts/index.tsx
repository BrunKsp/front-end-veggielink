import React, { useState } from "react";
import { Skeleton } from "antd";
import {
  GridItem,
  ProductImage,
  GridContainer,
  Grid,
  ProductLink,
  HeaderContainer,
  CategoryTitle,
  MoreLink,
} from "./styles";

interface IProduct {
  id: string;
  name: string;
  thumb: string;
}

interface IProps {
  category?: string;
  products: IProduct[];
  loading: boolean;
}

const GridProducts: React.FC<IProps> = ({ category, products, loading }) => {
  const [showAllProducts, setShowAllProducts] = useState(false);

  const handleShowMore = () => {
    setShowAllProducts(true);
  };

  const productsToDisplay = showAllProducts ? products : products.slice(0, 2);

  return (
    <GridContainer>
      {loading ? (
        <>
          <Skeleton.Input active style={{ width: 200 }} />
          <Skeleton.Input active style={{ width: 100 }} />
        </>
      ) : (
        <>
          <HeaderContainer>
            {category && <CategoryTitle>{category}</CategoryTitle>}
            {!showAllProducts && (
              <MoreLink onClick={handleShowMore}>Ver Mais</MoreLink>
            )}
          </HeaderContainer>
        </>
      )}
      <Grid>
        {productsToDisplay.map((product) => (
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
