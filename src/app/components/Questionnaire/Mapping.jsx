import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Box,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const influences = [
  "Influences the NbS Project",
  "Influenced by the NbS Project",
  "Influences as well as gets influenced by the NbS Project",
];

const consultation = ["Positive influence", "Negative influence"];

const Mapping = ({ question, answers, setAnswers }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [data, setData] = useState([
    {
      sNo: "1",
      category: {
        key: "social",
        cat: "Social",
        tooltip:
          "Please add data for the indicators you have identified. Some options are provided below.",
        factors: [
          { key: "gender", text: "Gender", isVisible: true },
          { key: "caste", text: "Caste", isVisible: true },
          { key: "race", text: "Race", isVisible: true },
          { key: "social_additional_0", text: "Other", isVisible: true },
          {
            key: "social_additional_1",
            text: "Social Additional-1",
            isVisible: false,
          },
          {
            key: "social_additional_2",
            text: "Social Additional-2",
            isVisible: false,
          },
          {
            key: "social_additional_3",
            text: "Social Additional-3",
            isVisible: false,
          },
        ],
      },
    },
    {
      sNo: "2",
      category: {
        key: "economic",
        cat: "Economic",
        tooltip:
          "Please add data for the indicators you have identified. Some options are provided below.",
        factors: [
          { key: "income", text: "Income Group", isVisible: true },
          { key: "budget", text: "Budget of the Project", isVisible: true },
          { key: "external", text: "External Investments", isVisible: true },
          {
            key: "production",
            text: "Production of an Essential Commodity",
            isVisible: true,
          },
          { key: "access", text: "Access to Market", isVisible: true },
          { key: "economic_additional_0", text: "Other", isVisible: true },
          {
            key: "economic_additional_1",
            text: "Economic Additional-1",
            isVisible: false,
          },
          {
            key: "economic_additional_2",
            text: "Economic Additional-2",
            isVisible: false,
          },
          {
            key: "economic_additional_3",
            text: "Economic Additional-3",
            isVisible: false,
          },
        ],
      },
    },
    {
      sNo: "3",
      category: {
        key: "cultural",
        cat: "Cultural",
        tooltip:
          "Please add data for the indicators you have identified. Some options are provided below.",
        factors: [
          { key: "religious", text: "Religious Importance", isVisible: true },
          { key: "cultural", text: "Cultural Relevance", isVisible: true },
          { key: "other", text: "Other", isVisible: true },
          {
            key: "cultural_additional_1",
            text: "Cultural Additional-1",
            isVisible: false,
          },
          {
            key: "cultural_additional_2",
            text: "Cultural Additional-2",
            isVisible: false,
          },
          {
            key: "cultural_additional_3",
            text: "Cultural Additional-3",
            isVisible: false,
          },
        ],
      },
    },
    {
      sNo: "4",
      category: {
        key: "environmental",
        cat: "Environmental",
        tooltip:
          "Please add data for the indicators you have identified. Some options are provided below.",
        factors: [
          { key: "temperature", text: "Temperature", isVisible: true },
          { key: "rainfall", text: "Rainfall Variability", isVisible: true },
          { key: "other", text: "Other", isVisible: true },
          {
            key: "environmental_additional_1",
            text: "Environmental Additional-1",
            isVisible: false,
          },
          {
            key: "environmental_additional_2",
            text: "Environmental Additional-2",
            isVisible: false,
          },
          {
            key: "environmental_additional_3",
            text: "Environmental Additional-3",
            isVisible: false,
          },
        ],
      },
    },
    {
      sNo: "5",
      category: {
        key: "species",
        cat: "Species",
        tooltip:
          "Please add data for the indicators you have identified. Some options are provided below.",
        factors: [
          { key: "invasive", text: "Invasive Species", isVisible: true },
          { key: "native", text: "Native Species", isVisible: true },
          { key: "other", text: "Other", isVisible: true },
          {
            key: "species_additional_1",
            text: "Species Additional-1",
            isVisible: false,
          },
          {
            key: "species_additional_2",
            text: "Species Additional-2",
            isVisible: false,
          },
          {
            key: "species_additional_3",
            text: "Species Additional-3",
            isVisible: false,
          },
        ],
      },
    },
    {
      sNo: "6",
      category: {
        key: "livelihood",
        cat: "Livelihood",
        tooltip:
          "Please add data for the indicators you have identified. Some options are provided below.",
        factors: [
          {
            key: "overexploitation",
            text: "Overexploitation",
            isVisible: true,
          },
          {
            key: "incomeLivelihood",
            text: "Income from livelihood",
            isVisible: true,
          },
          { key: "landUse", text: "Land-Use Changes", isVisible: true },
          { key: "other", text: "Other", isVisible: true },
          {
            key: "livelihood_additional_1",
            text: "Livelihood Additional-1",
            isVisible: false,
          },
          {
            key: "livelihood_additional_2",
            text: "Livelihood Additional-2",
            isVisible: false,
          },
          {
            key: "livelihood_additional_3",
            text: "Livelihood Additional-3",
            isVisible: false,
          },
        ],
      },
    },
  ]);
  const [editingField, setEditingField] = useState(null);
  const [editText, setEditText] = useState("");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleInputChange = (key, value) => {
    setAnswers((prevAnswers) => ({
      answer: {
        ...prevAnswers.answer,
        [key]: value,
      },
    }));
  };

  const toggleFieldVisibility = (categoryIndex, factorIndex, visible) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData[categoryIndex].category.factors[factorIndex].isVisible = visible;
      return newData;
    });
  };

  const handleStartEdit = (categoryKey, factorKey, text) => {
    setEditingField(`${categoryKey}_${factorKey}`);
    setEditText(text);
  };

  const handleSaveEdit = (
    categoryIndex,
    factorIndex,
    categoryKey,
    factorKey
  ) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData[categoryIndex].category.factors[factorIndex].text = editText;
      return newData;
    });
    setAnswers((prevAnswers) => {
      const updatedAnswer = {
        ...prevAnswers.answer,
        answer: {
          ...prevAnswers.answer,
        },
      };
      updatedAnswer.answer[`${categoryKey}_${factorKey}`] = editText;
      return updatedAnswer;
    });

    setEditingField(null);
    setEditText("");
  };

  const calculateSumForFactor = (categoryKey, factorKey) => {
    if (!answers?.answer) return { positive: 0, negative: 0 };

    const positiveKey = `${categoryKey}_${factorKey}_positive`;
    const negativeKey = `${categoryKey}_${factorKey}_negative`;

    const positive = parseInt(answers.answer[positiveKey] || 0, 10);
    const negative = parseInt(answers.answer[negativeKey] || 0, 10);

    return { positive, negative };
  };

  const getTextColor = (categoryKey, factorKey) => {
    const { positive, negative } = calculateSumForFactor(
      categoryKey,
      factorKey
    );
    const totalSum = positive + negative;
    const consultations = parseInt(
      answers?.answer?.number_of_consultations || 0,
      10
    );

    if (!consultations || !totalSum) return "inherit";
    return totalSum === consultations ? "inherit" : "#F26226";
  };

  const renderWarning = (categoryKey, factorKey) => {
    return (
      <Box display={"flex"} flexDirection={"column"} gap={1}>
        {getTextColor(categoryKey, factorKey) === "#F26226" && (
          <Alert
            severity="warning"
            sx={{
              "& .MuiAlert-icon": {
                fontSize: "16px",
              },
            }}
          >
            <Typography sx={{ fontSize: "10px !important" }}>
              The sum of people who identify the relationship either as positive
              or negative should be equal to the number of people who
              participated in the consultations.
            </Typography>
          </Alert>
        )}
      </Box>
    );
  };

  const renderFactorName = (category, factor, categoryIndex, factorIndex) => {
    const isEditing = editingField === `${category.key}_${factor.key}`;

    return (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {isEditing ? (
          <>
            <TextField
              size="small"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              sx={{ mr: 1 }}
            />
            <IconButton
              size="small"
              onClick={() =>
                handleSaveEdit(
                  categoryIndex,
                  factorIndex,
                  category.key,
                  factor.key
                )
              }
            >
              <SaveIcon />
            </IconButton>
          </>
        ) : (
          <>
            <Typography
              sx={{
                fontSize: "18px !important",
                fontWeight: 600,
                color: getTextColor(category.key, factor.key),
              }}
            >
              {factorIndex + 1}. {factor.text}
            </Typography>
            {(factor.key === "other" || factor.key.includes("additional")) && (
              <IconButton
                size="small"
                onClick={() =>
                  handleStartEdit(category.key, factor.key, factor.text)
                }
              >
                <EditIcon />
              </IconButton>
            )}
            {factor.key.includes("additional") && (
              <IconButton
                size="small"
                onClick={() =>
                  toggleFieldVisibility(categoryIndex, factorIndex, false)
                }
              >
                <DeleteIcon />
              </IconButton>
            )}
          </>
        )}
      </Box>
    );
  };

  const renderAddButton = (categoryIndex) => {
    const additionalFields = data[categoryIndex].category.factors.filter(
      (f) => f.key.includes("additional") && !f.isVisible
    );

    if (additionalFields.length === 0) return null;

    return (
      <Box
        onClick={() => {
          const firstHiddenIndex = data[
            categoryIndex
          ].category.factors.findIndex(
            (f) => f.key.includes("additional") && !f.isVisible
          );
          if (firstHiddenIndex !== -1) {
            toggleFieldVisibility(categoryIndex, firstHiddenIndex, true);
          }
        }}
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          mt: 2,
          border: "1px solid #bbb",
          width: "fit-content",
          py: 0.6,
          px: 2,
          cursor: "pointer",
        }}
      >
        <AddIcon fontSize="small" />
        <Typography variant="caption2" color={"#3A3A3A"} pl={1}>
          Add
        </Typography>
      </Box>
    );
  };

  return (
    <>
      <FormGroup>
        {question.subquests.slice(0, 1).map((subquest, subquestIndex) => (
          <React.Fragment key={`subquest++${subquestIndex}`}>
            <Typography variant="caption3" mt={2}>
              Have you conducted stakeholder consultations to identify the Local
              Factors of Influence?
            </Typography>
            <Box key={`subquest-${subquestIndex}`}>
              {subquest.labels.map((label, labelIndex) => (
                <Box
                  key={`label-${subquestIndex}-${labelIndex}`}
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}
                >
                  <Typography variant="caption2">{label.text}</Typography>
                  {label.type === "dropdown" && (
                    <RadioGroup
                      value={answers?.answer?.response || ""}
                      onChange={(e) =>
                        handleInputChange("response", e.target.value)
                      }
                      row
                    >
                      <FormControlLabel
                        value="Yes"
                        sx={{
                          "& .MuiTypography-root": {
                            fontSize: 16,
                            fontWeight: 600,
                          },
                        }}
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        sx={{
                          "& .MuiTypography-root": {
                            fontSize: 16,
                            fontWeight: 600,
                          },
                        }}
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  )}
                </Box>
              ))}
            </Box>
          </React.Fragment>
        ))}
      </FormGroup>
      {answers?.answer?.response === "Yes" && (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
          <Typography variant="caption2">
            If the response to the question above is yes, then please highlight
            the total number of people who were part of these consultations?
          </Typography>
          <TextField
            size="small"
            value={answers?.answer?.number_of_consultations || ""}
            type="number"
            sx={{
              "& .MuiOutlinedInput-root": {
                height: "30px",
                "& input": {
                  padding: "4px 8px",
                },
              },
            }}
            inputProps={{
              min: 0,
              inputMode: "numeric",
              pattern: "[0-9]*",
            }}
            onKeyDown={(e) => {
              if (e.key === "e" || e.key === "+" || e.key === "-") {
                e.preventDefault();
              }
            }}
            onChange={(e) =>
              handleInputChange("number_of_consultations", e.target.value)
            }
          />
        </Box>
      )}
      {(answers?.answer?.response === "Yes" ||
        answers?.answer?.response === "No") && (
        <>
          {data.map((value, categoryIndex) => (
            <Accordion
              key={`category-${value.category.cat}-${categoryIndex}`}
              expanded={expanded === categoryIndex}
              onChange={handleChange(categoryIndex)}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  sx={{
                    fontSize: "20px !important",
                    fontWeight: expanded === categoryIndex ? 600 : 500,
                  }}
                >
                  {value.category.cat}
                </Typography>
                {expanded === categoryIndex && (
                  <Box display={"flex"} alignSelf={"center"} pl={1}>
                    <Tooltip title={value.category.tooltip} placement="right">
                      <InfoOutlinedIcon fontSize="small" />
                    </Tooltip>
                  </Box>
                )}
              </AccordionSummary>

              {expanded === categoryIndex && (
                <AccordionDetails>
                  {value.category.factors.map((factor, factorIndex) => (
                    <Box
                      key={`factor-${value.category.cat}-${factor.key}-${factorIndex}`}
                    >
                      {(factor.isVisible ||
                        !factor.key.includes("additional")) && (
                        <>
                          {renderWarning(value.category.key, factor.key)}
                          {renderFactorName(
                            value.category,
                            factor,
                            categoryIndex,
                            factorIndex
                          )}
                          <Grid container spacing={2} mt={0} mb={1}>
                            {/* Type of Influence */}
                            <Grid item xs={12} sm={3}>
                              <TextField
                                select
                                label="Type of Influence"
                                size="small"
                                fullWidth
                                sx={{
                                  "& .MuiInputBase-input": {
                                    fontSize: "14px",
                                  },
                                  "& .MuiInputLabel-root": {
                                    fontSize: "14px",
                                  },
                                }}
                                value={
                                  answers?.answer?.[
                                    `${value.category.key}_${factor.key}_influence`
                                  ] || ""
                                }
                                onChange={(e) =>
                                  handleInputChange(
                                    `${value.category.key}_${factor.key}_influence`,
                                    e.target.value
                                  )
                                }
                              >
                                <MenuItem
                                  key="default"
                                  value=""
                                  sx={{ fontSize: "14px !important" }}
                                >
                                  Select an option
                                </MenuItem>
                                {influences.map((influence) => (
                                  <MenuItem
                                    key={`influence-${influence}`}
                                    value={influence}
                                    sx={{ fontSize: "14px !important" }}
                                  >
                                    {influence}
                                  </MenuItem>
                                ))}
                              </TextField>
                            </Grid>

                            {/* Positive Relationship */}
                            <Grid item xs={12} sm={3}>
                              <TextField
                                label="Positive Relationship"
                                fullWidth
                                size="small"
                                type="number"
                                sx={{
                                  "& .MuiInputLabel-root": {
                                    fontSize: "14px",
                                  },
                                }}
                                disabled={answers?.answer?.response === "No"}
                                value={
                                  answers?.answer?.[
                                    `${value.category.key}_${factor.key}_positive`
                                  ] || ""
                                }
                                onChange={(e) =>
                                  handleInputChange(
                                    `${value.category.key}_${factor.key}_positive`,
                                    e.target.value
                                  )
                                }
                              />
                            </Grid>

                            {/* Negative Relationship */}
                            <Grid item xs={12} sm={3}>
                              <TextField
                                label="Negative Relationship"
                                fullWidth
                                size="small"
                                type="number"
                                disabled={answers?.answer?.response === "No"}
                                sx={{
                                  "& .MuiInputLabel-root": {
                                    fontSize: "14px",
                                  },
                                }}
                                value={
                                  answers?.answer?.[
                                    `${value.category.key}_${factor.key}_negative`
                                  ] || ""
                                }
                                onChange={(e) =>
                                  handleInputChange(
                                    `${value.category.key}_${factor.key}_negative`,
                                    e.target.value
                                  )
                                }
                              />
                            </Grid>

                            {/* No Consultation */}
                            <Grid item xs={12} sm={3}>
                              <TextField
                                select
                                label="Select influence, if no consultations conducted"
                                fullWidth
                                size="small"
                                disabled={answers?.answer?.response === "Yes"}
                                sx={{
                                  "& .MuiInputBase-input": {
                                    fontSize: "14px",
                                  },
                                  "& .MuiInputLabel-root": {
                                    fontSize: "14px",
                                  },
                                }}
                                value={
                                  answers?.answer?.[
                                    `${value.category.key}_${factor.key}_consultation`
                                  ] || ""
                                }
                                onChange={(e) =>
                                  handleInputChange(
                                    `${value.category.key}_${factor.key}_consultation`,
                                    e.target.value
                                  )
                                }
                              >
                                <MenuItem
                                  key="default"
                                  value=""
                                  sx={{ fontSize: "14px !important" }}
                                >
                                  Select an option
                                </MenuItem>
                                {consultation.map((consult) => (
                                  <MenuItem
                                    key={`consult-${consult}`}
                                    value={consult}
                                    sx={{ fontSize: "14px !important" }}
                                  >
                                    {consult}
                                  </MenuItem>
                                ))}
                              </TextField>
                            </Grid>
                          </Grid>
                        </>
                      )}
                    </Box>
                  ))}
                  {
                    // factor.key === "other" &&
                    renderAddButton(categoryIndex)
                  }
                </AccordionDetails>
              )}
            </Accordion>
          ))}
        </>
      )}
    </>
  );
};

export default React.memo(Mapping);
