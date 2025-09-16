import { FormControl, TextField, Typography } from "@mui/material";
import type { BaseInputProps } from "../types";

interface TextInputProps extends Omit<BaseInputProps, 'onChange'> {
  onChange?: ((e: React.ChangeEvent<unknown>) => void)
}

const TextInput = ({ label, value, onChange, disabled = false, name }: TextInputProps) => {
  return (
    <FormControl fullWidth>
      <Typography variant="caption" className="text-gray-500">{label}</Typography>
      <TextField
        id="select"
        value={value}
        type="text"
        disabled={disabled}
        onChange={onChange}
        variant="standard"
        name={name}
      />
    </FormControl>
  );
}

export default TextInput;