import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Stack } from "@mui/material";
import { NextPage } from "next";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TrendProperties from "@/libs/components/homepage/TrendProperties";
import PopularProperties from "@/libs/components/homepage/PopularProperties";

const Home: NextPage = () => {
  return (
    <Stack className="home-page">
      <TrendProperties />
      <PopularProperties />

      {/* <Stack flexDirection={"column"}>
        <Stack>
          <Stack className="container">Trend Properties</Stack>
        </Stack>
        <Stack>
          <Stack className="container">Popular Properties</Stack>
        </Stack>
        <Stack>
          <Stack className="container">advertisement</Stack>
        </Stack>
        <Stack>
          <Box className="container">Top Properties</Box>
        </Stack>
        <Stack>
          <Box className="container">Top Agents</Box>
        </Stack>
      </Stack> */}
    </Stack>
  );
};

export default withLayoutMain(Home);
