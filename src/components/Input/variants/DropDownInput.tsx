import { FormControl, MenuItem, Select, Typography } from "@mui/material";
import type { BaseInputProps } from "../types";
import { useMemo } from "react";

interface DropDownInputProps extends Omit<BaseInputProps, 'onChange'> {
    list?: string[];
    onChange?: ((e: React.ChangeEvent<unknown>) => void)
}

const DropDownInput = ({ label = 'Label', value, onChange, list = [], disabled = false, name = 'Label' }: DropDownInputProps) => {
  const memoizedList = useMemo(() => list, [list]);
  return (
    <FormControl fullWidth>
      <Typography variant="caption" className="text-gray-500">{label}</Typography>
      <Select
        labelId="select-label"
        id="select"
        disabled={disabled}
        value={value}
        onChange={(e) => onChange?.(e as unknown as React.ChangeEvent<unknown>)}
        name={name}
      >
        {memoizedList.map((item, index) => (
          <MenuItem key={index} value={index}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default DropDownInput;