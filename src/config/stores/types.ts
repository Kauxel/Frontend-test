export interface DashboardSummary {
  totalRooms: number;
  totalOffices: number;
  totalBookings: number;
}

export interface Office {
  id: string;
  name: string;
}

export interface Room {
  id: string;
  name: string;
  capacity: number;
}

export interface JenisKonsumsi {
  id: string;
  name: string;
}

export interface PemesananPayload {
  office: string;
  room: string;
  tanggal: string;
  konsumsi: string;
}
