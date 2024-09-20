import React, { useState } from "react";
import { Box, Stack, Divider, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const PopularPropertyCard = () => {
  return (
    <Stack className="popular-card-box">
      <Box
        className={"card-img"}
        sx={{ backgroundImage: `url("/img/banner/types/apartment.webp")` }}
      >
        <div className="top-word">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <path
              d="M11.8061 7.29912C11.7755 7.22096 11.722 7.15388 11.6526 7.10669C11.5832 7.05949 11.5011 7.03439 11.4172 7.03467H9.12276L9.78776 1.69523C9.79682 1.61144 9.78023 1.52688 9.74018 1.45273C9.70013 1.37859 9.63851 1.31835 9.56347 1.27999C9.48844 1.24162 9.40352 1.22695 9.31997 1.23791C9.23641 1.24886 9.15815 1.28493 9.09554 1.34134L2.8422 7.14745C2.78146 7.20449 2.73924 7.27846 2.72101 7.35978C2.70279 7.44109 2.7094 7.526 2.73998 7.60352C2.77057 7.68103 2.82373 7.74758 2.89257 7.79454C2.96141 7.84149 3.04276 7.8667 3.12609 7.86689H5.42443L4.75554 13.2063C4.74523 13.2906 4.76095 13.376 4.80057 13.4511C4.84019 13.5261 4.90183 13.5873 4.9772 13.6263C5.05327 13.6636 5.13874 13.6772 5.22262 13.6654C5.30649 13.6536 5.38491 13.617 5.44776 13.5602L11.7011 7.75412C11.7621 7.69748 11.8047 7.62384 11.8234 7.54273C11.8422 7.46162 11.8361 7.37676 11.8061 7.29912ZM5.71609 12.1797L6.29943 7.513C6.30658 7.4546 6.30126 7.39533 6.28382 7.33913C6.26638 7.28293 6.23722 7.23107 6.19826 7.18697C6.1593 7.14287 6.11144 7.10753 6.05782 7.08329C6.0042 7.05904 5.94605 7.04645 5.8872 7.04634H4.16054L8.8272 2.72189L8.24387 7.38856C8.23672 7.44697 8.24204 7.50623 8.25948 7.56243C8.27692 7.61863 8.30608 7.67049 8.34503 7.7146C8.38399 7.7587 8.43186 7.79404 8.48548 7.81828C8.5391 7.84252 8.59725 7.85511 8.65609 7.85523H10.3828L5.71609 12.1797Z"
              fill="white"
            />
          </svg>
          <p>Top</p>
        </div>
        <span>$42000</span>
      </Box>
      <Box className={"info"}>
        <strong className="title">Run Will Buildings</strong>
        <p className="desc">Seoul Gangnam Apartments</p>
        <div className="options">
          <div>
            <img src="/img/icons/bed.svg" alt="" />
            <span>3 bed</span>
          </div>
          <div>
            <img src="/img/icons/room.svg" alt="" />
            <span>7 rooms</span>
          </div>
          <div>
            <img src="/img/icons/expand.svg" alt="" />
            <span>250 m2</span>
          </div>
        </div>
        <Divider sx={{ mt: "15px", mb: "17px" }} />
        <div className="bott">
          <p>Rent</p>
          <div className="view-like-box">
            <IconButton>
              <RemoveRedEyeIcon />
            </IconButton>
            <Typography className="view-cnt">120</Typography>
          </div>
        </div>
      </Box>
    </Stack>
  );
};

export default PopularPropertyCard;
