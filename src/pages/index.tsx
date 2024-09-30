import { useState } from "react";
import useGreekTranslation from "../components/TextEditor";
//import useGreekTranslation from "../hooks/useGreekTranslation"; // Verifique o caminho do arquivo

export default function Home() {
  const [inputText, setInputText] = useState('');
  const translatedText = useGreekTranslation(inputText);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log("oii")
    setInputText(event.target.value);
  };

  return (
    <div>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Digite aqui para traduzir para o grego"
      />
      <div>
        <h2>Tradução para Grego:</h2>
        <p>{translatedText}</p>
      </div>
    </div>
  );
}
