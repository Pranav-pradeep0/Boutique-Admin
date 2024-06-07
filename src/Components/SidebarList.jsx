import { Box, Button, Typography, useTheme } from "@mui/material";
import { SquaresFour } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarList = ({ title, buttonList }) => {
  const theme = useTheme();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("");
  const [pageActive, setPageActive] = useState(false);

  useEffect(() => {
    const currentPath = location.pathname;
    setCurrentPage(currentPath);
  }, [location]);

  const extractBaseRoute = (path) => {
    const segments = path.split("/");
    return segments.length > 1
      ? `${segments[0]}/${segments[1]}`
      : `${segments[0]}`;
  };

  useEffect(() => {
    const isPageActive = buttonList.some(
      (item) => item.route === extractBaseRoute(currentPage)
    );
    setPageActive(isPageActive);
  }, [currentPage, buttonList]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <span
        style={{
          fontSize: "16px",
          color: "#7c807f",
          fontWeight: 700,
        }}
      >
        {title}
        {pageActive && (
          <span
            style={{
              backgroundColor: "#60A7A1",
              position: "absolute",
              height: "3px",
              width: "13px",
              left: 0,
              marginTop: "10px",
            }}
          ></span>
        )}
      </span>

      {buttonList?.map((item, ind) => (
        <Link style={{ all: "unset" }} to={item.route} key={ind}>
          <Button
            fullWidth
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              textTransform: "none",
              gap: "15px",
              color:
                extractBaseRoute(currentPage) === item.route
                  ? "#60A7A1"
                  : "inherit",
              borderRadius: "8px",
            }}
          >
            {item.icon}
            <span style={{ fontWeight: 200, fontSize: "16px" }}>
              {item.text}
            </span>
          </Button>
        </Link>
      ))}
    </Box>
  );
};

export default SidebarList;
