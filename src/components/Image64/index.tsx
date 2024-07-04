import React, { useState, useEffect } from "react";
import {
  HiddenInput,
  Icon,
  ImageView,
  ProductImage,
  UploadIcon,
} from "./styles";
import Notification from "../../components/Notification";

interface ImageUploaderProps {
  onChange: (base64Image: string) => void;
  defaultValue?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  onChange,
  defaultValue,
}) => {
  const [imageBase64, setImageBase64] = useState<string>("");
  const [, setImageFile] = useState<File | null>(null);
  const [notification, setNotification] = useState<{
    type: "success" | "error" | "warning";
    content: string;
  } | null>(null);

  useEffect(() => {
    if (defaultValue) {
      setImageBase64(defaultValue);
      onChange(defaultValue);
    }
  }, [defaultValue, onChange]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        if (typeof result === "string") {
          setImageBase64(result);
          onChange(result);
        } else {
          setNotification({ type: "error", content: "'Erro ao ler a imagem!" });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <>
        {notification && (
          <Notification
            type={notification.type}
            content={notification.content}
          />
        )}
      </>
      <ImageView>
        <ProductImage src={imageBase64} alt="Preview" />
        <UploadIcon htmlFor="upload-input">
          <Icon />
        </UploadIcon>
        <HiddenInput
          id="upload-input"
          type="file"
          onChange={handleImageChange}
        />
      </ImageView>
    </>
  );
};

export default ImageUploader;
