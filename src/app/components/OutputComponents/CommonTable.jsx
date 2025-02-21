import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import Chart from "react-apexcharts";
import { buildDataItem, isPositive } from "@/app/utils/helper";
const answer = JSON.parse(sessionStorage.getItem("answers"));

const categories = {
  Social: [
    { prefix: "social_gender", label: "Gender" },
    { prefix: "social_caste", label: "Caste" },
    { prefix: "social_race", label: "Race" },
    {
      prefix: "social_social_additional_0",
      label: answer?.answer?.social_social_additional_0
        ? answer?.answer?.social_social_additional_0
        : "Other",
    },
    {
      prefix: "social_social_additional_1",
      label: answer?.answer?.social_social_additional_1
        ? answer?.answer?.social_social_additional_1
        : "Social Additional-1",
    },
    {
      prefix: "social_social_additional_2",
      label: answer?.answer?.social_social_additional_2
        ? answer?.answer?.social_social_additional_2
        : "Social Additional-2",
    },
    {
      prefix: "social_social_additional_3",
      label: answer?.answer?.social_social_additional_3
        ? answer?.answer?.social_social_additional_3
        : "Social Additional-3",
    },
  ],
  Economic: [
    { prefix: "economic_income", label: "Income Group" },
    { prefix: "economic_budget", label: "Budget of the Project" },
    { prefix: "economic_external", label: "External Investments" },
    {
      prefix: "economic_production",
      label: "Production of an Essential Commodity",
    },
    { prefix: "economic_access", label: "Access to Market" },
    {
      prefix: "economic_other",
      label: answer?.answer?.economic_other
        ? answer?.answer?.economic_other
        : "Other",
    },
    {
      prefix: "economic_economic_additional_1",
      label: answer?.answer?.economic_economic_additional_1
        ? answer?.answer?.economic_economic_additional_1
        : "Economic Additional-1",
    },
    {
      prefix: "economic_economic_additional_2",
      label: answer?.answer?.economic_economic_additional_2
        ? answer?.answer?.economic_economic_additional_2
        : "Economic Additional-2",
    },
    {
      prefix: "economic_economic_additional_3",
      label: answer?.answer?.economic_economic_additional_3
        ? answer?.answer?.economic_economic_additional_3
        : "Economic Additional-3",
    },
  ],
  Cultural: [
    { prefix: "cultural_religious", label: "Religious Importance" },
    { prefix: "cultural_cultural", label: "Cultural Relevance" },
    {
      prefix: "cultural_other",
      label: answer?.answer?.cultural_other
        ? answer?.answer?.cultural_other
        : "Other",
    },
    {
      prefix: "cultural_cultural_additional_1",
      label: answer?.answer?.cultural_cultural_additional_1
        ? answer?.answer?.cultural_cultural_additional_1
        : "Cultural Additional-1",
    },
    {
      prefix: "cultural_cultural_additional_2",
      label: answer?.answer?.cultural_cultural_additional_2
        ? answer?.answer?.cultural_cultural_additional_2
        : "Cultural Additional-2",
    },
    {
      prefix: "cultural_cultural_additional_3",
      label: answer?.answer?.cultural_cultural_additional_3
        ? answer?.answer?.cultural_cultural_additional_3
        : "Cultural Additional-3",
    },
  ],
  Environmental: [
    { prefix: "environmental_temperature", label: "Temperature" },
    { prefix: "environmental_rainfall", label: "Rainfall Variability" },
    {
      prefix: "environmental_other",
      label: answer?.answer?.environmental_other
        ? answer?.answer?.environmental_other
        : "Other",
    },
    {
      prefix: "environmental_environmental_additional_1",
      label: answer?.answer?.environmental_environmental_additional_1
        ? answer?.answer?.environmental_environmental_additional_1
        : "Environmental Additional-1",
    },
    {
      prefix: "environmental_environmental_additional_2",
      label: answer?.answer?.environmental_environmental_additional_2
        ? answer?.answer?.environmental_environmental_additional_2
        : "Environmental Additional-2",
    },
    {
      prefix: "environmental_environmental_additional_3",
      label: answer?.answer?.environmental_environmental_additional_3
        ? answer?.answer?.environmental_environmental_additional_3
        : "Environmental Additional-3",
    },
  ],
  Species: [
    { prefix: "species_invasive", label: "Invasive Species" },
    { prefix: "species_native", label: "Native Species" },
    {
      prefix: "species_other",
      label: answer?.answer?.species_other
        ? answer?.answer?.species_other
        : "Other",
    },
    {
      prefix: "species_species_additional_1",
      label: answer?.answer?.species_species_additional_1
        ? answer?.answer?.species_species_additional_1
        : "Species Additional-1",
    },
    {
      prefix: "species_species_additional_2",
      label: answer?.answer?.species_species_additional_2
        ? answer?.answer?.species_species_additional_2
        : "Species Additional-2",
    },
    {
      prefix: "species_species_additional_3",
      label: answer?.answer?.species_species_additional_3
        ? answer?.answer?.species_species_additional_3
        : "Species Additional-3",
    },
  ],
  Livelihood: [
    { prefix: "livelihood_overexploitation", label: "Over exploitation" },
    { prefix: "livelihood_incomeLivelihood", label: "Income from livelihood" },
    { prefix: "livelihood_landUse", label: "Land-Use Changes" },
    {
      prefix: "livelihood_other",
      label: answer?.answer?.livelihood_other
        ? answer?.answer?.livelihood_other
        : "Other",
    },
    {
      prefix: "livelihood_livelihood_additional_1",
      label: answer?.answer?.livelihood_livelihood_additional_1
        ? answer?.answer?.livelihood_livelihood_additional_1
        : "Livelihood Additional-1",
    },
    {
      prefix: "livelihood_livelihood_additional_2",
      label: answer?.answer?.livelihood_livelihood_additional_2
        ? answer?.answer?.livelihood_livelihood_additional_2
        : "Livelihood Additional-2",
    },
    {
      prefix: "livelihood_livelihood_additional_3",
      label: answer?.answer?.livelihood_livelihood_additional_3
        ? answer?.answer?.livelihood_livelihood_additional_3
        : "Livelihood Additional-3",
    },
  ],
};

