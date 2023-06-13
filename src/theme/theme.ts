import { createTheme } from "@mui/material/styles";
import darkScrollbar from "@mui/material/darkScrollbar";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff6600",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: themeParam => ({
        body: themeParam.palette.mode === "dark" ? darkScrollbar() : null,
      }),
    },
  },
});

export default theme;
