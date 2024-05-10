import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#19201F", // Sidebar background color
    },
    secondary: {
      main: "#ECF5EE", // Success button background color
      text: "#60A7A1", // Success button text color
    },
    error: {
      main: "#FF5C00", // Error button background color
      text: "#F76C6C", // Error button text color
    },
    background: {
      default: "#FFFFFF", // Default background color
      paper: "#FAFAFA", // Card background color
    },
    button: {
      main: "#60A7A1", // Button color
    },
    icon: {
      main: "#60A7A1", // General icon color
    },
  },
});

export default theme;
