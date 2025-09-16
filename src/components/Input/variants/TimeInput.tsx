import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import type { BaseInputProps } from '../types';
import { FormControl, TextField, Typography } from '@mui/material';
import dayjs from 'dayjs';

interface TimeInputProps extends Omit<BaseInputProps, 'onChange'> {
    minTime?: dayjs.Dayjs;
    maxTime?: dayjs.Dayjs;
    time?: dayjs.Dayjs | null;
    onChange?: (value: dayjs.Dayjs | null) => void;
}

const TimeInput = ({ label = 'Pilih Waktu', onChange, disabled = false, minTime, maxTime, name = 'time', time = null }: TimeInputProps) => {
    return (
        <FormControl fullWidth>
            <Typography variant="caption" className="text-gray-500">{label}</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                    value={time}
                    onChange={(newValue) =>
                        onChange?.(newValue)
                    }
                    minTime={minTime}
                    maxTime={maxTime}
                    disabled={disabled}
                    ampm={false}
                    name={name}
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
};

export default TimeInput;