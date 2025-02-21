import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const BenefitInstruction = () => {
  return (
    <Box sx={{ p: { xs: "20px", sm: "32px" } }}>
      <Grid item xs={12}>
        <Typography
          sx={{
            fontSize: "20px",
            lineHeight: "28px",
            fontWeight: 700,
          }}
          color="#0E0E0E"
        >
          Benefits
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "22.6px",
            mt: 3,
          }}
        >
          The users must follow the below-given steps to identify and measure
          the economic value of identified benefits:
        </Typography>
        <Stack ml={6}>
          <ul style={{ lineHeight: "30px" }}>
            <li>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: "28px",
                  mt: 1,
                }}
              >
                Identify the existence of the benefit through stakeholder
                consultation or literature review.
              </Typography>
            </li>
            <li>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: "28px",
                }}
              >
                Identify the ecosystem valuation method most suitable for
                estimating the economic value of the benefit based on the
                availability of resources and data. The input screen already
                provides a suggestion for the ecosystem valuation method. Users
                may choose to adopt some other valuation method if necessary.
                The methodology for using a particular ecosystem valuation
                method can be found{" "}
                <a
                  href="https://docs.google.com/document/d/1OdI7ND4f_XJ57N1aQnPrr5g9NqTTnebWDzMmUYqVDjU/edit?tab=t.0"
                  target="_blank"
                >
                  here
                </a>
                .
              </Typography>
            </li>
            <li>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: "28px",
                }}
              >
                The ecosystem value method will help the user in identifying the
                economic value of the intervention for 1 year.
              </Typography>
            </li>
            <li>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: "28px",
                }}
              >
                The user must highlight the number of years during which the
                benefits will be generated from the NbS. This can be achieved
                through the following methods:
              </Typography>
              <Stack ml={6}>
                <ul style={{ lineHeight: "30px" }}>
                  <li>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 500,
                        lineHeight: "28px",
                        mt: 1,
                      }}
                    >
                      Identifying the number of years till when the project is
                      being funded.
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 500,
                        lineHeight: "28px",
                      }}
                    >
                      Estimating the number of years during which the NbS is
                      operational (The number of years the implemented solution
                      is unharmed or unchanged).
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 500,
                        lineHeight: "28px",
                      }}
                    >
                      Stakeholder consultations and a literature review may also
                      help the user identify the number of years for which the
                      benefit will be generated.
                    </Typography>
                  </li>
                </ul>
              </Stack>
            </li>
          </ul>
        </Stack>
      </Grid>
    </Box>
  );
};

export default BenefitInstruction;