const CommonTable = ({
  categoryName,
  answer,
  options,
  getSeries,
  isSmallScreen,
}) => {
  const keys = categories[categoryName];
  if (!keys || !answer) return null;

  const data = {
    data1: [
      buildDataItem(
        answer?.answer?.social_gender_positive,
        answer?.answer?.social_gender_negative
      ),
      buildDataItem(
        answer?.answer?.social_caste_positive,
        answer?.answer?.social_caste_negative
      ),
      buildDataItem(
        answer?.answer?.social_race_positive,
        answer?.answer?.social_race_negative
      ),
      buildDataItem(
        answer?.answer?.social_other_positive,
        answer?.answer?.social_other_negative
      ),
      buildDataItem(
        answer?.answer?.social_social_additional_1_positive,
        answer?.answer?.social_social_additional_1_negative
      ),
      buildDataItem(
        answer?.answer?.social_social_additional_2_positive,
        answer?.answer?.social_social_additional_2_negative
      ),
      buildDataItem(
        answer?.answer?.social_social_additional_3_positive,
        answer?.answer?.social_social_additional_3_negative
      ),
    ].filter((item) => Object.keys(item).length > 0),

    data2: [
      buildDataItem(
        answer?.answer?.economic_income_positive,
        answer?.answer?.economic_income_negative
      ),
      buildDataItem(
        answer?.answer?.economic_budget_positive,
        answer?.answer?.economic_budget_negative
      ),
      buildDataItem(
        answer?.answer?.economic_external_positive,
        answer?.answer?.economic_external_negative
      ),
      buildDataItem(
        answer?.answer?.economic_production_positive,
        answer?.answer?.economic_production_negative
      ),
      buildDataItem(
        answer?.answer?.economic_access_positive,
        answer?.answer?.economic_access_negative
      ),
      buildDataItem(
        answer?.answer?.economic_other_positive,
        answer?.answer?.economic_other_negative
      ),
      buildDataItem(
        answer?.answer?.economic_economic_additional_1_positive,
        answer?.answer?.economic_economic_additional_1_negative
      ),
      buildDataItem(
        answer?.answer?.economic_economic_additional_2_positive,
        answer?.answer?.economic_economic_additional_2_negative
      ),
      buildDataItem(
        answer?.answer?.economic_economic_additional_3_positive,
        answer?.answer?.economic_economic_additional_3_negative
      ),
    ].filter((item) => Object.keys(item).length > 0),

    data3: [
      buildDataItem(
        answer?.answer?.cultural_religious_positive,
        answer?.answer?.cultural_religious_negative
      ),
      buildDataItem(
        answer?.answer?.cultural_cultural_positive,
        answer?.answer?.cultural_cultural_negative
      ),
      buildDataItem(
        answer?.answer?.cultural_other_positive,
        answer?.answer?.cultural_other_negative
      ),
      buildDataItem(
        answer?.answer?.cultural_cultural_additional_1_positive,
        answer?.answer?.cultural_cultural_additional_1_negative
      ),
      buildDataItem(
        answer?.answer?.cultural_cultural_additional_2_positive,
        answer?.answer?.cultural_cultural_additional_2_negative
      ),
      buildDataItem(
        answer?.answer?.cultural_cultural_additional_3_positive,
        answer?.answer?.cultural_cultural_additional_3_negative
      ),
    ].filter((item) => Object.keys(item).length > 0),

    data4: [
      buildDataItem(
        answer?.answer?.environmental_temperature_positive,
        answer?.answer?.environmental_temperature_negative
      ),
      buildDataItem(
        answer?.answer?.environmental_rainfall_positive,
        answer?.answer?.environmental_rainfall_negative
      ),
      buildDataItem(
        answer?.answer?.environmental_other_positive,
        answer?.answer?.environmental_other_negative
      ),
      buildDataItem(
        answer?.answer?.environmental_environmental_additional_1_positive,
        answer?.answer?.environmental_environmental_additional_1_negative
      ),
      buildDataItem(
        answer?.answer?.environmental_environmental_additional_2_positive,
        answer?.answer?.environmental_environmental_additional_2_negative
      ),
      buildDataItem(
        answer?.answer?.environmental_environmental_additional_3_positive,
        answer?.answer?.environmental_environmental_additional_3_negative
      ),
    ].filter((item) => Object.keys(item).length > 0),

    data5: [
      buildDataItem(
        answer?.answer?.species_invasive_positive,
        answer?.answer?.species_invasive_negative
      ),
      buildDataItem(
        answer?.answer?.species_native_positive,
        answer?.answer?.species_native_negative
      ),
      buildDataItem(
        answer?.answer?.species_other_positive,
        answer?.answer?.species_other_negative
      ),
      buildDataItem(
        answer?.answer?.species_species_additional_1_positive,
        answer?.answer?.species_species_additional_1_negative
      ),
      buildDataItem(
        answer?.answer?.species_species_additional_2_positive,
        answer?.answer?.species_species_additional_2_negative
      ),
      buildDataItem(
        answer?.answer?.species_species_additional_3_positive,
        answer?.answer?.species_species_additional_3_negative
      ),
    ].filter((item) => Object.keys(item).length > 0),

    data6: [
      buildDataItem(
        answer?.answer?.livelihood_overexploitation_positive,
        answer?.answer?.livelihood_overexploitation_negative
      ),
      buildDataItem(
        answer?.answer?.livelihood_incomeLivelihood_positive,
        answer?.answer?.livelihood_incomeLivelihood_negative
      ),
      buildDataItem(
        answer?.answer?.livelihood_landUse_positive,
        answer?.answer?.livelihood_landUse_negative
      ),
      buildDataItem(
        answer?.answer?.livelihood_other_positive,
        answer?.answer?.livelihood_other_negative
      ),
      buildDataItem(
        answer?.answer?.livelihood_livelihood_additional_1_positive,
        answer?.answer?.livelihood_livelihood_additional_1_negative
      ),
      buildDataItem(
        answer?.answer?.livelihood_livelihood_additional_2_positive,
        answer?.answer?.livelihood_livelihood_additional_2_negative
      ),
      buildDataItem(
        answer?.answer?.livelihood_livelihood_additional_3_positive,
        answer?.answer?.livelihood_livelihood_additional_3_negative
      ),
    ].filter((item) => Object.keys(item).length > 0),
  };

  return (
    <>
      {/* Category Table */}
      <Grid item xs={12} lg={9}>
        <Grid container>
          <Grid
            item
            xs={2.5}
            md={2}
            lg={1.8}
            px={{ xs: 0.4, md: 0.6, lg: 1 }}
            py={1}
            borderTop={"1px solid #cdcdcd"}
            borderBottom={"1px solid #cdcdcd"}
          >
            <Typography variant="outputBody2">{categoryName}</Typography>
          </Grid>
          <Grid item xs={9.5} md={9.5}>
            <Grid container>
              {keys.map(({ prefix, label }) => {
                const influence = answer?.answer?.[`${prefix}_influence`];
                const positive = answer?.answer?.[`${prefix}_positive`];
                const negative = answer?.answer?.[`${prefix}_negative`];
                const consultation = answer?.answer?.[`${prefix}_consultation`];
                const { sign, color } = (() => {
                  if (!positive && !negative) {
                    if (consultation === "Positive influence") {
                      return { sign: "Positive", color: "#86BE40" };
                    } else if (consultation === "Negative influence") {
                      return { sign: "Negative", color: "#FF0000" };
                    } else {
                      return { sign: "", color: "#FFF" };
                    }
                  } else {
                    return isPositive(positive, negative);
                  }
                })();

                if (!influence && !sign) return null;

                return (
                  <Grid
                    item
                    xs={12}
                    display="flex"
                    key={prefix}
                    border={"1px solid #cdcdcd"}
                  >
                    <Grid
                      item
                      xs={3}
                      md={3}
                      p={{ xs: 0.4, md: 1 }}
                      borderRight={"1px solid #cdcdcd"}
                    >
                      <Typography variant="outputBody2">{label}</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={5}
                      md={6}
                      p={{ xs: 0.4, md: 1 }}
                      borderRight={"1px solid #cdcdcd"}
                    >
                      <Typography variant="outputBody2">{influence}</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      md={3}
                      p={{ xs: 0.4, md: 1 }}
                      textAlign="center"
                    >
                      <Typography variant="outputBody2" color={color}>
                        {sign}
                      </Typography>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Category Chart */}
      {answer?.answer?.response !== "No" && (
        <Grid item xs={12} lg={3}>
          <Box
            sx={{
              m: 1,
              p: 2,
              borderRadius: "5px",
              border: "2px solid #98E0FF",
            }}
          >
            <Typography variant="body3" sx={{ fontWeight: "bold", mb: 1 }}>
              Nature of Influence ({categoryName} category)
            </Typography>
            <Chart
              options={options}
              series={getSeries(
                data?.[
                  `data${
                    categoryName === "Social"
                      ? 1
                      : categoryName === "Economic"
                      ? 2
                      : categoryName === "Cultural"
                      ? 3
                      : categoryName === "Environmental"
                      ? 4
                      : categoryName === "Species"
                      ? 5
                      : categoryName === "Livelihood"
                      ? 6
                      : ""
                  }`
                ]
              )}
              type="bar"
              width="100%"
              height={isSmallScreen ? 160 : 180}
            />
          </Box>
        </Grid>
      )}
    </>
  );
};

export default CommonTable;
