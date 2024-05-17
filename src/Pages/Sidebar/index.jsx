import { Box } from "@mui/material";
import React from "react";
import Logo from "../../assets/SidebarLogo.svg";
import SidebarList from "../../Components/SidebarList";
import {
  Basket,
  DiamondsFour,
  Dress,
  ListHeart,
  ShoppingCart,
  SquaresFour,
  TextIndent,
} from "@phosphor-icons/react";

const dashboardButtons = [
  {
    icon: <SquaresFour size={22} />,
    text: "Dashboard",
    route:'/'
  },
];

const productButtons = [
  {
    icon: <Dress size={22} />,
    text: "Products",
    route:'/products'
  },
  {
    icon: <DiamondsFour size={22} />,
    text: "Categories",
    route:'/categories'
  },
  {
    icon: <TextIndent size={22} />,
    text: "Attributes",
    route:'/attributes'
  },
];

const orderButtons = [
  {
    icon: <ShoppingCart size={22} />,
    text: "Orders",
    route:'/orders'
  },
  {
    icon: <ListHeart size={22} />,
    text: "Interests",
    route:'/interests'
  },
  {
    icon: <Basket size={22} />,
    text: "Pre-bookings",
    route:'/prebookings'
  },
];

const Sidebar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginBlock: "auto",
        gap: "50px",
      }}
    >
      <Box sx={{ marginInline: "auto" }}>
        <img src={Logo} />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "25px" }}>
        <SidebarList title={"Dashboard"} buttonList={dashboardButtons} />
        <SidebarList title={"Products"} buttonList={productButtons} />
        <SidebarList title={"Orders"} buttonList={orderButtons} />
      </Box>
    </Box>
  );
};

export default Sidebar;
