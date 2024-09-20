import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { Swiper, SwiperSlide } from "swiper/react";
import TopPropertyCard from "./TopPropertyCard";

const TopProperties = () => {
  const [topProperties, setTopProperties] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7,
  ]);

  return (
    <Stack className="top-properties">
      <Stack className="container">
        <Stack className="info-box">
          <Box className={"left"}>
            <span>Top Properties</span>
            <p>Check out our Top properties</p>
          </Box>
          <Box className={"right"}>
            <div className="pagination-box">
              <WestIcon className="swiper-top-prev" />
            </div>
            <div className="swiper-top-pagination"></div>
            <EastIcon className="swiper-top-next" />
          </Box>
        </Stack>
        <Stack className="card-box">
          {topProperties.length === 0 ? (
            <Box className={"empty-list"}>Trends Empty</Box>
          ) : (
            <Swiper
              className="top-property-swiper"
              slidesPerView={4}
              spaceBetween={15}
              navigation={{
                nextEl: ".swiper-top-next",
                prevEl: ".swiper-top-prev",
              }}
              pagination={{ el: ".swiper-top-pagination" }}
            >
              {topProperties.map((property, index) => {
                return (
                  <SwiperSlide key={index} className={"top-property-slide"}>
                    <TopPropertyCard />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TopProperties;
