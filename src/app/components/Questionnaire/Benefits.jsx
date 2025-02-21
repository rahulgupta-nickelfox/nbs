"use client";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
  MenuItem,
  Box,
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
  Tooltip,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  convertToYear,
  convertToYearBenefit,
  createMitigationMap,
  getTotalCost,
  getTotalCostBenefit,
} from "@/app/utils/helper";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import { answer } from "@/app/questions";

const Benefits = ({ question, answers, setAnswers }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [editingField, setEditingField] = useState(null);
  const [editText, setEditText] = useState("");
  const [data, setData] = useState([
    {
      sNo: "1",
      category: {
        key: "clmtchg",
        cat: "Climate Change",
        benefits: [
          {
            key: "miteff",
            text: "Mitigation Efforts",
            isVisible: true,
            isAdditional: false,
            indicator: [
              {
                text: "Total carbon removed or stored in vegetation and soil",
                isAdditional: false,
              },
              {
                text: "Soil carbon content",
                isAdditional: false,
              },
              {
                text: "Surface area of restored/created wetlands",
                isAdditional: false,
              },
            ],
            additionalIndicators: [
              {
                text: "Mitigation Additional - 1",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 4,
              },
              {
                text: "Mitigation Additional - 2",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 5,
              },
              {
                text: "Mitigation Additional - 3",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 6,
              },
            ],
          },
          {
            key: "disres",
            text: "Disaster Resilience",
            isVisible: true,
            isAdditional: false,
            indicator: [
              {
                text: "Mean annual direct and indirect losses due to natural and climate hazards",
                isAdditional: false,
              },
              {
                text: "Agricultural and industrial buildings potentially exposed to risk",
                isAdditional: false,
              },
              {
                text: "Flood hazard",
                isAdditional: false,
              },
            ],
            additionalIndicators: [
              {
                text: "Disaster Additional - 1",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 4,
              },
              {
                text: "Disaster Additional - 2",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 5,
              },
              {
                text: "Disaster Additional - 3",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 6,
              },
            ],
          },
          {
            key: "tempreg",
            text: "Temperature Regulation",
            isVisible: true,
            isAdditional: false,
            indicator: [
              {
                text: "Decrease in mean or peak daytime local temperature",
                isAdditional: false,
              },
              {
                text: "Monthly mean maximum and minimum temperatures",
                isAdditional: false,
              },
              {
                text: "Urban Heat Island",
                isAdditional: false,
              },
            ],
            additionalIndicators: [
              {
                text: "Temperature Additional - 1",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 4,
              },
              {
                text: "Temperature Additional - 2",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 5,
              },
              {
                text: "Temperature Additional - 3",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 6,
              },
            ],
          },
          {
            key: "bftppl",
            text: "Benefits to People",
            isVisible: true,
            isAdditional: false,
            indicator: [
              {
                text: "Energy and carbon savings",
                isAdditional: false,
              },
              {
                text: "Water savings",
                isAdditional: false,
              },
              {
                text: "Health benefits",
                isAdditional: false,
              },
            ],
            additionalIndicators: [
              {
                text: "Benefits Additional - 1",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 4,
              },
              {
                text: "Benefits Additional - 2",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 5,
              },
              {
                text: "Benefits Additional - 3",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 6,
              },
            ],
          },
        ],
      },
    },
    {
      sNo: "2",
      category: {
        key: "water",
        cat: "Water",
        benefits: [
          {
            key: "qlt_drinking_water",
            text: "Quality of Drinking Water",
            isVisible: true,
            isAdditional: false,
            indicator: [
              {
                text: "Calculated drinking water provision",
                isAdditional: false,
              },
            ],
            additionalIndicators: [
              {
                text: "Water Quality Additional - 1",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 2,
              },
              {
                text: "Water Quality Additional - 2",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 3,
              },
              {
                text: "Water Quality Additional - 3",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 4,
              },
            ],
          },
          {
            key: "impvd_disres",
            text: "Improved Disaster Resilience",
            isVisible: true,
            isAdditional: false,
            indicator: [
              {
                text: "Flood excess volume",
                isAdditional: false,
              },
              {
                text: "Flood peak reduction",
                isAdditional: false,
              },
            ],
            additionalIndicators: [
              {
                text: "Water Disaster Additional - 1",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 3,
              },
              {
                text: "Water Disaster Additional - 2",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 4,
              },
              {
                text: "Water Disaster Additional - 3",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 5,
              },
            ],
          },
          {
            key: "qltgrdwater",
            text: "Quality of Groundwater",
            isVisible: true,
            isAdditional: false,
            indicator: [
              {
                text: "Quantitative status of groundwater",
                isAdditional: false,
              },
            ],
            additionalIndicators: [
              {
                text: "Groundwater Additional - 1",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 2,
              },
              {
                text: "Groundwater Additional - 2",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 3,
              },
              {
                text: "Groundwater Additional - 3",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 4,
              },
            ],
          },
          {
            key: "waterforagri",
            text: "Water for Agriculture",
            isVisible: true,
            isAdditional: false,
            indicator: [
              {
                text: "Water dependency for food production",
                isAdditional: false,
              },
              {
                text: "Rainwater or greywater use for irrigation purposes",
                isAdditional: false,
              },
            ],
            additionalIndicators: [
              {
                text: "Agriculture Water Additional - 1",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 3,
              },
              {
                text: "Agriculture Water Additional - 2",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 4,
              },
              {
                text: "Agriculture Water Additional - 3",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 5,
              },
            ],
          },
        ],
      },
    },
    {
      sNo: "3",
      category: {
        key: "green",
        cat: "Green Space Management",
        benefits: [
          {
            key: "infra",
            text: "Infrastructure",
            isVisible: true,
            isAdditional: false,
            indicator: [
              {
                text: "Effective green infrastructure at urban-rural interface",
                isAdditional: false,
              },
              {
                text: "Percentage of green infrastructure integrated into existing structures",
                isAdditional: false,
              },
              {
                text: "Frequency of use of green and blue spaces",
                isAdditional: false,
              },
            ],
            additionalIndicators: [
              {
                text: "Infrastructure Additional - 1",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 4,
              },
              {
                text: "Infrastructure Additional - 2",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 5,
              },
              {
                text: "Infrastructure Additional - 3",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 6,
              },
            ],
          },
          {
            key: "bftclmtenv",
            text: "Benefits to climate and environment",
            isVisible: true,
            isAdditional: false,
            indicator: [
              {
                text: "Soil organic matter content",
                isAdditional: false,
              },
              {
                text: "Tree biomass stock change",
                isAdditional: false,
              },
              {
                text: "Land use change and green space configuration",
                isAdditional: false,
              },
              {
                text: "Percentage of waste averted from going into landfills",
                isAdditional: false,
              },
            ],
            additionalIndicators: [
              {
                text: "Climate Benefits Additional - 1",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 5,
              },
              {
                text: "Climate Benefits Additional - 2",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 6,
              },
              {
                text: "Climate Benefits Additional - 3",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 7,
              },
            ],
          },
          {
            key: "bft2ppl",
            text: "Benefits to people",
            isVisible: true,
            isAdditional: false,
            indicator: [
              {
                text: "Recreational opportunities provided by green infrastructure",
                isAdditional: false,
              },
              {
                text: "Food production in urban allotment and NBS",
                isAdditional: false,
              },
              {
                text: "Sustainable transportation modes allowed",
                isAdditional: false,
              },
            ],
            additionalIndicators: [
              {
                text: "People Benefits Additional - 1",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 4,
              },
              {
                text: "People Benefits Additional - 2",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 5,
              },
              {
                text: "People Benefits Additional - 3",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 6,
              },
            ],
          },
        ],
      },
    },
    {
      sNo: "4",
      category: {
        key: "airqlt",
        cat: "Air Quality",
        benefits: [
          {
            key: "redpoll",
            text: "Reduction in pollutants",
            isVisible: true,
            isAdditional: false,
            indicator: [
              {
                text: "Total particular matter removed by NbS vegetation",
                isAdditional: false,
              },
              {
                text: "Trends in emissions of NOx and SOx",
                isAdditional: false,
              },
              {
                text: "Concentration of particulate matter and other gases in ambient",
                isAdditional: false,
              },
            ],
            additionalIndicators: [
              {
                text: "Pollutants Additional - 1",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 4,
              },
              {
                text: "Pollutants Additional - 2",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 5,
              },
              {
                text: "Pollutants Additional - 3",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 6,
              },
            ],
          },
          {
            key: "redemi",
            text: "Reduction in emission",
            isVisible: true,
            isAdditional: false,
            indicator: [
              {
                text: "Total carbon removed or stored in vegetation and soil",
                isAdditional: false,
              },
            ],
            additionalIndicators: [
              {
                text: "Emissions Additional - 1",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 2,
              },
              {
                text: "Emissions Additional - 2",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 3,
              },
              {
                text: "Emissions Additional - 3",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 4,
              },
            ],
          },
          {
            key: "bft3ppl",
            text: "Benefits to people",
            isVisible: true,
            isAdditional: false,
            indicator: [
              {
                text: "Premature deaths and hospital admissions averted per year",
                isAdditional: false,
              },
              {
                text: "Mortality due to poor air quality",
                isAdditional: false,
              },
              {
                text: "Avoided costs for air pollution control measures",
                isAdditional: false,
              },
              {
                text: "Reduction in the number of people with respiratory diseases",
                isAdditional: false,
              },
            ],
            additionalIndicators: [
              {
                text: "Air Benefits Additional - 1",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 5,
              },
              {
                text: "Air Benefits Additional - 2",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 6,
              },
              {
                text: "Air Benefits Additional - 3",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 7,
              },
            ],
          },
        ],
      },
    },
    {
      sNo: "5",
      category: {
        key: "phealth",
        cat: "Public Health and Wellbeing",
        benefits: [
          {
            key: "poshlthimp",
            text: "Positive health impacts",
            indicator: [
              {
                text: "Self-reported mental health and wellbeing",
                isAdditional: false,
              },
              {
                text: "General wellbeing and happiness",
                isAdditional: false,
              },
              {
                text: "Improvement in nutritional content of products obtained from NbS measures",
                isAdditional: false,
              },
            ],
            additionalIndicators: [
              {
                text: "Health Benefits Additional - 1",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 4,
              },
              {
                text: "Health Benefits Additional - 2",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 5,
              },
              {
                text: "Health Benefits Additional - 3",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 6,
              },
            ],
          },
          {
            key: "detrieff",
            text: "Detrimental effects",
            indicator: [
              {
                text: "Mortality due to poor air quality",
                isAdditional: false,
              },
              {
                text: "Exposure to noise pollution",
                isAdditional: false,
              },
              {
                text: "Hospital admissions due to high temperature during extreme hear events",
                isAdditional: false,
              },
              {
                text: "Level of chronic stress",
                isAdditional: false,
              },
            ],
            additionalIndicators: [
              {
                text: "Detrimental Additional - 1",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 5,
              },
              {
                text: "Detrimental Additional - 2",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 6,
              },
              {
                text: "Detrimental Additional - 3",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 7,
              },
            ],
          },
          {
            key: "improvimmchild",
            text: "Improvement in the immunity of children",
            indicator: [
              {
                text: "Cognitive and social development",
                isAdditional: false,
              },
              {
                text: "Infant mortality rate",
                isAdditional: false,
              },
            ],
            additionalIndicators: [
              {
                text: "Immunity Additional - 1",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 3,
              },
              {
                text: "Immunity Additional - 2",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 4,
              },
              {
                text: "Immunity Additional - 3",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 5,
              },
            ],
          },
          {
            key: "reddis",
            text: "Reduction in diseases",
            indicator: [
              {
                text: "Reduction in the number of people with respiratory diseases",
                isAdditional: false,
              },
              {
                text: "Reduced number of cardiovascular morbidity and mortality evenets",
                isAdditional: false,
              },
            ],
            additionalIndicators: [
              {
                text: "Reduction Additional - 1",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 3,
              },
              {
                text: "Reduction Additional - 2",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 4,
              },
              {
                text: "Reduction Additional - 3",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 5,
              },
            ],
          },
        ],
      },
    },
    {
      sNo: "6",
      category: {
        key: "poteco",
        cat: "Potential Economic Opportunities and Green Jobs",
        benefits: [
          {
            key: "employment",
            text: "Employment",
            indicator: [
              { text: "Number of new jobs created", isAdditional: false },
              {
                text: "Number of new jobs related to NbS construction and maintenance",
                isAdditional: false,
              },
              {
                text: "New businesses attracted and additional business rates",
                isAdditional: false,
              },

              {
                text: "Net additional jobs in the green sector enabled by NBS projects",
                isAdditional: false,
              },
            ],
            additionalIndicators: [
              {
                text: "Potential Additional - 1",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 5,
              },
              {
                text: "Potential Additional - 2",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 6,
              },
              {
                text: "Potential Additional - 3",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 7,
              },
            ],
          },
          {
            key: "improvineco",
            text: "Improvement in economy",
            indicator: [
              {
                text: "Mean land and/or property value in proximity to green space",
                isAdditional: false,
              },
              {
                text: "Retail and commercial activity in proximity to green space",
                isAdditional: false,
              },
              {
                text: "GVA to local economy from new business creation",
                isAdditional: false,
              },
              {
                text: "GVA to local economy from availabilty of raw material",
                isAdditional: false,
              },
              {
                text: "Private finance attracted to the NbS site / private investment in the bio-economy",
                isAdditional: false,
              },
            ],
            additionalIndicators: [
              {
                text: "Improvement Additional - 1",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 6,
              },
              {
                text: "Improvement Additional - 2",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 7,
              },
              {
                text: "Improvement Additional - 3",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 8,
              },
            ],
          },
          {
            key: "indvecogrowth",
            text: "Individual economic growth",
            indicator: [
              {
                text: "Average land productivity and profitability",
                isAdditional: false,
              },
              { text: "Increase in income", isAdditional: false },
              {
                text: "Individual eranings uplift arising from skills enhancement in the design and implementation of NBS",
                isAdditional: false,
              },
              {
                text: "GVA per employees based on full-time equivalent jobs in the green sector",
                isAdditional: false,
              },
            ],
            additionalIndicators: [
              {
                text: "Individual Growth Additional - 1",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 5,
              },
              {
                text: "Individual Growth Additional - 2",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 6,
              },
              {
                text: "Individual Growth Additional - 3",
                isVisible: false,
                isAdditional: true,
                indicatorIndex: 7,
              },
            ],
          },
        ],
      },
    },
  ]);

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

  const ecosystem_valuation_method = [
    "Benefit Transfer Method",
    "Avoided Cost Method",
    "Contingent Valuation Method",
    "Contingent Choice Method",
    "Market Price Method",
    "Hedonic Pricing Method",
    "Production Function Method",
    "Travel Cost Method",
  ];

  const toggleFieldVisibility = (categoryIndex, benefitIndex) => {
    setData((prevData) => {
      const newData = JSON.parse(JSON.stringify(prevData));

      const benefit = newData[categoryIndex].category.benefits[benefitIndex];

      const hiddenExpenseIndex = benefit.additionalIndicators.findIndex(
        (indicator) => !indicator.isVisible
      );

      if (hiddenExpenseIndex !== -1) {
        benefit.additionalIndicators[hiddenExpenseIndex].isVisible = true;
      } else {
        benefit.additionalIndicators.push({
          text: `New Indicator ${benefit.additionalIndicators.length + 1}`,
          isVisible: true,
          isAdditional: true,
        });
      }
      return newData;
    });
  };

  const handleStartEdit = (categoryIndex, benefitIndex, indicatorIndex) => {
    const benefit = data[categoryIndex].category.benefits[benefitIndex];
    setEditingField(`${categoryIndex}_${benefitIndex}_${indicatorIndex}`);
    setEditText(benefit.additionalIndicators[indicatorIndex].text);
  };

  const handleSaveEdit = (categoryIndex, benefitIndex, indicatorIndex) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData[categoryIndex].category.benefits[
        benefitIndex
      ].additionalIndicators[indicatorIndex].text = editText;
      return newData;
    });
    setEditingField(null);
    setEditText("");
  };

  const hideField = (categoryIndex, benefitIndex, idx) => {
    setData((prevData) => {
      const newData = JSON.parse(JSON.stringify(prevData));

      const dataMap = createMitigationMap(
        newData[categoryIndex].category.benefits[benefitIndex]
          .additionalIndicators
      );
      const requiredObject = dataMap.get(idx);
      requiredObject.isVisible = false;
      return newData;
    });
  };

  const renderAddButton = (categoryIndex, benefitIndex) => {
    const benefit = data[categoryIndex]?.category?.benefits[benefitIndex];
    const hasHiddenAdditional = benefit?.additionalIndicators?.some(
      (indicator) => !indicator.isVisible
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
          ml: 3,
        }}
        onClick={() => toggleFieldVisibility(categoryIndex, benefitIndex)}
      >
        <AddIcon fontSize="small" />
        <Typography variant="caption2" color={"#3A3A3A"} pl={1}>
          Add
        </Typography>
      </Box>
    );
  };

  useEffect(() => {
    const defaultAnswers = {};
    data.forEach((item) => {
      const { category } = item;
      category.benefits.forEach((benefit) => {
        const indicators = [
          ...benefit.indicator,
          ...benefit.additionalIndicators,
        ];
        indicators.forEach((_, index) => {
          const key = `${category.key}_${benefit.key}_${
            index + 1
          }_discountRate`;
          if (answers.answer[key] === undefined) {
            defaultAnswers[key] = 10;
          }
        });
      });
    });

    if (Object.keys(defaultAnswers).length > 0) {
      setAnswers((prev) => ({
        ...prev,
        answer: {
          ...prev.answer,
          ...defaultAnswers,
        },
      }));
    }
  }, [data, setAnswers]);
  return (
    <React.Fragment>
      {question.subquestions.map((subquestion, questionIndex) => (
        <React.Fragment key={`${questionIndex}_fragment`}>
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
                The IUCN Global Standard for Nature-based Solutions identifies 7
                categories of benefits which may be attained from the
                implementation of NbS. Each category represents a larger global
                societal challenge that can individually contribute to
                socio-economic hardships for people, nature, and the economy.
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
            <Typography
              key={subquestion.text}
              variant="caption2"
              sx={{ mt: "6px" }}
            >
              {subquestion.text}
            </Typography>
            {subquestion.type === "dropdown" ? (
              <TextField
                select
                disabled
                sx={{
                  width: { sm: "16%", xs: "80%" },
                  "& .MuiInputBase-root": {
                    fontSize: "14px",
                  },
                  "& .MuiOutlinedInput-root": {
                    height: "36px",
                  },
                }}
                key={`${questionIndex}-${subquestion.id}-text-field`}
                value={answers.answer["cost_currency"] || ""}
                onChange={(e) =>
                  handleInputChange("benefits_currency", e.target.value)
                }
                required={subquestion?.required}
                size="small"
              >
                <MenuItem
                  key={`menu0-${questionIndex}-${subquestion.id}`}
                  value=""
                >
                  Select an option
                </MenuItem>
                <MenuItem
                  key={`menu2-${questionIndex}-${subquestion.id}`}
                  value="INR"
                >
                  INR
                </MenuItem>
                <MenuItem
                  key={`menu3-${questionIndex}-${subquestion.id}`}
                  value="USD"
                >
                  USD
                </MenuItem>
                <MenuItem
                  key={`menu4-${questionIndex}-${subquestion.id}`}
                  value="EUR"
                >
                  EUR
                </MenuItem>
                <MenuItem
                  key={`menu1-${questionIndex}-${subquestion.id}`}
                  value="other"
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
                disabled={answers?.answer["benefits_currency"] !== "other"}
                key={`textfield-${questionIndex}-${subquestion.id}`}
                value={answers.answer["benefits_other_currency"] || ""}
                onChange={(e) =>
                  handleInputChange("benefits_other_currency", e.target.value)
                }
                required={subquestion?.required}
                size="small"
              />
            )}
          </Box>
        </React.Fragment>
      ))}
      <Box
        sx={{ mt: 1, mb: 3, display: "flex", gap: 2, flexDirection: "column" }}
      >
        <Typography sx={{ fontSize: "16px !important", fontWeight: 500 }}>
          <span style={{ fontWeight: 700 }}>Note: </span> {question.note}
        </Typography>
      </Box>

      {data.map((value, categoryIndex) => (
        <Accordion
          key={`${value.sNo}_accordion`}
          expanded={expanded === categoryIndex}
          onChange={handleChange(categoryIndex)}
        >
          <AccordionSummary
            key={`${value.sNo}_accordionSummary`}
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography
              key={`${value.category.cat}+${value.sNo}`}
              sx={{
                fontSize: "18px !important",
                fontWeight: expanded === categoryIndex ? 600 : 500,
              }}
            >
              {value.category.cat}
            </Typography>
          </AccordionSummary>

          {expanded === categoryIndex && (
            <AccordionDetails>
              {value.category.benefits.map((benefit, benefitIndex) => (
                <Box
                  key={benefit.key}
                  sx={{
                    marginBottom: "20px",
                    padding: "20px",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                  }}
                >
                  <Grid
                    container
                    key={`${benefit.key}_formLabel_grid_container`}
                    spacing={2}
                    mt={2}
                  >
                    <Grid item xs={12}>
                      <Typography
                        key={`${benefit.key}_formLabel`}
                        sx={{
                          fontSize: "18px !important",
                          fontWeight: 600,
                        }}
                      >
                        {benefit.text}
                      </Typography>
                    </Grid>

                    {/* Identification radio group */}
                    <Grid item key={`${benefit.key}_formLabel_grid`} xs={12}>
                      <FormControl component="fieldset">
                        <FormLabel key={`${benefit.key}_identification`}>
                          Identification
                        </FormLabel>
                        <RadioGroup
                          row
                          key={`${benefit.key}_dropdown`}
                          value={
                            answers.answer[
                              `${benefit.key
                                .toLowerCase()
                                .replace(/\s+/g, "_")}_identification`
                            ] ?? ""
                          }
                          onChange={(e) =>
                            handleInputChange(
                              `${benefit.key
                                .toLowerCase()
                                .replace(/\s+/g, "_")}_identification`,
                              e.target.value
                            )
                          }
                        >
                          <FormControlLabel
                            value="Identified as a Benefit"
                            control={
                              <Radio
                                onClick={() => {
                                  handleInputChange(
                                    `${benefit.key
                                      .toLowerCase()
                                      .replace(/\s+/g, "_")}_identification`,
                                    ""
                                  );
                                }}
                              />
                            }
                            label="Identified as a Benefit"
                          />
                          <FormControlLabel
                            value="Not Identified as a Benefit"
                            control={
                              <Radio
                                onClick={() =>
                                  handleInputChange(
                                    `${benefit.key
                                      .toLowerCase()
                                      .replace(/\s+/g, "_")}_identification`,
                                    ""
                                  )
                                }
                              />
                            }
                            label="Not Identified as a Benefit"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    {/* Ecosystem Valuation Method dropdown */}
                    {answers.answer[`${benefit.key}_identification`] ===
                      "Identified as a Benefit" && (
                      <Grid
                        container
                        spacing={1}
                        key={`${benefit.key}_container_${benefitIndex}_${benefit.text}`}
                        pl={2}
                      >
                        {benefit.indicator.map((i, index) => (
                          <React.Fragment key={`${index}_react_fragment`}>
                            <Grid item key={`${index}_grid_${i.text}`} xs={12}>
                              <Typography
                                sx={{
                                  fontSize: "18px !important",
                                  fontWeight: 600,
                                }}
                                key={`${index + 1}.${i.text}`}
                              >
                                {index + 1}. {i.text}
                              </Typography>
                            </Grid>
                            <Grid
                              item
                              key={`${index}_ecosystem_grid`}
                              xs={12}
                              sm={3}
                              md={2}
                            >
                              <Tooltip
                                title="Ecosystem Valuation Method"
                                placement="right"
                                arrow
                              >
                                <TextField
                                  select
                                  key={`${index}_ecosystem${i.text}`}
                                  label="Ecosystem Valuation Method"
                                  sx={{
                                    "& .MuiInputBase-input": {
                                      fontSize: "14px",
                                    },
                                    "& .MuiInputLabel-root": {
                                      fontSize: "14px",
                                    },
                                  }}
                                  value={
                                    answers.answer[
                                      `${value.category.key}_${benefit.key}_${
                                        index + 1
                                      }` + "_ecosystem"
                                    ] || ""
                                  }
                                  onChange={(e) =>
                                    handleInputChange(
                                      `${value.category.key}_${benefit.key}_${
                                        index + 1
                                      }` + "_ecosystem",
                                      e.target.value
                                    )
                                  }
                                  fullWidth
                                  size="small"
                                >
                                  <MenuItem
                                    value=""
                                    sx={{ fontSize: "14px !important" }}
                                  >
                                    Select an option
                                  </MenuItem>
                                  {ecosystem_valuation_method.map((method) => (
                                    <MenuItem
                                      key={method}
                                      value={method}
                                      sx={{ fontSize: "14px !important" }}
                                    >
                                      {method}
                                    </MenuItem>
                                  ))}
                                </TextField>
                              </Tooltip>
                            </Grid>

                            {/* Economic Value input */}
                            <Grid
                              item
                              key={`${index}_economicValue_grid`}
                              xs={12}
                              sm={3}
                              md={2}
                            >
                              <Tooltip title="Economic Value" arrow>
                                <TextField
                                  key={`${index}_economicValue`}
                                  label="Economic Value"
                                  type="number"
                                  sx={{
                                    "& .MuiInputLabel-root": {
                                      fontSize: "14px",
                                    },
                                  }}
                                  value={
                                    answers.answer[
                                      `${value.category.key}_${benefit.key}_${
                                        index + 1
                                      }` + "_economic_value"
                                    ] || ""
                                  }
                                  onChange={(e) =>
                                    handleInputChange(
                                      `${value.category.key}_${benefit.key}_${
                                        index + 1
                                      }` + "_economic_value",
                                      e.target.value
                                    )
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
                                  fullWidth
                                  size="small"
                                />
                              </Tooltip>
                            </Grid>

                            {/* Duration (in months) input */}
                            <Grid
                              item
                              key={`${index}_durationMonth_grid`}
                              xs={12}
                              sm={3}
                              md={2}
                            >
                              <Tooltip title="Duration (in months)" arrow>
                                <TextField
                                  key={`${index}_durationMonth`}
                                  label="Duration (in months)"
                                  sx={{
                                    "& .MuiInputLabel-root": {
                                      fontSize: "14px",
                                    },
                                  }}
                                  value={
                                    answers.answer[
                                      `${value.category.key}_${benefit.key}_${
                                        index + 1
                                      }` + "_durationMonth"
                                    ] || ""
                                  }
                                  onChange={(e) =>
                                    handleInputChange(
                                      `${value.category.key}_${benefit.key}_${
                                        index + 1
                                      }` + "_durationMonth",
                                      e.target.value
                                    )
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
                                  fullWidth
                                  size="small"
                                  type="number"
                                />
                              </Tooltip>
                            </Grid>

                            {/* Duration (in years) input */}
                            <Grid
                              item
                              key={`${index}_durationYear_grid`}
                              xs={12}
                              sm={3}
                              md={2}
                            >
                              <Tooltip title="Duration (in years)" arrow>
                                <TextField
                                  key={`${index}_durationYear`}
                                  label="Duration (in years)"
                                  disabled
                                  sx={{
                                    "& .MuiInputLabel-root": {
                                      fontSize: "14px",
                                    },
                                  }}
                                  value={
                                    answers.answer[
                                      `${value.category.key}_${benefit.key}_${
                                        index + 1
                                      }` + "_durationMonth"
                                    ]
                                      ? convertToYearBenefit(
                                          answers.answer[
                                            `${value.category.key}_${
                                              benefit.key
                                            }_${index + 1}` + "_durationMonth"
                                          ]
                                        )
                                      : ""
                                  }
                                  fullWidth
                                  size="small"
                                  type="number"
                                />
                              </Tooltip>
                            </Grid>

                            {/* Discount Rate (percentage) input */}
                            <Grid
                              item
                              key={`${index}_discountRate_grid`}
                              xs={12}
                              sm={3}
                              md={2}
                            >
                              <Tooltip title="Discount Rate (%)" arrow>
                                <TextField
                                  key={`${index}_discountRate`}
                                  label="Discount Rate (%)"
                                  sx={{
                                    "& .MuiInputLabel-root": {
                                      fontSize: "14px",
                                    },
                                  }}
                                  value={
                                    answers.answer[
                                      `${value.category.key}_${benefit.key}_${
                                        index + 1
                                      }` + "_discountRate"
                                    ] || ""
                                  }
                                  onChange={(e) =>
                                    handleInputChange(
                                      `${value.category.key}_${benefit.key}_${
                                        index + 1
                                      }` + "_discountRate",
                                      e.target.value
                                    )
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
                                  fullWidth
                                  size="small"
                                  type="number"
                                />
                              </Tooltip>
                            </Grid>

                            {/* Total Benefits input */}
                            <Grid
                              item
                              key={`${index}_totalBenefits_grid`}
                              xs={12}
                              sm={3}
                              md={2}
                            >
                              <Tooltip title="Total Benefits" arrow>
                                <TextField
                                  key={`${index}_totalBenefits`}
                                  label="Total Benefits"
                                  disabled
                                  sx={{
                                    "& .MuiInputLabel-root": {
                                      fontSize: "14px",
                                    },
                                  }}
                                  value={
                                    answers.answer[
                                      `${value.category.key}_${benefit.key}_${
                                        index + 1
                                      }` + "_durationMonth"
                                    ] &&
                                    answers.answer[
                                      `${value.category.key}_${benefit.key}_${
                                        index + 1
                                      }` + "_discountRate"
                                    ] &&
                                    answers.answer[
                                      `${value.category.key}_${benefit.key}_${
                                        index + 1
                                      }` + "_economic_value"
                                    ]
                                      ? getTotalCostBenefit(
                                          answers.answer[
                                            `${value.category.key}_${
                                              benefit.key
                                            }_${index + 1}` + "_economic_value"
                                          ],
                                          answers.answer[
                                            `${value.category.key}_${
                                              benefit.key
                                            }_${index + 1}` + "_discountRate"
                                          ],
                                          answers.answer[
                                            `${value.category.key}_${
                                              benefit.key
                                            }_${index + 1}` + "_durationMonth"
                                          ]
                                        )
                                      : ""
                                  }
                                  fullWidth
                                  size="small"
                                  type="number"
                                />
                              </Tooltip>
                            </Grid>
                          </React.Fragment>
                        ))}
                      </Grid>
                    )}
                  </Grid>

                  {answers.answer[`${benefit.key}_identification`] ===
                    "Identified as a Benefit" && (
                    <Grid container spacing={1} pl={2} mt={0.2}>
                      {benefit.additionalIndicators
                        .filter((indicator) => indicator.isVisible)
                        .map((indicator, idx) => {
                          const isEditing =
                            editingField ===
                            `${categoryIndex}_${benefitIndex}_${idx}`;
                          return (
                            <React.Fragment>
                              <Grid
                                item
                                key={`${indicator.indicatorIndex}_grid_${indicator.text}`}
                                xs={12}
                              >
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                  }}
                                >
                                  {isEditing ? (
                                    <>
                                      <TextField
                                        size="small"
                                        value={editText}
                                        onChange={(e) =>
                                          setEditText(e.target.value)
                                        }
                                        sx={{ mr: 1 }}
                                      />
                                      <IconButton
                                        size="small"
                                        onClick={() =>
                                          handleSaveEdit(
                                            categoryIndex,
                                            benefitIndex,
                                            idx
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
                                        }}
                                        key={`${indicator.indicatorIndex + 1}.${
                                          indicator.text
                                        }`}
                                      >
                                        {value.category.benefits.length + idx}.{" "}
                                        {""}
                                        {indicator.text}
                                      </Typography>
                                      <IconButton
                                        size="small"
                                        onClick={() =>
                                          handleStartEdit(
                                            categoryIndex,
                                            benefitIndex,
                                            idx
                                          )
                                        }
                                      >
                                        <EditIcon />
                                      </IconButton>
                                      <IconButton
                                        size="small"
                                        onClick={() =>
                                          hideField(
                                            categoryIndex,
                                            benefitIndex,
                                            indicator.indicatorIndex
                                          )
                                        }
                                      >
                                        <DeleteIcon />
                                      </IconButton>
                                    </>
                                  )}
                                </Box>
                              </Grid>
                              <Grid
                                item
                                key={`${indicator.indicatorIndex}_ecosystem_grid`}
                                xs={12}
                                sm={3}
                                md={2}
                              >
                                <Tooltip
                                  title="Ecosystem Valuation Method"
                                  placement="right"
                                  arrow
                                >
                                  <TextField
                                    select
                                    key={`${indicator.indicatorIndex}_ecosystem${indicator.text}`}
                                    label="Ecosystem Valuation Method"
                                    sx={{
                                      "& .MuiInputBase-input": {
                                        fontSize: "14px",
                                      },
                                      "& .MuiInputLabel-root": {
                                        fontSize: "14px",
                                      },
                                    }}
                                    value={
                                      answers.answer[
                                        `${value.category.key}_${benefit.key}_${indicator.indicatorIndex}` +
                                          "_ecosystem"
                                      ] || ""
                                    }
                                    onChange={(e) =>
                                      handleInputChange(
                                        `${value.category.key}_${benefit.key}_${indicator.indicatorIndex}` +
                                          "_ecosystem",
                                        e.target.value
                                      )
                                    }
                                    fullWidth
                                    size="small"
                                  >
                                    <MenuItem
                                      value=""
                                      sx={{ fontSize: "14px !important" }}
                                    >
                                      Select an option
                                    </MenuItem>
                                    {ecosystem_valuation_method.map(
                                      (method) => (
                                        <MenuItem
                                          key={method}
                                          value={method}
                                          sx={{ fontSize: "14px !important" }}
                                        >
                                          {method}
                                        </MenuItem>
                                      )
                                    )}
                                  </TextField>
                                </Tooltip>
                              </Grid>
                              <Grid
                                item
                                key={`${indicator.indicatorIndex}_economic_value_grid`}
                                xs={12}
                                sm={3}
                                md={2}
                              >
                                <Tooltip
                                  title="Economic Value"
                                  placement="right"
                                  arrow
                                >
                                  <TextField
                                    label="Economic Value"
                                    sx={{
                                      "& .MuiInputLabel-root": {
                                        fontSize: "14px",
                                      },
                                    }}
                                    value={
                                      answers.answer[
                                        `${value.category.key}_${benefit.key}_${indicator.indicatorIndex}` +
                                          "_economic_value"
                                      ] || ""
                                    }
                                    onChange={(e) =>
                                      handleInputChange(
                                        `${value.category.key}_${benefit.key}_${indicator.indicatorIndex}` +
                                          "_economic_value",
                                        e.target.value
                                      )
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
                                    fullWidth
                                    size="small"
                                    type="number"
                                  />
                                </Tooltip>
                              </Grid>
                              <Grid
                                item
                                key={`${indicator.indicatorIndex}_durationMonth_grid`}
                                xs={12}
                                sm={3}
                                md={2}
                              >
                                <Tooltip title="Duration (in months)" arrow>
                                  <TextField
                                    label="Duration (in months)"
                                    sx={{
                                      "& .MuiInputLabel-root": {
                                        fontSize: "14px",
                                      },
                                    }}
                                    value={
                                      answers.answer[
                                        `${value.category.key}_${benefit.key}_${indicator.indicatorIndex}` +
                                          "_durationMonth"
                                      ] || ""
                                    }
                                    onChange={(e) =>
                                      handleInputChange(
                                        `${value.category.key}_${benefit.key}_${indicator.indicatorIndex}` +
                                          "_durationMonth",
                                        e.target.value
                                      )
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
                                    fullWidth
                                    size="small"
                                    type="number"
                                  />
                                </Tooltip>
                              </Grid>
                              <Grid
                                item
                                key={`${indicator.indicatorIndex}_durationYear_grid`}
                                xs={12}
                                sm={3}
                                md={2}
                              >
                                <Tooltip title="Duration (in years)" arrow>
                                  <TextField
                                    key={`${indicator.indicatorIndex}_durationYear`}
                                    label="Duration (in years)"
                                    disabled
                                    sx={{
                                      "& .MuiInputLabel-root": {
                                        fontSize: "14px",
                                      },
                                    }}
                                    value={
                                      answers.answer[
                                        `${value.category.key}_${benefit.key}_${indicator.indicatorIndex}` +
                                          "_durationMonth"
                                      ]
                                        ? convertToYearBenefit(
                                            answers.answer[
                                              `${value.category.key}_${benefit.key}_${indicator.indicatorIndex}` +
                                                "_durationMonth"
                                            ]
                                          )
                                        : ""
                                    }
                                    fullWidth
                                    size="small"
                                    type="number"
                                  />
                                </Tooltip>
                              </Grid>

                              <Grid
                                item
                                key={`${indicator.indicatorIndex}_discountRate_grid`}
                                xs={12}
                                sm={3}
                                md={2}
                              >
                                <Tooltip title="Discount Rate (%)" arrow>
                                  <TextField
                                    key={`${indicator.indicatorIndex}_discountRate`}
                                    label="Discount Rate (%)"
                                    sx={{
                                      "& .MuiInputLabel-root": {
                                        fontSize: "14px",
                                      },
                                    }}
                                    value={
                                      answers.answer[
                                        `${value.category.key}_${benefit.key}_${indicator.indicatorIndex}` +
                                          "_discountRate"
                                      ] || ""
                                    }
                                    onChange={(e) =>
                                      handleInputChange(
                                        `${value.category.key}_${benefit.key}_${indicator.indicatorIndex}` +
                                          "_discountRate",
                                        e.target.value
                                      )
                                    }
                                    fullWidth
                                    size="small"
                                  />
                                </Tooltip>
                              </Grid>

                              <Grid
                                item
                                key={`${indicator.indicatorIndex}_totalBenefits_grid`}
                                xs={12}
                                sm={3}
                                md={2}
                              >
                                <Tooltip title="Total Benefits" arrow>
                                  <TextField
                                    key={`${indicator.indicatorIndex}_totalBenefits`}
                                    label="Total Benefits"
                                    disabled
                                    sx={{
                                      "& .MuiInputLabel-root": {
                                        fontSize: "14px",
                                      },
                                    }}
                                    value={
                                      answers.answer[
                                        `${value.category.key}_${benefit.key}_${indicator.indicatorIndex}` +
                                          "_durationMonth"
                                      ] &&
                                      answers.answer[
                                        `${value.category.key}_${benefit.key}_${indicator.indicatorIndex}` +
                                          "_discountRate"
                                      ] &&
                                      answers.answer[
                                        `${value.category.key}_${benefit.key}_${indicator.indicatorIndex}` +
                                          "_economic_value"
                                      ]
                                        ? getTotalCostBenefit(
                                            answers.answer[
                                              `${value.category.key}_${benefit.key}_${indicator.indicatorIndex}` +
                                                "_economic_value"
                                            ],
                                            answers.answer[
                                              `${value.category.key}_${benefit.key}_${indicator.indicatorIndex}` +
                                                "_discountRate"
                                            ],
                                            answers.answer[
                                              `${value.category.key}_${benefit.key}_${indicator.indicatorIndex}` +
                                                "_durationMonth"
                                            ]
                                          )
                                        : ""
                                    }
                                    fullWidth
                                    size="small"
                                    type="number"
                                  />
                                </Tooltip>
                              </Grid>
                            </React.Fragment>
                          );
                        })}
                    </Grid>
                  )}

                  {answers.answer[
                    `${benefit.key
                      .toLowerCase()
                      .replace(/\s+/g, "_")}_identification`
                  ] === "Identified as a Benefit" &&
                    renderAddButton(categoryIndex, benefitIndex)}
                </Box>
              ))}
            </AccordionDetails>
          )}
        </Accordion>
      ))}
    </React.Fragment>
  );
};

export default Benefits;
