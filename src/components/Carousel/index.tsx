import React, { useState, useEffect } from "react";
import {
  TrocaImagensContainer,
  TrocaImagensInner,
  TrocaImagensItem,
} from "./styles";
const Caroussel: React.FC = () => {
  const imagens = [
    require("../../assets/Images/feltrin.png"),
    require("../../assets/Images/yara.png"),
    require("../../assets/Images/newHolland.jpg"),
    require("../../assets/Images/syngenta.png"),
    require("../../assets/Images/embrapa.png"),
  ];
  const [indiceImagem, setIndiceImagem] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndiceImagem((prevIndice) => (prevIndice + 1) % imagens.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [imagens.length]);

  return (
    <TrocaImagensContainer>
      <TrocaImagensInner>
        {imagens.map((imagem, index) => (
          <TrocaImagensItem
            key={index}
            className={
              index >= indiceImagem && index < indiceImagem + 3
                ? "visible"
                : "hidden"
            }
          >
            <img
              src={imagem}
              alt={`Imagem ${index + 1}`}
              style={{  width: "100%", height: "100%" }}
            />
          </TrocaImagensItem>
        ))}
      </TrocaImagensInner>
    </TrocaImagensContainer>
  );
};

export default Caroussel;
