import { useState, useEffect } from 'react';
import translate from 'translate';

translate.engine = 'libre'; // Usar o motor de tradução LibreTranslate (offline)

const useGreekTranslation = (text: string): string => {
  const [translatedText, setTranslatedText] = useState('');

  useEffect(() => {
    if (text) {
      const translateToGreek = async (input: string) => {
        try {
          const result = await translate(input, 'el');
          setTranslatedText(result);
        } catch (error) {
          console.error('Erro na tradução:', error);
        }
      };

      translateToGreek(text);
    }
  }, [text]);

  return translatedText;
};

export default useGreekTranslation;
