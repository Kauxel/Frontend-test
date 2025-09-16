import { create } from 'zustand';

interface FormState {
  unit: string;
  room: string;
  capacity: number;
  date: string;
  startTime: string;
  endTime: string;
  numberOfParticipants: number;
  consumptionValue: number;
  setField: (name: string, value: unknown) => void;
}

export const useFormStore = create<FormState>((set) => ({
  unit: '',
  room: '',
  capacity: 0,
  date: '',
  startTime: '',
  endTime: '',
  numberOfParticipants: 0,
  consumptionValue: 0,
  setField: (name, value) => set((state) => ({ ...state, [name]: value })),
}));
