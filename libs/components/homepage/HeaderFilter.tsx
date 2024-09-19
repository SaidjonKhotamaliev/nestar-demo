import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Stack } from "@mui/material";

const HeaderFilter = () => {
  return (
    <>
      <Stack className="search-box">
        <Stack className="select-box">
          <Box component={"div"} className={"box on"}>
            <span>Location</span>
            <ExpandMoreIcon />
          </Box>
          <Box className={"box"}>
            <span>Property type</span>
            <ExpandMoreIcon />
          </Box>
          <Box className={"box"}>
            <span>7 Rooms</span>
            <ExpandMoreIcon />
          </Box>
        </Stack>
        <Stack className="search-box-other">
          <Box className={"advanced-filter"}>
            <img src="/img/icons/tune.svg" alt="" />
            <span>Advanced</span>
          </Box>
          <Box className={"search-btn"}>
            <img src="/img/icons/searchWhite.svg" alt="" />
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default HeaderFilter;