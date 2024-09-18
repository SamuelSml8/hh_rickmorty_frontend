import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff9800",
    },
    secondary: {
      main: "#272b33",
    },
    background: {
      default: "#ff9800",
    },
    text: {
      primary: "#272b33",
      secondary: "#ff9800",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#ff9800",
          color: "#272b33",
          border: "2px solid #ff9800",
          "&:hover": {
            backgroundColor: "#272b33",
            color: "#ff9800",
            borderColor: "#272b33",
          },
        },
      },
    },
  },
  typography: {
    fontFamily:
      "-apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  },
});

export default theme;
