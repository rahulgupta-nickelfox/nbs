import React from "react";
import { Grid, Box, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
const Intro = () => {
  const isMd = useMediaQuery("(min-width: 768px)");
  return (
    <Box
      sx={{
        p: { xs: "16px", sm: "16px 30px" },
        overflow: "hidden",
      }}
    >
      <Grid item xs={12}>
        <Typography
          maxWidth={766}
          className="intro_heading"
          variant="outputBody3"
          sx={{
            color: "#0B0B0B",
            fontWeight: { xs: 700, sm: 500 },
            mb: isMd ? 4 : 2,
            display: "block",
            textTransform: "none",
          }}
        >
          Introduction & Description
        </Typography>
      </Grid>
      <Grid
        container
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDirection={{ xs: "column", md: "row" }}
        spacing={isMd ? 2 : 0}
      >
        <Grid item xs={12} md={6} sx={{ mb: 4 }}>
          <Box>
            <Typography variant="title2" color={"#1A1A1A"}>
              What are Nature-based Solutions ?
            </Typography>
            <Typography color={"#707070"} variant="body1" pt={2}>
              Nature-based Solutions (NbS) are defined as actions to protect
              conserve, restore, sustainably use and manage natural or modified
              terrestrial, freshwater, coastal, and marine ecosystems, which
              address social, economic, and environmental challenges effectively
              and adaptively, while simultaneously providing human well-being,
              ecosystem services and resilience and biodiversity benefits.
            </Typography>
          </Box>
          <Box sx={{ mt: 4 }}>
            <Typography variant="title2" color={"#1A1A1A"}>
              Description of the framework
            </Typography>
            <Typography variant="body1" color={"#707070"} pt={2}>
              ENSURE provides a ‘one-stop platform’ for stakeholders to
              designate an intervention as an NbS and to map and estimate its
              benefits. The framework help users to identify the type of the
              NbS, map the factors that influence its implementation, and
              customise an intervention based on the targeted geography, its
              scale, and the stage of implementation. Additionally, ENSURE also
              includes a provision for conducting cost-benefit analysis, which
              will allow stakeholders to estimate the investment potential of
              the NbS.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              height: "auto",
              mixBlendMode: "multiply",
              overflow: "hidden",
              pl: isMd && 6,
            }}
          >
            <Image
              src={
                isMd
                  ? require("/public/introduction-1.jpg")
                  : require("/public/introduction-2.jpg")
              }
              alt="Landscape view"
              sx={{
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Intro;
