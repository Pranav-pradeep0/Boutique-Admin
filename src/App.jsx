import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Pages/Sidebar";
import { Box, Grid, Paper, useTheme } from "@mui/material";
import Dashboard from "./Pages/Dashboard";

const App = () => {
  const theme = useTheme();

  return (
    <Box>
      <Grid container>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: "white",
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0, 
            zIndex: 1,
            overflowY: "auto",
            width: "20%", 
          }}
        >
          <Box style={{ padding: "20px" }}>
            <Sidebar />
          </Box>
        </Grid>

        <Grid item xs={12} md={9} style={{ marginLeft: "20%" }}>
          <Box style={{ padding: "20px" }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
