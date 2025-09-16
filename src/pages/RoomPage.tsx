import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Typography } from "@mui/material";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface DataRow {
    namaUnit: string;
    namaRuangan: string;
    tanggalWaktu: string;
    jumlahPeserta: number;
    nominalKonsumsi: number;
}

const data: DataRow[] = [
    {
        namaUnit: 'Unit A',
        namaRuangan: 'Ruang 101',
        tanggalWaktu: '2025-09-16 09:00 - 11:00',
        jumlahPeserta: 10,
        nominalKonsumsi: 500000
    },
    {
        namaUnit: 'Unit B',
        namaRuangan: 'Ruang 202',
        tanggalWaktu: '2025-09-16 13:00 - 15:00',
        jumlahPeserta: 15,
        nominalKonsumsi: 750000
    },
    {
        namaUnit: 'Unit B',
        namaRuangan: 'Ruang 202',
        tanggalWaktu: '2025-09-16 13:00 - 15:00',
        jumlahPeserta: 15,
        nominalKonsumsi: 750000
    },
    {
        namaUnit: 'Unit B',
        namaRuangan: 'Ruang 202',
        tanggalWaktu: '2025-09-16 13:00 - 15:00',
        jumlahPeserta: 15,
        nominalKonsumsi: 750000
    },
    {
        namaUnit: 'Unit B',
        namaRuangan: 'Ruang 202',
        tanggalWaktu: '2025-09-16 13:00 - 15:00',
        jumlahPeserta: 15,
        nominalKonsumsi: 750000
    },
    {
        namaUnit: 'Unit B',
        namaRuangan: 'Ruang 202',
        tanggalWaktu: '2025-09-16 13:00 - 15:00',
        jumlahPeserta: 15,
        nominalKonsumsi: 750000
    },
    {
        namaUnit: 'Unit B',
        namaRuangan: 'Ruang 202',
        tanggalWaktu: '2025-09-16 13:00 - 15:00',
        jumlahPeserta: 15,
        nominalKonsumsi: 750000
    },
    {
        namaUnit: 'Unit B',
        namaRuangan: 'Ruang 202',
        tanggalWaktu: '2025-09-16 13:00 - 15:00',
        jumlahPeserta: 15,
        nominalKonsumsi: 750000
    },
    {
        namaUnit: 'Unit C',
        namaRuangan: 'Ruang 303',
        tanggalWaktu: '2025-09-17 10:00 - 12:00',
        jumlahPeserta: 20,
        nominalKonsumsi: 1000000
    }
];

const RoomPage = () => {
    const navigate = useNavigate();
    const [order, setOrder] = useState<'asc' | 'desc'>('asc');
    const [orderBy, setOrderBy] = useState<string>('');
    const handleRequestSort = (property: keyof DataRow) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
    const sortedData = [...data].sort((a, b) => {
        if (orderBy) {
            const valueA = a[orderBy as keyof DataRow];
            const valueB = b[orderBy as keyof DataRow];
            if (valueA < valueB) return order === 'asc' ? -1 : 1;
            if (valueA > valueB) return order === 'asc' ? 1 : -1;
        }
        return 0;
    });
    return (
        <Box>
            <div className="grid grid-flow-col grid-rows-2  w-full text-start justify-between items-center py-8">
                <div className="row-span-1 col-span-1">
                    <Typography variant="h4">
                        Ruang Meeting
                    </Typography>
                </div>
                <div className="row-span-1 col-span-1">
                    <a href="/room" className="text-blue-500 underline">
                        Ruang Meeting
                    </a>
                </div>
                <div className="row-span-1 col-span-1">
                    <Button variant="contained" title="+ Pesan Ruangan" onClick={() => navigate("/booking-room")} sx={{ background: '#296377' }} />
                </div>
            </div>
            <TableContainer component={Paper} sx={{
                padding: 2,
                maxHeight: 400,
                borderRadius: 2,
                overflow: 'auto',
                '&::-webkit-scrollbar': {
                    width: '8px',
                },
                '&::-webkit-scrollbar-track': {
                    backgroundColor: '#f1f1f1',
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#ffffff',
                    borderRadius: '10px',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                    backgroundColor: '#cccccc',
                },
            }}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead sx={{ position: 'sticky', top: 0, zIndex: 1, backgroundColor: 'white' }}>
                        <TableRow>
                            <TableCell>
                                <TableSortLabel active={orderBy === 'namaUnit'} direction={orderBy === 'namaUnit' ? order : 'asc'} onClick={() => handleRequestSort('namaUnit')}>
                                    Nama Unit
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel active={orderBy === 'namaRuangan'} direction={orderBy === 'namaRuangan' ? order : 'asc'} onClick={() => handleRequestSort('namaRuangan')}>
                                    Nama Ruangan
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel active={orderBy === 'tanggalWaktu'} direction={orderBy === 'tanggalWaktu' ? order : 'asc'} onClick={() => handleRequestSort('tanggalWaktu')}>
                                    Tanggal dan Waktu
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel active={orderBy === 'jumlahPeserta'} direction={orderBy === 'jumlahPeserta' ? order : 'asc'} onClick={() => handleRequestSort('jumlahPeserta')} >
                                    Jumlah Peserta
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel  active={orderBy === 'nominalKonsumsi'}  direction={orderBy === 'nominalKonsumsi' ? order : 'asc'} onClick={() => handleRequestSort('nominalKonsumsi')} >
                                    Nominal Konsumsi
                                </TableSortLabel>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedData.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.namaUnit}</TableCell>
                                <TableCell>{row.namaRuangan}</TableCell>
                                <TableCell>{row.tanggalWaktu}</TableCell>
                                <TableCell>{row.jumlahPeserta}</TableCell>
                                <TableCell>{row.nominalKonsumsi.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>

    );
};

export default RoomPage;
