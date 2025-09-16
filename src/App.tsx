import { createTheme, ThemeProvider } from '@mui/material';
import './App.css'
import AppRoutes from './config/routes'

function App() {
  const theme = createTheme({
    typography: {
      fontWeightRegular: 400,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontWeight: 600,
            fontSize: '14px',
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            fontSize: '14px',
            fontWeight: 400,
          },
        },
      },
       MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: '12px',
          },
        },
      },
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
