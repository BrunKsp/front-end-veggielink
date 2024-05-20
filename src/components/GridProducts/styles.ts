import styled from "@emotion/styled";

export const GridContainer = styled.div`
  padding: 10px;

  h1 {
    margin-bottom: 20px;
    display: flex;
    font-family: "Sora, sans-serif";
    font-size: 24px;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
`;

export const GridItem = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  width: 45%;
  height: 100px;
`;

export const ProductImage = styled.img`
  display: flex;
  object-fit: cover;
  border-radius: 8px;
  width: 100%;
  height: 100%;
`;

export const ProductName = styled.h2`
  font-size: 1.2em;
  margin: 10px 0;
`;

export const ProductCategory = styled.p`
  color: #555;
`;
