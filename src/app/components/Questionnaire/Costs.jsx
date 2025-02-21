import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Typography,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Tooltip,
  IconButton,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";

import { convertToYear, getTotalCost } from "@/app/utils/helper";

const Costs = ({ question, answers, setAnswers }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [data, setData] = useState([
    {
      id: "1",
      cat: "Capital Expenditure",
      obj: {
        expenses: [
          {
            subId: "1_1",
            subObj: "Design and Planning",
            isVisible: true,
          },
          {
            subId: "1_2",
            subObj: "Land Management",
            isVisible: true,
          },
          {
            subId: "1_3",
            subObj: "Site Preparation",
            isVisible: true,
          },
          {
            subId: "1_4",
            subObj: "Project-related permits",
            isVisible: true,
          },
          {
            subId: "1_5",
            subObj: "Other",
            isVisible: true,
          },
          {
            subId: "1_6",
            subObj: "Capital Additional - 1",
            isVisible: false,
          },
          {
            subId: "1_7",
            subObj: "Capital Additional - 2",
            isVisible: false,
          },
          {
            subId: "1_8",
            subObj: "Capital Additional - 3",
            isVisible: false,
          },
        ],
      },
    },
    {
      id: "2",
      cat: "Operational Expenditure",
      obj: {
        expenses: [
          {
            subId: "2_1",
            subObj: "Monitoring and Technology",
            isVisible: true,
          },
          {
            subId: "2_2",
            subObj: "Ecosystem Maintenance",
            isVisible: true,
          },
          {
            subId: "2_3",
            subObj: "Land Protection",
            isVisible: true,
          },
          {
            subId: "2_4",
            subObj: "Human Resources",
            isVisible: true,
          },
          {
            subId: "2_5",
            subObj: "Other",
            isVisible: true,
          },
          {
            subId: "2_6",
            subObj: "Operational Additional - 1",
            isVisible: false,
          },
          {
            subId: "2_7",
            subObj: "Operational Additional - 2",
            isVisible: false,
          },
          {
            subId: "2_8",
            subObj: "Operational Additional - 3",
            isVisible: false,
          },
        ],
      },
    },
    {
      id: "3",
      cat: "Transactional Costs",
      obj: {
        expenses: [
          {
            subId: "3_1",
            subObj: "Community Engagement",
            isVisible: true,
          },
          {
            subId: "3_2",
            subObj: "Scoping and Technical Costs",
            isVisible: true,
          },
          {
            subId: "3_3",
            subObj: "Other",
            isVisible: true,
          },
          {
            subId: "3_4",
            subObj: "Transactional Additional - 1",
            isVisible: false,
          },
          {
            subId: "3_5",
            subObj: "Transactional Additional - 2",
            isVisible: false,
          },
          {
            subId: "3_6",
            subObj: "Transactional Additional - 3",
            isVisible: false,
          },
        ],
      },
    },
    {
      id: "4",
      cat: "Costs due to Disservices",
      obj: {
        expenses: [
          {
            subId: "4_1",
            subObj: "Negative impacts - pests",
            isVisible: true,
          },
          {
            subId: "4_2",
            subObj: "Negative impacts - opportunity costs",
            isVisible: true,
          },
          {
            subId: "4_3",
            subObj: "Other",
            isVisible: true,
          },
          {
            subId: "4_4",
            subObj: "Disservices Additional - 1",
            isVisible: false,
          },
          {
            subId: "4_5",
            subObj: "Disservices Additional - 2",
            isVisible: false,
          },
          {
            subId: "4_6",
            subObj: "Disservices Additional - 3",
            isVisible: false,
          },
        ],
      },
    },
  ]);
  const [editingField, setEditingField] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    const defaultAnswers = {};
    data.forEach((category) => {
      category.obj.expenses.forEach((expense) => {
        const key = `discount_rate_considered_${expense.subId}`;
        if (!answers.answer[key]) {
          defaultAnswers[key] = 10;
        }
      });
    });

    if (Object.keys(defaultAnswers).length > 0) {
      setAnswers((prev) => ({
        answer: {
          ...prev.answer,
          ...defaultAnswers,
        },
      }));
    }
  }, []);

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

  const toggleFieldVisibility = (categoryIndex) => {
    setData((prevData) => {
      const newData = JSON.parse(JSON.stringify(prevData));
      const category = newData[categoryIndex];

      const hiddenExpenseIndex = category.obj.expenses.findIndex(
        (expense) => !expense.isVisible && expense.subObj.includes("Additional")
      );

      if (hiddenExpenseIndex !== -1) {
        category.obj.expenses[hiddenExpenseIndex].isVisible = true;
      }

      return newData;
    });
  };

  const renderAddButton = (categoryIndex) => {
    const hasHiddenAdditional = data[categoryIndex].obj.expenses.some(
      (expense) => !expense.isVisible && expense.subObj.includes("Additional")
    );

    if (!hasHiddenAdditional) return null;

    return (
      <Box
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
        onClick={() => toggleFieldVisibility(categoryIndex)}
      >
        <AddIcon fontSize="small" />
        <Typography variant="caption2" color={"#3A3A3A"} pl={1}>
          Add
        </Typography>
      </Box>
    );
  };

  const handleStartEdit = (categoryIndex, expenseIndex) => {
    const expense = data[categoryIndex].obj.expenses[expenseIndex];
    setEditingField(`${categoryIndex}_${expenseIndex}`);
    setEditText(expense.subObj);
  };

  const handleSaveEdit = (categoryIndex, expenseIndex) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData[categoryIndex].obj.expenses[expenseIndex].subObj = editText;
      return newData;
    });
    setEditingField(null);
    setEditText("");
  };

  const hideField = (categoryIndex, expenseIndex) => {
    setData((prevData) => {
      const newData = JSON.parse(JSON.stringify(prevData));
      newData[categoryIndex].obj.expenses[expenseIndex].isVisible = false;
      return newData;
    });
  };

  const renderExpenseField = (categoryIndex, expense, expenseIndex) => {
    const isEditing = editingField === `${categoryIndex}_${expenseIndex}`;
    const isAdditional = expense.subObj.includes("Additional");
    const isEditable = expense.subObj.includes("Other") || isAdditional;
    if (!expense.isVisible) return null;

    return (
      <Box key={`${expense.subId}_container`}>
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
                onClick={() => handleSaveEdit(categoryIndex, expenseIndex)}
              >
                <SaveIcon />
              </IconButton>
            </>
          ) : (
            <>
              <Typography sx={{ fontSize: "18px !important", fontWeight: 600 }}>
                {expenseIndex + 1}. {expense.subObj}
              </Typography>
              {(expense.subObj.includes("Other") || isAdditional) && (
                <>
                  <IconButton
                    size="small"
                    onClick={() => handleStartEdit(categoryIndex, expenseIndex)}
                  >
                    <EditIcon />
                  </IconButton>
                  {isAdditional && (
                    <IconButton
                      size="small"
                      onClick={() => hideField(categoryIndex, expenseIndex)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  )}
                </>
              )}
            </>
          )}
        </Box>

        <Grid container spacing={2} pt={1} pb={2}>
          {/* Total Cost (if already available) */}
          <Grid item xs={12} sm={3} md={2}>
            <Tooltip
              title="Total cost of the component (if already available)"
              arrow
            >
              <TextField
                label="Total cost of the component"
                fullWidth
                type="number"
                size="small"
                sx={{
                  "& .MuiInputLabel-root": {
                    fontSize: "14px",
                  },
                }}
                value={
                  answers.answer[`total_cost_available_${expense.subId}`] || ""
                }
                onChange={(e) =>
                  handleInputChange(
                    `total_cost_available_${expense.subId}`,
                    e.target.value
                  )
                }
                onKeyDown={(e) => {
                  if (["e", "E", "+", "-"].includes(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
            </Tooltip>
          </Grid>

          {/* Value per year */}
          <Grid item xs={12} sm={3} md={2}>
            <Tooltip title="Value per year" arrow>
              <TextField
                label="Value per year"
                fullWidth
                type="number"
                size="small"
                sx={{
                  "& .MuiInputLabel-root": {
                    fontSize: "14px",
                  },
                }}
                disabled={
                  answers?.answer?.[`total_cost_available_${expense.subId}`] !==
                  ""
                }
                value={answers.answer[`value_per_year_${expense.subId}`] || ""}
                onChange={(e) =>
                  handleInputChange(
                    `value_per_year_${expense.subId}`,
                    e.target.value
                  )
                }
                onKeyDown={(e) => {
                  if (["e", "E", "+", "-"].includes(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
            </Tooltip>
          </Grid>

          {/* Duration in months */}
          <Grid item xs={12} sm={3} md={2}>
            <Tooltip title="Duration in months" arrow>
              <TextField
                label="Duration in months"
                fullWidth
                type="number"
                size="small"
                sx={{
                  "& .MuiInputLabel-root": {
                    fontSize: "14px",
                  },
                }}
                disabled={
                  answers?.answer?.[`total_cost_available_${expense.subId}`] !==
                  ""
                }
                value={
                  answers.answer[`duration_in_months_${expense.subId}`] || ""
                }
                onChange={(e) =>
                  handleInputChange(
                    `duration_in_months_${expense.subId}`,
                    e.target.value
                  )
                }
                onKeyDown={(e) => {
                  if (["e", "E", "+", "-"].includes(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
            </Tooltip>
          </Grid>

          {/* Duration in years */}
          <Grid item xs={12} sm={3} md={2}>
            <Tooltip title="Duration in years" arrow>
              <TextField
                label="Duration in years"
                fullWidth
                disabled
                size="small"
                sx={{
                  "& .MuiInputLabel-root": {
                    fontSize: "14px",
                  },
                }}
                value={
                  answers.answer[`duration_in_months_${expense.subId}`]
                    ? convertToYear(
                        answers.answer[`duration_in_months_${expense.subId}`]
                      )
                    : ""
                }
              />
            </Tooltip>
          </Grid>

          {/* Discount Rate */}
          <Grid item xs={12} sm={3} md={2}>
            <Tooltip title="Discount Rate considered * (in percentage)" arrow>
              <TextField
                label="Discount rate (%)"
                fullWidth
                type="number"
                size="small"
                disabled={
                  answers?.answer?.[`total_cost_available_${expense.subId}`] !==
                  ""
                }
                value={
                  answers.answer[`discount_rate_considered_${expense.subId}`] ||
                  ""
                }
                onChange={(e) =>
                  handleInputChange(
                    `discount_rate_considered_${expense.subId}`,
                    e.target.value
                  )
                }
                onKeyDown={(e) => {
                  if (["e", "E", "+", "-"].includes(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
            </Tooltip>
          </Grid>

          {/* Total Cost (calculated) */}
          <Grid item xs={12} sm={3} md={2}>
            <Tooltip title="Total Cost" arrow>
              <TextField
                label="Total Cost"
                fullWidth
                disabled
                size="small"
                sx={{
                  "& .MuiInputLabel-root": {
                    fontSize: "14px",
                  },
                }}
                value={
                  answers.answer[`total_cost_available_${expense.subId}`]
                    ? answers.answer[`total_cost_available_${expense.subId}`]
                    : answers.answer[`value_per_year_${expense.subId}`] &&
                      answers.answer[
                        `discount_rate_considered_${expense.subId}`
                      ] &&
                      answers.answer[`duration_in_months_${expense.subId}`]
                    ? getTotalCost(
                        answers.answer[`value_per_year_${expense.subId}`],
                        answers.answer[
                          `discount_rate_considered_${expense.subId}`
                        ],
                        answers.answer[`duration_in_months_${expense.subId}`]
                      )
                    : ""
                }
              />
            </Tooltip>
          </Grid>
        </Grid>
      </Box>
    );
  };

  return (
    <>
      {question.subquestions.map((subquestion, questionIndex) => (
        <React.Fragment key={questionIndex}>
          {questionIndex === 0 && (
            <Box sx={{ my: 0.5 }}>
              <Typography
                sx={{
                  fontSize: "16px !important",
                  fontWeight: 400,
                  lineHeight: "22px",
                  color: "#5C5C5C",
                  fontStyle: "italic",
                  letterSpacing: "0.1px",
                }}
              >
                Mapping the costs associated with an NbS project is a
                fundamental step in laying the groundwork for its successful
                implementation. This process, which broadly encompasses four
                major categories, is essential for setting the scale and scope
                of the project.
              </Typography>
              <Grid item xs={12} my={2}>
                <Divider />
              </Grid>
            </Box>
          )}

          <Box
            key={questionIndex}
            sx={{
              display: "flex",
              alignItems: { xs: "flex-start", sm: "center" },
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              gap: { sm: 4, xs: 1 },
              py: 1,
            }}
          >
            <Typography variant="caption2" sx={{ mt: "6px" }}>
              {subquestion.text}
            </Typography>
            {subquestion.type === "dropdown" ? (
              <TextField
                select
                sx={{
                  width: { sm: "16%", xs: "80%" },
                  "& .MuiInputBase-root": {
                    height: "36px",
                    borderRadius: "8px",
                    fontSize: "14px",
                  },
                }}
                key={`${questionIndex}-${subquestion.id}`}
                value={answers.answer["cost_currency"] || ""}
                onChange={(e) =>
                  handleInputChange("cost_currency", e.target.value)
                }
                required={subquestion?.required}
                size="small"
              >
                <MenuItem
                  key={`menu0-${questionIndex}-${subquestion.id}`}
                  value=""
                  sx={{ fontSize: "14px !important" }}
                >
                  Select an option
                </MenuItem>
                <MenuItem
                  key={`menu2-${questionIndex}-${subquestion.id}`}
                  value="INR"
                  sx={{ fontSize: "14px !important" }}
                >
                  INR
                </MenuItem>
                <MenuItem
                  key={`menu3-${questionIndex}-${subquestion.id}`}
                  value="USD"
                  sx={{ fontSize: "14px !important" }}
                >
                  USD
                </MenuItem>
                <MenuItem
                  key={`menu4-${questionIndex}-${subquestion.id}`}
                  value="EUR"
                  sx={{ fontSize: "14px !important" }}
                >
                  EUR
                </MenuItem>
                <MenuItem
                  key={`menu1-${questionIndex}-${subquestion.id}`}
                  value="other"
                  sx={{ fontSize: "14px !important" }}
                >
                  Other
                </MenuItem>
              </TextField>
            ) : (
              <TextField
                sx={{
                  width: { sm: "16%", xs: "80%" },
                  "& .MuiOutlinedInput-root": {
                    height: "30px",
                    borderRadius: "8px",
                    py: 2.3,
                    "& .MuiOutlinedInput-input": {
                      padding: "20px 10px",
                      height: "30px",
                      lineHeight: "normal",
                    },
                  },
                  "& .MuiInputBase-root": {
                    fontSize: "0.875rem",
                  },
                }}
                disabled={answers?.answer?.[`cost_currency`] !== "other"}
                key={`textfield-${questionIndex}-${subquestion.id}`}
                value={answers.answer["costs_other_currency"] || ""}
                onChange={(e) =>
                  handleInputChange("costs_other_currency", e.target.value)
                }
                required={subquestion?.required}
                size="small"
              />
            )}
          </Box>
        </React.Fragment>
      ))}
      <Box
        sx={{ mt: 1, mb: 2, display: "flex", gap: 2, flexDirection: "column" }}
      >
        <Typography sx={{ fontSize: "16px !important", fontWeight: 500 }}>
          {question.title}
        </Typography>
        <Typography sx={{ fontSize: "16px !important", fontWeight: 500 }}>
          <span style={{ fontWeight: 700 }}>Note: </span> {question.note}
        </Typography>
      </Box>

      {data.map((category, categoryIndex) => (
        <Accordion
          key={`accordion_${category.id}`}
          expanded={expanded === categoryIndex}
          onChange={handleChange(categoryIndex)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              sx={{
                fontSize: "18px !important",
                fontWeight: expanded === categoryIndex ? 600 : 500,
              }}
            >
              {category.cat}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {category.obj.expenses.map((expense, expenseIndex) =>
              renderExpenseField(categoryIndex, expense, expenseIndex)
            )}
            {renderAddButton(categoryIndex)}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default Costs;
