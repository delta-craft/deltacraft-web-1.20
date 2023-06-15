"use client";

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import theme from "@src/theme/theme";
import NavBar from "@components/layout/navbar/navbar";

const AppThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Toolbar />
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
