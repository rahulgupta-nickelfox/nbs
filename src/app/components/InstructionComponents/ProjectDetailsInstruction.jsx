import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const ProjectDetailsInstruction = () => {
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
            Project Details
          </Typography>
          <Stack ml={3}>
            <ul>
              <li>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "22.6px",
                    mt: 3,
                  }}
                >
                  This section consists of the project details which will
                  highlight the summary of the project.
                </Typography>
              </li>
              <li>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "22.6px",
                    mt: 3,
                  }}
                >
                  Please mention the dates which most resemble the beginning and
                  ending dates of the project. In case, the project is not
                  started, the user may leave the field blank. Moreover, if the
                  project is still being implemented, please mention the
                  approximate date of ending.
                </Typography>
              </li>
              <li>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "22.6px",
                    mt: 3,
                  }}
                >
                  The location of the project must specify the district where
                  the project is being implemented. In case the project spans
                  multiple districts, then the user must specify all the
                  districts and separate them with a comma. However, if the
                  number of districts is more than 10, then the user may mention
                  the state where the project is being implemented.
                </Typography>
              </li>
              <li>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "22.6px",
                    mt: 3,
                  }}
                >
                  The brief introduction of the project may include the
                  objective of the project along with the Nature-based Solution
                  that is being implemented to achieve the objective.
                </Typography>
              </li>
            </ul>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectDetailsInstruction;
