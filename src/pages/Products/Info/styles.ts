import styled from "@emotion/styled";

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 95%;
  background-color: #e5e5e5;
  padding: 10px;
  z-index: 1000;
  max-width: 100%;
  overflow-x: hidden;
  h1 {
    margin-right: 285px;
    display: flex;
    font-family: "Sora, sans-serif";
    font-size: 34px;
  }
`;

export const MainPage = styled.div`
  background-color: #e5e5e5;
  width: 100%;
  height: 100%;
  /* display: flex; */
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  margin-left: 20px;
`;

export const Card = styled.div`
  width: 80%;
  height: 80vh;
  padding: 2.5%;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    //width: 90%;
    padding: 5%;
  }
`;

export const ImageView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  width: 200px; 
  height: 200px;
`;

export const ProductImage = styled.img`
  display: flex;
  object-fit: cover;
  border-radius: 8px;
  width: 100%;
  height: 100%;
`;
export const DescriptionView = styled.div``;