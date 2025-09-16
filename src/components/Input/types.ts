import type dayjs from "dayjs";

export type InputVariant = 'text' | 'currency' | 'number' | 'dropdown' | 'date' | 'time';

export interface BaseInputProps {
  label?: string;
  value?: string | number;
  onChange?: ((e: React.ChangeEvent<unknown>) => void) | ((value: dayjs.Dayjs | null) => void);
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  name?: string;
}
