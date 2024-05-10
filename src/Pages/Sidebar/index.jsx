import { Box } from "@mui/material";
import React from "react";
import Logo from '../../assets/SidebarLogo.svg'

const Sidebar = () => {
  return (
    <Box sx={{
      display:'flex',
      alignItems:'center',
      flexDirection:'column',
      justifyContent:'space-around'
    }}>
      <Box>
        <img src={Logo} />
      </Box>
      <Box>
        
      </Box>
    </Box>
  );
};

export default Sidebar;
