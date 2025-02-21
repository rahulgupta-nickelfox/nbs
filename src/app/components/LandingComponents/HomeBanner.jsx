import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import bg from "/public/header-bg.png";

const HomeBanner = () => {
  return (
    <Box sx={{ p: { xs: "0px", sm: "16px 0px" } }}>
      <Grid container>
        <Grid
          item
          sx={{
            backgroundImage: `url(${bg.src})`,
            width: "100%",
            height: { xs: "280px", md: "500px" },
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.9,
          }}
          xs={12}
        >
          <Grid
            item
            xs={12}
            xl={8}
            px={{ xs: "12px", md: "35px" }}
            pt={{ xs: "40px", md: "80px" }}
            pb={{ xs: "80px", md: "130px" }}
          >
            <Typography
              color="#FFF"
              sx={{
                mb: { xs: 2, sm: 4 },
                fontSize: { xs: "20px", sm: "25px", md: "47px" },
                fontWeight: 700,
              }}
            >
              The toolkit to map and estimate benefits of Nature-based Solutions
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "16px", md: "25px" },
                fontWeight: 400,
                lineHeight: { xs: "19px", md: "35px" },
              }}
              color="rgba(255, 255, 255, 0.8)"
            >
              The toolkit, based on CEEW’s ENSURE Framework, will help
              stakeholders in estimating the cost-effectiveness of NbS projects
              and follow the principles of sustainable development.
            </Typography>
            <Box
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"center"}
            >
              <Button
                variant="contained"
                href="/survey"
                sx={{
                  marginTop: { xs: "15px", sm: "30px" },
                  borderRadius: "0px",
                  padding: { xs: "10px 10px", sm: "10px 20px" },
                  background: "#159ED9",
                }}
                endIcon={
                  <ArrowOutwardIcon
                    sx={{
                      width: { xs: "15px", sm: "20px" },
                      height: { xs: "15px", sm: "20px" },
                    }}
                  />
                }
              >
                <Typography
                  sx={{
                    fontSize: { xs: "9px", sm: "14px", md: "20px" },
                    fontWeight: { xs: "700", md: 400 },
                    lineHeight: { xs: "19px", md: "28px" },
                  }}
                >
                  Access Toolkit
                </Typography>
              </Button>
              <Box
                component="a"
                sx={{
                  color: "#FFF",
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid #FFF",
                  opacity: "0.8",
                  cursor: "pointer",
                  width: "fit-content",
                  textDecoration: "none",
                }}
                href="https://www.ceew.in/publications/how-can-investing-in-nature-based-solutions-for-climate-change-enhance-global-climate-action"
                target="_blank"
                mt={4}
                ml={2}
              >
                <InsertLinkIcon sx={{ rotate: "135deg" }} />
                <Typography
                  sx={{
                    fontSize: { xs: "10px", md: "13px" },
                    fontWeight: { xs: "400", md: 500 },
                    lineHeight: "22px",
                    background: "transparent",
                    marginLeft: "6px",
                    color: "#FFF",
                    cursor: "pointer",
                  }}
                >
                  Learn about ENSURE Framework
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeBanner;
