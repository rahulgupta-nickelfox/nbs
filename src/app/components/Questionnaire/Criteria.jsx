import React from "react";
import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Criteria = ({ question, answers, setAnswers }) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleCheckboxWithInput = (key, isChecked) => {
    setAnswers((prevAnswers) => ({
      answer: {
        ...prevAnswers.answer,
        [key]: isChecked,
      },
    }));
  };

  const countSelectedOptionsBySection = (answers) => {
    const sectionCounts = {};

    Object.keys(answers.answer).forEach((key) => {
      if (answers.answer[key] === true) {
        const mainSection = key.match(/^\d+\.\d+/)?.[0];

        if (mainSection) {
          sectionCounts[mainSection] = (sectionCounts[mainSection] || 0) + 1;
        }
      }
    });

    return sectionCounts;
  };
  const sectionCount = countSelectedOptionsBySection(answers);

  const sum_1 = sectionCount["3.1"] || 0;
  const sum_2 = sectionCount["3.2"] || 0;
  const sum_3 = sectionCount["3.3"] || 0;
  const sum_4 = sectionCount["3.4"] || 0;
  const sum_5 = sectionCount["3.5"] || 0;

  return question.subquestions.map((subq, questionIdx) => (
    <Box key={subq.id}>
      {questionIdx === 0 && (
        <>
          <Typography
            sx={{
              fontSize: "16px !important",
              fontWeight: 400,
              lineHeight: "22px",
              color: "#5C5C5C",
              fontStyle: "italic",
              width: "90%",
              letterSpacing: "0.1px",
            }}
          >
            It is essential to demarcate an intervention as a Nature-based
            Solution to ensure that interventions are contextually relevant and
            beneficial for the region of implementation given their
            socio-economic and geographical characteristics while also aligning
            with the principles of sustainable development.
          </Typography>
          <Grid item xs={12} my={2}>
            <Divider />
          </Grid>
        </>
      )}

      <Box mt={4}>
        {/* 3.1  3.2  3.3 */}
        <Box sx={{ display: "flex", alignItems: "center" }} gap={1}>
          <Typography variant="body2">
            {subq.id} {subq.text}
          </Typography>
          <Tooltip title={subq.tooltip} arrow placement="right">
            <InfoOutlinedIcon
              fontSize="small"
              sx={{ color: "#585858", height: "16px", width: "16px" }}
            />
          </Tooltip>
        </Box>

        {(String(subq.id).startsWith("3.1") && sum_1 < 2) ||
        (String(subq.id).startsWith("3.2") && sum_2 < 2) ||
        (String(subq.id).startsWith("3.3") && sum_3 !== 4) ||
        (String(subq.id).startsWith("3.4") && sum_4 !== 5) ||
        (String(subq.id).startsWith("3.5") && sum_5 <= 0) ? (
          <Box pl={3.4}>
            <Typography variant="warning">
              The project does not qualify the criteria to be an NbS. Please
              read the instructions to ensure that your project is a NbS.
            </Typography>
          </Box>
        ) : null}

        {subq.subquestions.map((subsubq) => (
          <Box key={subsubq.id} sx={{ mt: 2 }}>
            {/* 3.1.1  3.1.2  3.1.3 */}
            <Typography variant="body3" sx={{ mb: 1 }}>
              {subsubq.id} {subsubq.text}
            </Typography>
            <Grid container spacing={0} mt={1}>
              {subsubq.options.map((option, index) => (
                <Grid item xs={12} sm={6} key={option}>
                  <Grid container display={"flex"} justifyContent={"center"}>
                    <Grid item xs={12}>
                      <FormControlLabel
                        label={option}
                        checked={
                          answers.answer[
                            subsubq.id
                              ? `${subsubq.id}_${String(option)
                                  .toLowerCase()
                                  .replace(/\s+/g, "_")}`
                              : `${subq.id}_${String(option)
                                  .toLowerCase()
                                  .replace(/\s+/g, "_")}`
                          ] || false
                        }
                        control={
                          <Checkbox
                            size={isSmallScreen ? "small" : "medium"}
                            onChange={(e) =>
                              handleCheckboxWithInput(
                                subsubq.id
                                  ? `${subsubq.id}_${String(option)
                                      .toLowerCase()
                                      .replace(/\s+/g, "_")}`
                                  : `${subq.id}_${String(option)
                                      .toLowerCase()
                                      .replace(/\s+/g, "_")}`,
                                e.target.checked
                              )
                            }
                          />
                        }
                      />
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  ));
};

export default Criteria;
