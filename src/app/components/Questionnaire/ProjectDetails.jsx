import {
  Box,
  FormGroup,
  Grid,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const ProjectDetails = ({
  question,
  answers,
  setAnswers,
  errors,
  setError,
}) => {
  const handleInputChange = (key, value) => {
    setAnswers((prevAnswers) => ({
      answer: {
        ...prevAnswers.answer,
        [key]: value,
      },
    }));
  };

  const validateBeginningYear = (value) => {
    if (value.length < 4) {
      setError((prev) => ({
        ...prev,
        beginning_year: "",
      }));
      return true;
    }

    if (/^\d{4}$/.test(value)) {
      if (parseInt(value) < 1970) {
        setError((prev) => ({
          ...prev,
          beginning_year: "Year must be greater than 1970",
        }));
        return false;
      }

      setError((prev) => ({
        ...prev,
        beginning_year: "",
      }));
      return true;
    }

    setError((prev) => ({
      ...prev,
      beginning_year: "Please enter a valid year",
    }));
    return false;
  };

  const validateEndYear = (value, beginningYear) => {
    if (value.length < 4) {
      setError((prev) => ({
        ...prev,
        end_year: "",
      }));
      return true;
    }

    if (/^\d{4}$/.test(value)) {
      if (parseInt(value) > 2100) {
        setError((prev) => ({
          ...prev,
          end_year: "Year must be less than 2100",
        }));
        return false;
      }

      if (beginningYear && parseInt(value) <= parseInt(beginningYear)) {
        setError((prev) => ({
          ...prev,
          end_year: "End year must be greater than beginning year",
        }));
        return false;
      }

      setError((prev) => ({
        ...prev,
        end_year: "",
      }));
      return true;
    }

    setError((prev) => ({
      ...prev,
      end_year: "Please enter a valid year",
    }));
    return false;
  };

  return (
    <FormGroup>
      {/* Beginning Year */}
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <Grid item xs={12} sm={6}>
          <Box
            display={"flex"}
            alignItems={"center"}
            sx={{ mt: 2, mb: 1 }}
            gap={1}
          >
            <Typography variant="subtitle2">
              Beginning Year of Implementation
            </Typography>
            <Tooltip
              title="If the project has not been started, you may leave this field blank."
              arrow
              placement="right"
            >
              <InfoOutlinedIcon
                fontSize="small"
                sx={{ color: "#585858", height: "16px", width: "16px" }}
              />
            </Tooltip>
          </Box>
          <TextField
            sx={{ width: "80%" }}
            value={answers.answer.beginning_year || ""}
            onChange={(e) => {
              if (validateBeginningYear(e.target.value)) {
                handleInputChange("beginning_year", e.target.value);
              }
            }}
            onKeyDown={(e) => {
              if (
                e.key === "e" ||
                e.key === "E" ||
                e.key === "+" ||
                e.key === "-"
              ) {
                e.preventDefault();
              }
            }}
            required
            inputProps={{
              pattern: "[0-9]*",
              inputMode: "numeric",
              maxLength: 4,
              type: "number",
            }}
            size="small"
            helperText={errors.beginning_year}
            FormHelperTextProps={{
              sx: {
                color: "error.main",
                fontSize: "16px !important",
                fontWeight: 500,
                margin: "4px 0 0",
              },
            }}
          />
        </Grid>

        {/* End Year */}
        <Grid item xs={12} sm={6}>
          <Box
            display={"flex"}
            alignItems={"center"}
            sx={{ mt: 2, mb: 1 }}
            gap={1}
          >
            <Typography variant="subtitle2">
              End Year of Implementation
            </Typography>
            <Tooltip
              title="If the project is still in progress, please provide the estimated completion date."
              arrow
              placement="right"
            >
              <InfoOutlinedIcon
                fontSize="small"
                sx={{ color: "#585858", height: "16px", width: "16px" }}
              />
            </Tooltip>
          </Box>
          <TextField
            sx={{ width: "80%" }}
            value={answers.answer.end_year || ""}
            onChange={(e) => {
              if (
                validateEndYear(e.target.value, answers.answer.beginning_year)
              ) {
                handleInputChange("end_year", e.target.value);
              }
            }}
            onKeyDown={(e) => {
              if (
                e.key === "e" ||
                e.key === "E" ||
                e.key === "+" ||
                e.key === "-"
              ) {
                e.preventDefault();
              }
            }}
            required
            inputProps={{
              pattern: "[0-9]*",
              inputMode: "numeric",
              maxLength: 4,
              type: "number",
            }}
            size="small"
            helperText={errors.end_year}
            FormHelperTextProps={{
              sx: {
                color: "error.main",
                fontSize: "16px !important",
                fontWeight: 500,
                margin: "4px 0 0",
              },
            }}
          />
        </Grid>

        {/* Location of Project */}
        <Grid item xs={12} sm={6}>
          <Box
            display={"flex"}
            alignItems={"center"}
            sx={{ mt: 2, mb: 1 }}
            gap={1}
          >
            <Typography variant="subtitle2">Location of Project</Typography>
            <Tooltip
              title="Please specify the district where the project is being implemented. If the project spans more than three districts, you may mention the state instead."
              arrow
              placement="right"
            >
              <InfoOutlinedIcon
                fontSize="small"
                sx={{ color: "#585858", height: "16px", width: "16px" }}
              />
            </Tooltip>
          </Box>
          <TextField
            sx={{ width: "80%" }}
            value={answers.answer.location_of_project || ""}
            onChange={(e) =>
              handleInputChange("location_of_project", e.target.value)
            }
            required
            size="small"
            helperText={errors.location_of_project}
            FormHelperTextProps={{
              sx: {
                color: "error.main",
                fontSize: "16px !important",
                fontWeight: 500,
                margin: "4px 0 0",
              },
            }}
          />
        </Grid>

        {/* Area of Project */}
        <Grid item xs={12} sm={6}>
          <Box
            display={"flex"}
            alignItems={"center"}
            sx={{ mt: 2, mb: 1 }}
            gap={1}
          >
            <Typography variant="subtitle2">
              Area of Project (in sq km)
            </Typography>
            <Tooltip
              title="Please enter the area of the project or the solution in sq km"
              arrow
              placement="right"
            >
              <InfoOutlinedIcon
                fontSize="small"
                sx={{ color: "#585858", height: "16px", width: "16px" }}
              />
            </Tooltip>
          </Box>

          <TextField
            sx={{ width: "80%" }}
            value={answers.answer.area_of_project || ""}
            onChange={(e) =>
              handleInputChange("area_of_project", e.target.value)
            }
            onKeyDown={(e) => {
              if (
                e.key === "e" ||
                e.key === "E" ||
                e.key === "+" ||
                e.key === "-"
              ) {
                e.preventDefault();
              }
            }}
            required
            inputProps={{
              type: "number",
            }}
            size="small"
            helperText={errors.area_of_project}
            FormHelperTextProps={{
              sx: {
                color: "error.main",
                fontSize: "16px !important",
                fontWeight: 500,
                margin: "4px 0 0",
              },
            }}
          />
        </Grid>
      </Grid>

      {/* Description of Project */}
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          sx={{ mt: 2, mb: 1 }}
          gap={1}
        >
          <Typography variant="subtitle2">
            Brief Description of the Project (in 100 words)
          </Typography>
          <Tooltip
            title="Please include the objective of the project along with the Nature-based Solution being implemented to achieve that objective."
            arrow
            placement="right"
          >
            <InfoOutlinedIcon
              fontSize="small"
              sx={{ color: "#585858", height: "16px", width: "16px" }}
            />
          </Tooltip>
        </Box>
        <TextField
          sx={{ width: "90%" }}
          value={answers.answer.description_of_project || ""}
          onChange={(e) => {
            const newText = e.target.value;
            if (
              newText.length <
              (answers.answer.description_of_project || "").length
            ) {
              handleInputChange("description_of_project", newText);
              return;
            }
            const words = newText
              .trim()
              .split(/\s+/)
              .filter((word) => word.length > 0);
            if (words.length <= 100) {
              handleInputChange("description_of_project", newText);
            }
          }}
          multiline
          rows={5}
          size="small"
          helperText={errors.description_of_project}
          FormHelperTextProps={{
            sx: {
              color: "error.main",
              fontSize: "16px !important",
              fontWeight: 500,
              margin: "4px 0 0",
            },
          }}
        />
      </Box>
    </FormGroup>
  );
};

export default ProjectDetails;
