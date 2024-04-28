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
  flex-direction: row-reverse;
`;

export const NavBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #e5e5e5;
  padding: 10px;
  z-index: 1000;
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
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center; /* Adicionando para centralizar o texto */
  font-family: "Roboto, sans-serif";
  font-weight: 800;
  h2 {
    font-size: 20px;
  }
  span {
    margin-top: 10px;
    color: #08f9b0;
    font-size: 25px;
  }
`;

export const Monitoramento = styled.div`
  text-align: center;
  margin-top:20px;
  h2 {
    font-family: "Roboto,, sans-serif";
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
