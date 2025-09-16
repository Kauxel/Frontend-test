import { create } from "zustand";
import axios from "axios";
import type {
  DashboardSummary,
  Office,
  Room,
  JenisKonsumsi,
  PemesananPayload,
} from "./types";

interface ApiStoreState {
  dashboardSummary: DashboardSummary | null;
  officeNames: Office[];
  rooms: Room[];
  jenisKonsumsi: JenisKonsumsi[];
  isLoading: boolean;
  error: string | null;

  fetchDashboardSummary: () => Promise<void>;
  fetchOfficeNames: () => Promise<void>;
  fetchRooms: () => Promise<void>;
  fetchJenisKonsumsi: () => Promise<void>;
  postPemesananRuangan: (payload: PemesananPayload) => Promise<unknown>;
  resetError: () => void;
}

const API_BASE_URL1 =
  "https://6666c7aea2f8516ff7a4e261.mockapi.io/api/dummy-data";
const API_BASE_URL2 =
  "https://6686cb5583c983911b03a7f3.mockapi.io/api/dummy-data";

const roomsStore = create<ApiStoreState>((set) => ({
  dashboardSummary: null,
  officeNames: [],
  rooms: [],
  jenisKonsumsi: [],
  isLoading: false,
  error: null,

  fetchOfficeNames: async () => {
    set({ isLoading: true });
    try {
      const response = await axios.get<Office[]>(
        `${API_BASE_URL1}/masterOffice`
      );
      set({ officeNames: response.data, isLoading: false });
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      set({ error: errorMessage, isLoading: false });
    }
  },

  fetchRooms: async () => {
    set({ isLoading: true });
    try {
      const response = await axios.get<Room[]>(
        `${API_BASE_URL1}/masterMeetingRooms`
      );
      set({ rooms: response.data, isLoading: false });
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      set({ error: errorMessage, isLoading: false });
    }
  },

  fetchJenisKonsumsi: async () => {
    set({ isLoading: true });
    try {
      const response = await axios.get<JenisKonsumsi[]>(
        `${API_BASE_URL2}/masterJenisKonsumsi`
      );
      set({ jenisKonsumsi: response.data, isLoading: false });
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      set({ error: errorMessage, isLoading: false });
    }
  },

  fetchDashboardSummary: async () => {
    set({ isLoading: true });
    try {
      const response = await axios.get<DashboardSummary>(
        `${API_BASE_URL2}/summaryBookings`
      );
      set({ dashboardSummary: response.data, isLoading: false });
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      set({ error: errorMessage, isLoading: false });
    }
  },

  postPemesananRuangan: async (payload: PemesananPayload) => {
    set({ isLoading: true });
    try {
      const response = await axios.post("/api/pemesanan", payload);
      set({ isLoading: false });
      return response.data;
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      set({ error: errorMessage, isLoading: false });
    }
  },

  resetError: () => set({ error: null }),
}));

export default roomsStore;
