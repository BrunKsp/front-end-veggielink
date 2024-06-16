import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ptBR } from "@mui/x-date-pickers/locales";
import { styled } from '@mui/material/styles'; // Importar para estilização

interface BasicDatePickerProps {
  label: string;
  onChange: (date: Date | null) => void;
}

// Estilizar o contêiner
const StyledDatePicker = styled(DatePicker)({
  '& .MuiInputBase-root': {
    fontSize: '1rem', 
    height: '60px',
    width: '300px'
  },
});

export default function BasicDatePicker({ label, onChange }: BasicDatePickerProps) {
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText}
    >
      <StyledDatePicker
        label={label}
        onChange={(date) => onChange(date ? date.toDate() : null)}
      />
    </LocalizationProvider>
  );
}
