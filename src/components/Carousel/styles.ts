import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOutLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;
export const TrocaImagensContainer = styled.div`
  position: relative;
  width: 100%;
  height: 20vh;
  justify-content: flex-start;
  overflow: hidden;
  align-items: flex-start;
  background-size: cover;
  background-position: center;
  border-radius: 13px;
  margin-top: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  /* @media (max-width: 768px) {
    width: 50%;
    height: 50vh;
    justify-content: flex-start;
    display: none;
  } */
`;

export const TrocaImagensInner = styled.div`
  display: flex;
`;

export const TrocaImagensItem = styled.div`
  flex: 0 0 50vw;
  height: 10%;
  transition: opacity 1s ease-in-out;

  &.visible {
    opacity: 1;
    animation-name: ${slideInRight}; /* Aplicando animação de entrada */
  }

  &.hidden {
    opacity: 0;
    animation-name: ${slideOutLeft}; /* Aplicando animação de saída */
  }

  @media (max-width: 420px) {
    flex: 0 0 100%;
    display: none;
  }
`;
