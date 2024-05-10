import styled from 'styled-components';

// Estilizando o container do carrossel
export const Container = styled.div`
  width: 100%;
  overflow-x: auto; /* Adicionando overflow-x para permitir rolagem horizontal */
`;

// Estilizando cada slide do carrossel
export const Slide = styled.div`
  position: relative;
  display: flex; /* Usando flexbox para centralizar verticalmente as imagens */
  justify-content: center; /* Centralizando horizontalmente as imagens */
`;

// Estilizando o bloco cinza para as imagens
export const ImageContainer = styled.div`
  position: relative;
  height: 300px; /* Defina uma altura fixa para todas as imagens */
  background-color: #ccc; /* Cor de fundo cinza */
  display: flex; /* Usando flexbox para alinhar as imagens */
  justify-content: center; /* Centralizando horizontalmente as imagens */
  align-items: center; /* Centralizando verticalmente as imagens */
  margin: 0 10px; /* Espaço entre cada imagem */
`;

// Estilizando as imagens dentro dos slides
export const Image = styled.img`
  max-width: 100%; /* Definindo a largura máxima da imagem */
  max-height: 100%; /* Definindo a altura máxima da imagem */
  object-fit: contain; /* Ajustando o comportamento da imagem para caber no container */
`;

// Estilizando para dispositivos móveis
export const MobileSlide = styled(Slide)`
  width: 50%;
  float: left;
`;
