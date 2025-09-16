import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  CardActions,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Button from "../components/Button/Button";
import BreadCrumbs from "../components/BreadCrumb/BreadCrumb";
import Input from "../components/Input";
import { useCallback, useState } from "react";
import type { Dayjs } from "dayjs";

const FormPage = () => {
  const Navigate = useNavigate();
  type StateType = {
    unit: string;
    room: string;
    capacity: number;
    date: Dayjs | null;
    startTime: Dayjs | null;
    endTime: Dayjs | null;
    numberOfParticipants: number;
    consumptionValue: number;
  };

  const [state, setState] = useState<StateType>({
    unit: "",
    room: "",
    capacity: 0,
    date: null,
    startTime: null,
    endTime: null,
    numberOfParticipants: 0,
    consumptionValue: 0
  });
  const handleChange = useCallback((e: React.ChangeEvent<unknown>) => {
    const target = e.target as HTMLInputElement & { name?: string; value?: unknown };
    const { name, value } = target;
    setState((prevState) => ({ ...prevState, [name as string]: value }));
  }, []);

  const handleStartTimeChange = (newValue: Dayjs | null) => {
  setState((prevState) => {
    const updatedState = { ...prevState, startTime: newValue };
    if (prevState.endTime && newValue && newValue.isAfter(prevState.endTime)) {
      updatedState.endTime = null;
    }
    return updatedState;
  });
};

const handleEndTimeChange = (newValue: Dayjs | null) => {
  setState((prevState) => {
    const updatedState = { ...prevState, endTime: newValue };
    if (prevState.startTime && newValue && newValue.isBefore(prevState.startTime)) {
      updatedState.startTime = null;
    }
    return updatedState;
  });
};

  const fieldsStyle = `grid grid-cols-4 w-full justify-start items-center py-2 gap-4`;

  return (
    <Box className="justify-center items-center flex flex-col w-full">
      <Box className="w-full py-8" display="flex" justifyContent="space-start" alignItems="flex-start" gap={2}>
        <IconButton
          size="large"
          onClick={() => Navigate(-1)}
          sx={{
            borderRadius: '8px', width: 40, height: 40, backgroundColor: '#4A8394', display: 'flex', justifyContent: 'center', alignItems: 'center', '&:hover': { backgroundColor: '#c0c0c0', },
          }}
        >
          <KeyboardArrowLeftIcon fontSize="inherit" />
        </IconButton>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Typography variant="h4">Ruang Meeting</Typography>
          <BreadCrumbs>
            <a href="/room">
              <Typography color="text.primary">Ruang Meeting</Typography>
            </a>
            <Typography color="text.primary">Form Booking</Typography>
          </BreadCrumbs>
        </Box>
      </Box>
      <Card sx={{ width: '100%', padding: 2, boxShadow: 3, borderRadius: 2 }}>
        <CardContent sx={{ textAlign: 'left' }}>
          <Typography variant="h5" >Info Ruang Meeting</Typography>
          <div className={fieldsStyle}>
            <Input variant="dropdown" label="Nama Unit" onChange={handleChange} name="unit" list={["Unit 1", "Unit 2", "Unit 3"]} />
            <Input variant="dropdown" label="Ruang Meeting" onChange={handleChange} name="room" list={["Ruang 1", "Ruang 2"]} />
          </div>
          <div className={fieldsStyle}>
            <Input variant="number" label="Kapasitas" onChange={handleChange} name="capacity" />
          </div>
          <div className={fieldsStyle}>
            <Input variant="date" label="Tanggal Rapat" onChange={handleChange} disablePast={true} name="date" />
            <Input variant="time" label="Waktu Mulai" onChange={handleStartTimeChange} time={state.startTime} />
            <Input variant="time" label="Waktu Selesai" onChange={handleEndTimeChange} time={state.endTime} />
          </div>
          <div className={fieldsStyle}>

            <Input variant="number" label="Jumlah Peserta" onChange={handleChange} name="numberOfParticipants" />
          </div>
          <Box className="mt-4 justify-start items-start flex flex-col">
            <Typography className="mb-2 font-semibold">Jenis Konsumsi</Typography>
            <FormControlLabel control={<Checkbox />} label="Snack Siang" />
            <FormControlLabel control={<Checkbox />} label="Makan Siang" />
            <FormControlLabel control={<Checkbox />} label="Snack Sore" />
          </Box>
          <div className={fieldsStyle}>
            <Input variant="currency" label="Nominal Konsumsi" disabled={true} onChange={handleChange} name="consumptionValue" />
          </div>

        </CardContent>
        <CardActions className="justify-end px-4">
          <Button variant="text" sx={{ color: "error.main", marginTop: 6 }} title="Batal" />
          <Button variant="contained" disabled sx={{ color: "primary", marginTop: 6 }} title="Simpan" />
        </CardActions>
      </Card>
    </Box>
  );
};

export default FormPage;
