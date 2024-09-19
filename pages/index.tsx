import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Stack>
      <Stack flexDirection={"column"}>
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
      </Stack>
    </Stack>
  );
};

export default withLayoutMain(Home);
