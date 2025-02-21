import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ScopeInstruction = () => {
  return (
    <Box sx={{ p: { xs: "20px", sm: "32px" } }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: "20px",
              lineHeight: "28px",
              fontWeight: 700,
            }}
            color="#0E0E0E"
          >
            Scope of Implementation
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "22.6px",
              mt: 3,
            }}
          >
            The implementation of NbS varies based on the context of the region
            where the solution is being implemented. This section provides
            recommendations to users based on the stage of implementation, scale
            of intervention and availability of resources. The scope of
            implementation reduces the complexity by defining the requirements
            of the project.
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "22.6px",
              mt: 2,
            }}
          >
            For each of the 3 categories, the user must select a number which
            defines the existing condition of the project. The description of
            the different groups within each category has been highlighted in
            the input screen.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ScopeInstruction;
