import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const CostInstruction = () => {
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
            Costs
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "22.6px",
              mt: 3,
            }}
          >
            The user is encouraged to provide cost-specific numbers for each
            category. The user may leave costs irrelevant to the implementation
            of the NbS. If the user does not have details regarding the costs,
            they may skip this section. However, since the user is not providing
            the costs, the Benefit-to-Cost ratio for the NbS will not be
            available.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "22.6px",
              mt: 1,
            }}
          >
            However, if the user does not possess the total costs for the
            specific project component, they must provide the estimated costs
            for the first year. In such a case, the user must also provide the
            duration of the project, which plays an important role in estimating
            costs, along with the number of months for which the project is
            being implemented.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CostInstruction;
