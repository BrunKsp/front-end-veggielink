import styled from "@emotion/styled";

export const MainPage = styled.div`
  background-attachment: fixed;
  background-color: #e5e5e5;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 50px;
`;

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
`;

export const ImgNavBar = styled.div`
  margin-left: 250px;
`;

export const LogoNavBar = styled.img`
  width: 30px;
  height: 30px;
`;

export const FlexWrap = styled.div`
  flex: 2;
  justify-content: space-between;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const DivText = styled.div`
  width: 90%;
  max-width: 230px;
  margin-top: 20px;
  margin-right: 90px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  font-family: "Sora, sans-serif";
  word-wrap: break-word;
  h2 {
    font-size: 32px;
    margin: 20px;
    text-align: left;
  }
`;

export const Monitoramento = styled.div`
  text-align: center;
  margin-top: 70px;
  font-family: "Sora, sans-serif";
  margin-bottom: 20px;
  width: 90%;
  p {
    color: #616161;
    font-size: 24px;
    text-align: center;
  }
`;

export const Clientes = styled.div`
  margin: 20px;
  text-align: center;
  h2 {
    font-family: "Roboto, sans-serif";
    font-weight: 800;
    font-size: 18px;
    text-align: center;
  }
  span {
    color: #08f9b0;
    font-size: 25px;
    text-align: center;
  }
`;

export const Image = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: calc(50% - 10px);
`;

export const Logo = styled.img`
  width: 25%;
  height: 30%;
`;
