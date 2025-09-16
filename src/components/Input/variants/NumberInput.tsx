import { FormControl, TextField, Typography } from "@mui/material";
import type { BaseInputProps } from "../types";

interface NumberInputProps extends Omit<BaseInputProps, 'onChange'> {
  onChange?: ((e: React.ChangeEvent<unknown>) => void)
}

const NumberInput = ({ label, value, onChange, disabled = false, name }: NumberInputProps) => {
  return (
    <FormControl fullWidth>
      <Typography variant="caption" className="text-gray-500">{label}</Typography>
      <TextField
        id="select"
        value={value}
        type="number"
        disabled={disabled}
        slotProps={{ htmlInput: { inputMode: 'numeric' } }}
        onChange={onChange}
        name={name}
      />
    </FormControl>
  );
}

export default NumberInput;