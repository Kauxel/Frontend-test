import { NumericFormat } from 'react-number-format';
import TextInput from './TextInput';
import type { BaseInputProps } from '../types';
import { FormControl, Typography } from '@mui/material';

interface CurrencyInputProps extends Omit<BaseInputProps, 'onChange'> {
    list?: string[];
    onChange?: ((e: React.ChangeEvent<unknown>) => void)
}

const CurrencyInput = ({ label = 'Label', value = 1, disabled = true, onChange }: CurrencyInputProps) => (
  <FormControl fullWidth>
    <Typography variant="caption" className="text-gray-500">{label}</Typography>
    <NumericFormat
      value={value}
      onChange={onChange}
      customInput={TextInput}
      disabled={disabled}
      thousandSeparator="."
      decimalSeparator=","
      allowNegative={false}
      valueIsNumericString
      prefix="Rp. "
    />
  </FormControl>
);

export default CurrencyInput;