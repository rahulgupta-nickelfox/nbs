import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";

const MatchingInstruction = () => {
  return (
    <Box sx={{ p: { xs: "20px 20px 0px 20px", sm: "32px 32px 0px 32px" } }}>
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
            Matching the Criteria
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "22.6px",
              mt: 3,
            }}
          >
            It is essential to identify a criteria for Nature-based Solutions to
            ensure that interventions are contextually relevant and beneficial
            for the region of implementation given their socio-economic and
            geographical characteristics, while also aligning with the
            principles of sustainable development.
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "22.6px",
              mt: 3,
            }}
          >
            This section examines whether the intervention is a Nature-based
            Solution or not. The criteria consists of 5 unique questions.
          </Typography>
        </Grid>

        <Grid item xs={12} mt={2}>
          <Divider />
        </Grid>

        {/* Criteria 1 */}
        <Grid
          item
          xs={12}
          display={"flex"}
          flexDirection="column"
          justifyContent={"space-between"}
          alignItems={"flex-start"}
        >
          <Grid item xs={6} sm={4}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: "22.4px",
              }}
            >
              Criteria 1:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={11} mt={3}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "22.4px",
              }}
            >
              Fitting in the Definition: “NbS are actions to protect, conserve,
              restore, sustainably use and manage natural or modified
              terrestrial, freshwater, coastal and marine ecosystems, which
              address social, economic and environmental challenges effectively
              and adaptively, while simultaneously providing human well-being,
              ecosystem services and resilience and biodiversity benefits”
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={"column"}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "22.6px",
            }}
          >
            Criterion 1 consists of two indicators which must be mapped for the
            intervention to satisfy the criterion.
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "22.6px",
            }}
          >
            For both the indicators, the user is encouraged to mark at least one
            option.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Divider />
        </Grid>

        {/* Criteria 2 */}
        <Grid
          item
          xs={12}
          display={"flex"}
          flexDirection="column"
          justifyContent={"space-between"}
          alignItems={"flex-start"}
        >
          <Grid item xs={6} sm={4}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: "22.4px",
              }}
            >
              Criteria 2:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={10} mt={3}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "22.4px",
              }}
            >
              The identified intervention ensures a symbiotic relationship
              between humans and nature throughout the lifecycle of the
              intervention
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={"column"}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "22.6px",
            }}
          >
            Criterion 2 consists of two indicators which must be mapped for the
            intervention to satisfy the criterion.
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "22.6px",
            }}
          >
            For both the indicators, the user is encouraged to mark at least one
            option.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Divider />
        </Grid>

        {/* Criteria 3 */}
        <Grid
          item
          xs={12}
          display={"flex"}
          flexDirection="column"
          justifyContent={"space-between"}
          alignItems={"flex-start"}
        >
          <Grid item xs={6} sm={4}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: "22.4px",
              }}
            >
              Criteria 3:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={10} mt={3}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "22.4px",
              }}
            >
              The identified intervention should be socially, economically,
              culturally and ecologically viable as per the region of
              implementation
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={"column"}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "22.6px",
            }}
          >
            Criterion 3 consists of one indicator which must be mapped for the
            intervention to satisfy the criterion.
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "22.6px",
            }}
          >
            For the indicator, the user is encouraged to mark all the options.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Divider />
        </Grid>

        {/* Criteria 4 */}
        <Grid
          item
          xs={12}
          display={"flex"}
          flexDirection="column"
          justifyContent={"space-between"}
          alignItems={"flex-start"}
        >
          <Grid item xs={6} sm={4}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: "22.4px",
              }}
            >
              Criteria 4:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={10} mt={3}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "22.4px",
              }}
            >
              The identified intervention should be inclusive, transparent and
              empower governance processes
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={"column"}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "22.6px",
            }}
          >
            Criterion 4 consists of one indicator which must be mapped for the
            intervention to satisfy the criterion.
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "22.6px",
            }}
          >
            For the indicator, the user is encouraged to mark all the options.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Divider />
        </Grid>

        {/* Criteria 5 */}
        <Grid
          item
          xs={12}
          display={"flex"}
          flexDirection="column"
          justifyContent={"space-between"}
          alignItems={"flex-start"}
        >
          <Grid item xs={6} sm={4}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: "22.4px",
              }}
            >
              Criteria 5:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={10} mt={3}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "22.4px",
              }}
            >
              The intervention should support green and sustainable jobs and
              enhance local livelihoods
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={"column"}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "22.6px",
            }}
          >
            Criterion 5 consists of one indicator which must be mapped for the
            intervention to satisfy the criterion.
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "22.6px",
            }}
          >
            For the indicator, the user is encouraged to mark at least one
            option.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Divider />
        </Grid>

        <Grid
          item
          xs={12}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "28px",
            }}
            textAlign={"center"}
          >
            An intervention will be considered as a Nature-based Solution only
            if it satisfies all the 5 criteria.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MatchingInstruction;
