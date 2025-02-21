import {
  checkCriteria,
  criteria1,
  criteria2,
  criteria3,
  criteria4,
  criteria5,
  projectStatus,
  yearDifference,
} from "@/app/utils/helper";
import { Box, Grid, Typography, Divider, Button } from "@mui/material";
import { useEffect } from "react";

const LocationInfo = ({ answer: answers }) => {
  const answer = answers.answer;
  const isMobile = typeof window !== undefined && window.innerWidth <= 768;

  useEffect(() => {
    const result = checkCriteria(answers);
  }, [answer]);

  return (
    <Box sx={{ p: { xs: "18px", md: "69px 145px 0px 120px" } }}>
      {/* Location Information Section */}
      <Grid container spacing={{ xs: 1, md: 3 }}>
        <Grid
          item
          xs={12}
          display={"flex"}
          flexDirection={"column"}
          border={"8px solid #C3E6F5"}
          borderRadius={"9px"}
          p={{ xs: "16px", md: "24px" }}
        >
          <Grid item xs={12} pb={{ xs: "10px", md: "24px" }}>
            <Typography variant="outputBody1" color="#0E0E0E">
              Location Information
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={{ xs: 0, md: 26 }}
          >
            <Grid item xs={4} p={0} display={"flex"} flexDirection={"column"}>
              <Typography variant="outputBody1" color="#969696">
                Location:
              </Typography>
              <Typography variant="outputBody1">
                {answer?.location_of_project ?? "NA"}
              </Typography>
            </Grid>
            <Grid item xs={4} p={0} display={"flex"} flexDirection={"column"}>
              <Typography variant="outputBody1" color="#969696">
                Area of Project:
              </Typography>
              <Typography variant="outputBody1">
                {answer?.area_of_project
                  ? `${answer?.area_of_project} sq km`
                  : "NA"}
              </Typography>
            </Grid>
            <Grid item xs={4} display={"flex"} flexDirection={"column"}>
              <Typography variant="outputBody1" color="#969696">
                Duration Of Project:
              </Typography>
              <Typography variant="outputBody1">
                {yearDifference(answer?.beginning_year, answer?.end_year) &&
                answer?.beginning_year
                  ? `${yearDifference(
                      answer?.beginning_year,
                      answer?.end_year
                    )} years`
                  : "NA"}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* About The Project Section */}
        <div className="page-break" />
        <Grid
          item
          xs={12}
          display={"flex"}
          flexDirection={"column"}
          border={"8px solid #C3E6F5"}
          borderRadius={"9px"}
          p={{ xs: "16px", md: "24px" }}
          mt={5}
        >
          <Grid container borderRadius={"12px"}>
            <Grid item xs={12} display={"flex"} flexDirection={"column"}>
              <Typography variant="outputBody1" color="#0E0E0E">
                About The Project
              </Typography>
              <Typography variant="outputBody2">
                {answer?.description_of_project ?? "NA"}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Identification of Nature-based Solutions */}
        <Box mt={2}>
          <Grid
            item
            xs={12}
            mt={4}
            borderRadius={"9px 9px 0px 0px"}
            bgcolor={"#C3E6F5"}
            py={2}
          >
            <Typography
              variant="outputBody1"
              color="#0E0E0E"
              pl={{ xs: 1, md: 2 }}
            >
              Identification of Nature-based Solutions
            </Typography>
          </Grid>

          <Grid
            container
            borderRadius={"0px 0px 9px 9px"}
            border={"8px solid #C3E6F5"}
          >
            {/* Criteria for NbS */}
            <Grid item xs={12} p={2}>
              <Typography variant="outputBody1">Criteria for NbS</Typography>
            </Grid>

            {/* Criteria 1 */}
            <Grid
              item
              xs={12}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexDirection={{ xs: "column", sm: "row" }}
              mt={2}
              p={2}
            >
              <Grid item xs={12} sm={9} display="flex" flexDirection="column">
                <Typography variant="outputBody1">Criteria 1</Typography>
                <Typography variant="outputBody2">
                  Fitting in the Definition: “NbS are actions to protect,
                  conserve, restore, sustainably use and manage natural or
                  modified terrestrial, freshwater, coastal and marine
                  ecosystems, which address social, economic and environmental
                  challenges effectively and adaptively, while simultaneously
                  providing human well-being, ecosystem services and resilience
                  and biodiversity benefits”
                </Typography>
              </Grid>

              <Grid
                item
                xs={3}
                sx={{ display: "flex", justifyContent: "end", mt: 2 }}
              >
                <Button
                  variant="customButton"
                  sx={{
                    pointerEvents: "none",
                    backgroundColor: criteria1(answers).color,
                    "&:hover": { backgroundColor: criteria1(answers).color },
                    height: "44px",
                    width: "100px",
                  }}
                >
                  {criteria1(answers).text}
                </Button>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Divider />
            </Grid>

            {/* Criteria 2 */}
            <Grid
              item
              xs={12}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexDirection={{ xs: "column", sm: "row" }}
              p={2}
            >
              <Grid item xs={12} sm={9} display="flex" flexDirection="column">
                <Typography variant="outputBody1">Criteria 2</Typography>
                <Typography variant="outputBody2">
                  The identified intervention ensures a symbiotic relationship
                  between humans and nature throughout the lifecycle of the
                  intervention
                </Typography>
              </Grid>

              <Grid
                item
                xs={3}
                sx={{ display: "flex", justifyContent: "end", mt: 2 }}
              >
                <Button
                  variant="customButton"
                  sx={{
                    pointerEvents: "none",
                    backgroundColor: criteria2(answers).color,
                    "&:hover": { backgroundColor: criteria2(answers).color },
                    height: "44px",
                    width: "100px",
                  }}
                >
                  {criteria2(answers).text}
                </Button>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Divider />
            </Grid>

            {/* Criteria 3 */}
            <Grid
              item
              xs={12}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexDirection={{ xs: "column", sm: "row" }}
              p={2}
            >
              <Grid item xs={12} sm={9} display="flex" flexDirection="column">
                <Typography variant="outputBody1">Criteria 3</Typography>
                <Typography variant="outputBody2">
                  The identified intervention should be socially, economically,
                  culturally and ecologically viable as per the region of
                  implementation
                </Typography>
              </Grid>

              <Grid
                item
                xs={3}
                sx={{ display: "flex", justifyContent: "end", mt: 2 }}
              >
                <Button
                  variant="customButton"
                  sx={{
                    pointerEvents: "none",
                    backgroundColor: criteria3(answers).color,
                    "&:hover": { backgroundColor: criteria3(answers).color },
                    height: "44px",
                    width: "100px",
                  }}
                >
                  {criteria3(answers).text}
                </Button>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Divider />
            </Grid>

            {/* Criteria 4 */}
            <Grid
              item
              xs={12}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexDirection={{ xs: "column", sm: "row" }}
              p={2}
            >
              <Grid item xs={12} sm={9} display="flex" flexDirection="column">
                <Typography variant="outputBody1">Criteria 4</Typography>
                <Typography variant="outputBody2">
                  The identified intervention should be inclusive, transparent
                  and empower governance processes
                </Typography>
              </Grid>

              <Grid
                item
                xs={3}
                sx={{ display: "flex", justifyContent: "end", mt: 2 }}
              >
                <Button
                  variant="customButton"
                  sx={{
                    pointerEvents: "none",
                    backgroundColor: criteria4(answers).color,
                    "&:hover": { backgroundColor: criteria4(answers).color },
                    height: "44px",
                    width: "100px",
                  }}
                >
                  {criteria4(answers).text}
                </Button>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Divider />
            </Grid>

            {/* Criteria 5 */}
            <Grid
              item
              xs={12}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexDirection={{ xs: "column", sm: "row" }}
              p={2}
            >
              <Grid item xs={12} sm={9} display="flex" flexDirection="column">
                <Typography variant="outputBody1">Criteria 5</Typography>
                <Typography variant="outputBody2">
                  The intervention should support green and sustainable jobs and
                  enhance local livelihoods
                </Typography>
              </Grid>

              <Grid
                item
                xs={3}
                sx={{ display: "flex", justifyContent: "end", mt: 2 }}
              >
                <Button
                  variant="customButton"
                  sx={{
                    pointerEvents: "none",
                    backgroundColor: criteria5(answers).color,
                    "&:hover": { backgroundColor: criteria5(answers).color },
                    height: "44px",
                    width: "100px",
                  }}
                >
                  {criteria5(answers).text}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Grid
          container
          p={{ xs: 1, md: 4 }}
          mt={5}
          borderRadius={"9px"}
          border={"8px solid #C3E6F5"}
        >
          <Grid item xs={12}>
            <Typography variant="outputBody1">
              The project is considered a Nature-based Solution, if it satisfies
              all the criteria.
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            display={"flex"}
            alignItems={"center"}
            justifyContent={{ xs: "center", sm: "space-between" }}
            flexDirection={{ xs: "column", sm: "row" }}
            mt={2}
          >
            <Grid item xs={12} sm={6}>
              <Typography
                variant="outputBody1"
                color={"#159ED9"}
                textAlign={{ xs: "center", sm: "left" }}
              >
                The project mentioned in this case is:
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              display="flex"
              justifyContent={"flex-end"}
            >
              <Typography
                variant="outputBody1"
                color={projectStatus(answers).color}
                textAlign={{ xs: "center", sm: "right" }}
              >
                {projectStatus(answers).text}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LocationInfo;
