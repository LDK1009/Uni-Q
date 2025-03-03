"use client";

import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { muiTheme } from "@/styles/theme";
import { CssBaseline } from "@mui/material";

const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
    </MuiThemeProvider>
  );
};

export default ThemeProviderWrapper;