import React, { useEffect, useState } from "react";
import * as tmImage from "@teachablemachine/image";

const TeachableMachineImageModel: React.FC = () => {
  const [predictions, setPredictions] = useState<any[]>([]);
  const [model, setModel] = useState<tmImage.CustomMobileNet | null>(null);
  const URL = "/myModel/"; // Substitua pelo caminho correto do seu modelo

  // Função para carregar o modelo
  const init = async () => {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // Carregar o modelo e os metadados
    const loadedModel = await tmImage.load(modelURL, metadataURL);
    console.log(loadedModel);
    setModel(loadedModel);
  };

  // Função para fazer a previsão com a imagem carregada
  const predict = async (image: HTMLImageElement) => {
    if (!model) return;

    const prediction = await model.predict(image);
    console.log("🚀 ~ predict ~ prediction:", prediction)
    setPredictions(prediction);
  };

  // Função para lidar com o input de arquivo
  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      // Quando a leitura do arquivo terminar
      reader.onload = (e) => {
        const imgElement = new Image();
        imgElement.src = e.target?.result as string;

        // Quando a imagem for carregada, fazemos a predição
        imgElement.onload = () => {
          predict(imgElement);
        };
      };

      // Ler o arquivo como uma URL de dados base64
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    // Inicia a IA quando o componente é montado
    init();
  }, []);

  return (
    <div>
      <h1>Teachable Machine Image Model</h1>
      <input type="file" accept="image/*" onChange={handleFileInput} />
      <div id="label-container">
        {predictions.map((pred, index) => (
          <div key={index}>
            {pred.className}: {pred.probability.toFixed(2)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeachableMachineImageModel;
