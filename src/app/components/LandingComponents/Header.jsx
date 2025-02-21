"use client";
import { Grid, Typography, Box, useMediaQuery } from "@mui/material";
import Image from "next/image";

export default function Header() {
  const isMd = useMediaQuery("(min-width: 768px)");
  return (
    <Box
      sx={{
        p: { xs: "16px 0px", sm: "16px 0px 0px 30px" },
        overflow: "hidden",
      }}
    >
      <Grid
        container
        display={"flex"}
        alignItems={"center"}
        justifyItems={"space-between"}
        flexDirection={{ xs: "column", md: "row" }}
      >
        <Grid item xs={12} md={2}>
          <Box
            sx={{
              width: { xs: "76px", md: "155px" },
              height: { xs: "40px", md: "82px" },
            }}
          >
            <Image
              src={require("/public/logo.svg")}
              alt="Logo"
              width={isMd ? 155 : 76}
              height={isMd ? 82 : 40}
              layout="intrinsic"
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          sx={{ textAlign: "center", p: { xs: "0px", sm: "20px 0" } }}
          display={"flex"}
          flexDirection={"column"}
        >
          <Typography variant="header">
            Council On Energy, Environment and Water
          </Typography>
          <Typography variant="header2" color={"#8D8D8D"}>
            Integrated | International | Independent
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
