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
      main: "#ffefe5", // Error button background color
      text: "#F76C6C", // Error button text color
    },
    background: {
      default: "#FFFFFF", // Default background color
      paper: "#F4F4F4", // Card background color,
      offPaper: "#F4F4F4",
    },
    button: {
      main: "#C8E3E187", // Button color,
      text: "#60A7A1",
    },
    icon: {
      main: "#60A7A1", // General icon color
    },
  },
});

export default theme;
