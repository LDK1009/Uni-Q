import { createTheme } from '@mui/material/styles';

export const muiTheme = createTheme({
  palette: {
    primary: {
      light: "#42A5F5",
      main: "#2196F3",
      dark: "#1E88E5",
    },
    secondary: {
      main: "#BA68C8",
      light: "#9C27B0",
      dark: "#7B1FA2",
    },
    info: {
      main: "#01579B",
      light: "#0288D1",
      dark: "#03A9F4",
    },
    success: {
      main: "#4CAF50",
      light: "#2E7D32",
      dark: "#1B5E20",
    },
    warning: {
      main: "#FF9800",
      light: "#E65100",
      dark: "#EF6C00",
    },
    error: {
      main: "#EF5350",
      light: "#D32F2F",
      dark: "#C62828",
    },
  },
});
