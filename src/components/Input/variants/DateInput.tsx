import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import type { BaseInputProps } from '../types';
import { FormControl, TextField, Typography } from '@mui/material';
import dayjs from 'dayjs';

interface DateInputProps extends BaseInputProps {
  disablePast?: boolean; 
  minDate?: dayjs.Dayjs;
  onChange?: (value: dayjs.Dayjs | null) => void;
}

const DateInput = ({ label = 'Pilih Tanggal', onChange, disabled = false, disablePast = false, minDate, name = 'tanggal' }: DateInputProps) => {

  return (
    <FormControl fullWidth>
      <Typography variant="caption" className="text-gray-500">{label}</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          // label="Basic date picker"
          // value={value}
          minDate={minDate ?? (disablePast ? dayjs() : undefined)}
          onChange={(newValue) =>
                        onChange?.(newValue)
                    }
          name={name}
          disabled={disabled}
          enableAccessibleFieldDOMStructure={false}
          slots={{
            textField: (params) => (
              <TextField
                {...params}
              />
            )
          }}
        />
      </LocalizationProvider>
    </FormControl>
  );
}

export default DateInput;