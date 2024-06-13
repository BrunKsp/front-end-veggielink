import React, { useEffect, useState } from "react";
import { Select, FormControl, MenuItem, SelectChangeEvent } from "@mui/material";
import { getAllCategorys } from "../../services/Categorys";

interface Category {
  id: string;
  name: string;
}

interface SelectCategoryProps {
  onChange: (categoryId: string) => void;
}

const SelectCategory: React.FC<SelectCategoryProps> = ({ onChange }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllCategorys(); 
        setCategories(response.data);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (event: SelectChangeEvent<string>) => {
    const categoryId = event.target.value;
    setSelectedCategory(categoryId);
    onChange(categoryId);
  };

  return (
    <FormControl fullWidth>
      <Select
        label="Selecione uma categoria"
        value={selectedCategory}
        onChange={handleChange}
        displayEmpty
      >
        <MenuItem value="" disabled>
          Selecione uma categoria
        </MenuItem>
        {categories.map((category) => (
          <MenuItem key={category.id} value={category.id}>
            {category.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectCategory;
