import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { Swiper, SwiperSlide } from "swiper/react";
import PopularPropertyCard from "./PopularPropertyCard";
import Link from "next/link";

const PopularProperties = () => {
  const [popularProperties, setPopularProperties] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7,
  ]);

  return (
    <Stack className="popular-properties">
      <Stack className="container">
        <Stack className="info-box">
          <Box className={"left"}>
            <span>Popular Properties</span>
            <p>Popularity is based on views</p>
          </Box>
          <Box className={"right"}>
            <div className="more-box">
              <Link href={"/property"}>
                <span>See All Categories</span>
              </Link>
              <img src="/img/icons/rightup.svg" alt="" />
            </div>
          </Box>
        </Stack>
        <Stack className="card-box">
          {popularProperties.length === 0 ? (
            <Box className={"empty-list"}>No popular properties</Box>
          ) : (
            <Swiper
              className="popular-popular-swiper"
              slidesPerView={3}
              spaceBetween={15}
              navigation={{
                nextEl: ".swiper-popular-next",
                prevEl: ".swiper-popular-prev",
              }}
              pagination={{ el: ".swiper-popular-pagination" }}
            >
              {popularProperties.map((property, index) => {
                return (
                  <SwiperSlide key={index} className={"popular-property-slide"}>
                    <PopularPropertyCard />
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

export default PopularProperties;
