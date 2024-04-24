import styled from "@emotion/styled";

export const MainPage = styled.div`
  background-attachment: fixed;
  background-color: #e5e5e5;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  @media (max-width: 768px) {
    padding: 10px;
  }
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

export const FlexWrap = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const DivText = styled.div`
  margin: 5% 0;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  grid-gap: 2vh;
  h1 {
    font-family: "Sora, sans-serif";
    font-weight: 800;
    font-size: 22px;
  }
  p {
    font-family: "Roboto";
    font-size: 14px;
    text-align: center;
  }

  @media (max-width: 768px) {
    margin: 2.5% 0;
  }
`;

export const Image = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 100%;
  height: 50%;
`;

export const TextDev = styled.div`
  p {
    font-family: "Roboto";
    font-size: 12px;
    opacity: 0.7;
    @media (max-width: 450px) {
      font-size: 10px;
    }
  }
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const DivLinkValid = styled.div`
  margin: 5% 0;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  grid-gap: 2vh;
  h1 {
    font-family: "Roboto";
    font-weight: 700;
    font-size: 22px;
    color: red;
    @media (max-width: 450px) {
      font-size: 1rem;
      text-align: center;
      width: 90%;
    }
  }
  p {
    font-family: "Roboto";
    font-size: 18px;
    text-align: center;
    @media (max-width: 450px) {
      font-size: 1rem;
      width: 90%;
    }
  }
`;