import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    gray: {
      0: string;
      25: string;
      50: string;
      75: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
  }

  interface PaletteOptions {
    gray?: {
      0: string;
      25: string;
      50: string;
      75: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
  }
}

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
    gray: {
      0: "#FFFFFF",
      25: "#F2F2F7",
      50: "#E5E5EA",
      75: "#D1D1D6",
      100: "#C7C7CC",
      200: "#AEAEB2",
      300: "#8E8E93",
      400: "#636366",
      500: "#48484A",
      600: "#3A3A3C",
      700: "#2C2C2E",
      800: "#1C1C1E",
      900: "#131314",
    },
  },
});
