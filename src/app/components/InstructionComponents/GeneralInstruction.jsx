import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const GeneralInstruction = () => {
  return (
    <Box sx={{ p: { xs: "20px", sm: "32px" } }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            sx={{ fontSize: "20px", lineHeight: "28px", fontWeight: 700 }}
            color="#0E0E0E"
            textAlign={"center"}
          >
            Instructions for the Input Screen
          </Typography>
        </Grid>

        <Grid item xs={12} mt={"16px"}>
          <Typography
            sx={{ fontSize: "16px", fontWeight: 400, lineHeight: "22px" }}
          >
            The{" "}
            <b>
              "Toolkit to Map and Assess the Benefits of Nature-based Solutions"
            </b>{" "}
            has 7 different sections which require data to map and estimate the
            benefits of Nature-based Solutions. It is encouraged that users fill
            in data for each section. <br />
            <span style={{ textAlign: "center" }}>
              The instructions for filling in data for each section have been
              listed below.
            </span>
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Divider />
        </Grid>

        {/* General Details */}
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: "20px",
              lineHeight: "28px",
              fontWeight: 700,
              mt: 1,
            }}
            color="#0E0E0E"
          >
            General Details
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "22.6px",
              mt: 3,
            }}
          >
            This section consists of the general details which will highlight
            the name of the project. The name of the individual/organisation
            implementing the project will not be shared in the output screen and
            is solely for maintaining a record of users of the tool.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Divider />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GeneralInstruction;
