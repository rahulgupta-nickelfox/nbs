import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";

const Analysis = ({ totalCost, totalBenefit }) => {
  const ratio = (Number(totalBenefit) / Number(totalCost)).toFixed(2);
  return (
    <Box sx={{ p: { xs: "16px", md: "40px 140px 16px 120px" } }}>
      <Grid
        container
        spacing={{ xs: 0.5, md: 3 }}
        border="8px solid #C3E6F5"
        borderRadius={"9px"}
      >
        <Grid item xs={12} py={1} bgcolor={"#C3E6F5"}>
          <Typography variant="outputBody1">Analysis</Typography>
        </Grid>

        <Grid item xs={12}>
          <Grid
            item
            xs={12}
            backgroundColor={"#F1F1F1"}
            display={"flex"}
            justifyContent={"space-between"}
            p={2}
          >
            <Typography variant="outputBody3">
              Benefit - to - Cost Ratio (BCR)
            </Typography>
            <Typography variant="outputBody3">
              {isNaN(ratio) ? 0 : ratio}
            </Typography>
          </Grid>

          <Grid item xs={12} width={"99%"}>
            <Divider />
          </Grid>

          <Grid item xs={12} mt={2}>
            <Typography variant="outputBody2">Inference</Typography>
          </Grid>
          <Grid item xs={12} my={2}>
            <Typography variant="outputBody2">
              {Number(totalBenefit) / Number(totalCost) > 0
                ? "The project is financially viable"
                : "The project is not financially viable"}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Analysis;
