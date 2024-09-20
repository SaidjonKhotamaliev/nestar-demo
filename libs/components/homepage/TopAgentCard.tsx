import React, { useState } from "react";
import { Box, Stack, Divider, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const TopAgentCard = () => {
  return (
    <Stack className="top-agent-card">
      <img src="/img/profile/girl.svg" alt="" />
      <strong>Steve</strong>
      <span>AGENT</span>
    </Stack>
  );
};

export default TopAgentCard;
