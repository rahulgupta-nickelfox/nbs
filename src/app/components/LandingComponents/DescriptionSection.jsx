import React from "react";
import { Grid, Box, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
const DescriptionSection = () => {
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
            mb: 4,
            display: "block",
            textTransform: "none",
          }}
        >
          02 Description
        </Typography>
      </Grid>
      <Grid
        container
        display={"flex"}
        alignItems={"center"}
        justifyItems={"space-between"}
        flexDirection={{ xs: "column", md: "row" }}
      >
        <Grid item xs={12} md={4} order={{ xs: 2, md: 1 }}>
          <Box
            sx={{
              width: "100%",
              height: "auto",
              mixBlendMode: "multiply",
              overflow: "hidden",
            }}
          >
            <Image
              src={
                isMd
                  ? require("/public/description-1.jpg")
                  : require("public/description-2.jpg")
              }
              alt="Landscape view"
              sx={{
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={7} sx={{ mb: 4 }} order={{ xs: 1, md: 2 }}>
          <Typography variant="title2" color={"#1A1A1A"}>
            Description of the framework
          </Typography>
          <Typography variant="body1" color={"#707070"} pt={2}>
            ENSURE provides a ‘one-stop platform’ for stakeholders to designate
            an intervention as an NbS and to map and estimate its benefits. The
            framework help users to identify the type of the NbS, map the
            factors that influence its implementation, and customise an
            intervention based on the targeted geography, its scale, and the
            stage of implementation. Additionally, ENSURE also includes a
            provision for conducting cost-benefit analysis, which will allow
            stakeholders to estimate the investment potential of the NbS.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
export default DescriptionSection;
