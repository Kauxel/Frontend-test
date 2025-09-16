import { Box, Typography, Grid, Card, CardContent, CircularProgress } from "@mui/material";

const units = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  rooms: Array.from({ length: 3 }, (_, j) => ({
    name: `Nama Ruangan ${j + 1}`,
    percent: 86.34,
    consumption: 35000000,
    snackSiang: 140,
    makanSiang: 280,
    snackSore: 140,
  })),
}));

const Dashboard = () => {
  return (
    <Box className="p-6">
      <Typography variant="h5" className="text-gray-500" gutterBottom>Dashboard - Januari 2024</Typography>
      <Grid container spacing={2}>
        {units.map((unit) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={unit.id}>
            {unit.rooms.map((room, idx) => (
              <Card key={idx} className="mb-4 shadow">
                <CardContent>
                  <Typography className="font-semibold">Unit Induk {unit.id}</Typography>
                  <Typography>{room.name}</Typography>
                  <Box className="flex items-center space-x-4 mt-2">
                    <CircularProgress
                      variant="determinate"
                      value={room.percent}
                      size={50}
                    />
                    <Typography>{room.percent}%</Typography>
                  </Box>
                  <Typography className="mt-2 text-sm text-gray-500">Nominal Konsumsi</Typography>
                  <Typography className="font-bold text-lg text-blue-600">
                    Rp {room.consumption.toLocaleString("id-ID")}
                  </Typography>
                  <Box className="mt-4 text-sm">
                    <div>Snack Siang: {room.snackSiang}</div>
                    <div>Makan Siang: {room.makanSiang}</div>
                    <div>Snack Sore: {room.snackSore}</div>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
