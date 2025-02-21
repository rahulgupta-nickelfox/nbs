import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const MappingInstruction = () => {
  return (
    <Box sx={{ p: { xs: "20px", sm: "32px" } }}>
      <Grid container spacing={3} className="instruction_box">
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: "20px",
              lineHeight: "28px",
              fontWeight: 700,
            }}
            color="#0E0E0E"
          >
            Mapping Local Factors of Influence
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "22.6px",
              mt: 3,
            }}
          >
            NbS implementation outcomes vary based on geography, scale,
            stakeholder involvement, etc., and other factors. These are termed
            as 'local factors of influence' (LFI), with 'local' referring to
            contextual rather than spatial influence levels. They can influence
            the implementation process in a positive or negative direction.
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "22.6px",
              mt: 2,
            }}
          >
            There are primarily 6 categories of LFI as highlighted below:
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={{ sm: 3, xs: 1 }}>
            <Grid
              item
              xs={6}
              sm={4}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                width={95}
                height={94}
                src={require("/public/social.png")}
                alt="social"
              />
              <Typography
                sx={{ fontSize: "16px", fontWeight: 500, textAlign: "center" }}
              >
                Social
              </Typography>
            </Grid>

            <Grid
              item
              xs={6}
              sm={4}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                width={95}
                height={94}
                src={require("/public/economic.png")}
                alt="economic"
              />
              <Typography
                sx={{ fontSize: "16px", fontWeight: 500, textAlign: "center" }}
              >
                Economic
              </Typography>
            </Grid>

            <Grid
              item
              xs={6}
              sm={4}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                width={95}
                height={94}
                src={require("/public/cultural.png")}
                alt="cultural"
              />
              <Typography
                sx={{ fontSize: "16px", fontWeight: 500, textAlign: "center" }}
              >
                Cultural
              </Typography>
            </Grid>

            <Grid
              item
              xs={6}
              sm={4}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                width={95}
                height={94}
                src={require("/public/environmental.png")}
                alt="environmental"
              />
              <Typography
                sx={{ fontSize: "16px", fontWeight: 500, textAlign: "center" }}
              >
                Environmental
              </Typography>
            </Grid>

            <Grid
              item
              xs={6}
              sm={4}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                width={95}
                height={94}
                src={require("/public/species.png")}
                alt="species"
              />
              <Typography
                sx={{ fontSize: "16px", fontWeight: 500, textAlign: "center" }}
              >
                Species-related
              </Typography>
            </Grid>

            <Grid
              item
              xs={6}
              sm={4}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                width={95}
                height={94}
                src={require("/public/livelihood.png")}
                alt="livelihood"
              />
              <Typography
                sx={{ fontSize: "16px", fontWeight: 500, textAlign: "center" }}
              >
                Livelihood
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} mt={3}>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "22.6px",
              mb: 1,
            }}
          >
            The relationship between a factor and the Nature-based Solution may
            be identified in two different ways:
          </Typography>

          <Stack ml={5}>
            <ul>
              <li>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "22.6px",
                  }}
                >
                  The LFI may influence the implementation of the NbS or may get
                  influenced during or after the solution has been implemented.
                  Some LFI may exhibit both types of influence with respect to
                  the NbS.
                </Typography>
              </li>
              <li>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "22.6px",
                  }}
                >
                  The LFI may positively or negatively affect the implementation
                  of the NbS.
                </Typography>
              </li>
            </ul>
          </Stack>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "22.6px",
              mt: 2,
            }}
          >
            The user must identify these relationships through stakeholder
            consultations or literature review to make better decisions and to
            identify opportunities for improving the impact of NbS.
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "22.6px",
              mt: 2,
            }}
          >
            LFI are best identified by conducting extensive stakeholder
            consultations which involves local communities, experts,
            decision-makers and other relevant stakeholders. The factors are
            identified by the stakeholders themselves, while the project
            implementation agencies facilitate the discussion and support the
            stakeholders in the factor identification process.
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "22.6px",
              mt: 2,
            }}
          >
            The sum of people identifying the relationship between the NbS and
            LFI as positive or negative must be equal to the number of people
            who were part of the consultations.
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "22.6px",
              mt: 2,
            }}
          >
            However, conducting stakeholder consultations might not be possible
            in some cases due to financial, geographical or miscellaneous
            constraints. In such a scenario, it is recommended that the users
            identify relevant literature on the implementation of the
            Nature-based Solution in a similar region.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MappingInstruction;
