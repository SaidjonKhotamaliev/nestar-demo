import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { ArrowBackIosNew } from "@mui/icons-material";
import TopAgentCard from "./TopAgentCard";

const TopAgents = () => {
  const [topAgents, setTopAgents] = useState<number[]>([1, 2, 3, 4, 5, 6, 7]);

  return (
    <Stack className="top-agents">
      <Stack className="container">
        <Stack className="info-box">
          <Box className={"left"}>
            <span>Top Agents</span>
            <p>Our Top Agents always ready to serve you</p>
          </Box>
          <Box className={"right"}>
            <div className="more-box">
              <Link href={"/property"}>
                <span>See All Agents</span>
              </Link>
              <img src="/img/icons/rightup.svg" alt="" />
            </div>
          </Box>
        </Stack>

        <Stack className="wrapper">
          <Box className={"switch-btn swiper-agents-prev"}>
            <ArrowBackIosNew />
          </Box>
          <Box className={"card-wrapper"}>
            <Swiper
              className="top-agents-swiper"
              slidesPerView={5}
              spaceBetween={15}
              navigation={{
                nextEl: ".swiper-agents-next",
                prevEl: ".swiper-agents-prev",
              }}
            >
              {topAgents.map((agent, index) => {
                return (
                  <SwiperSlide key={index} className={"top-agents-slide"}>
                    <TopAgentCard />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
          <Box className={"switch-btn swiper-agents-next"}>
            <ArrowBackIosNew />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TopAgents;
