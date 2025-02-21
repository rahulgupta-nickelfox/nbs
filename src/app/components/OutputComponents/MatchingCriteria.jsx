"use client";
import {
  getSeries,
  isCulturalData,
  isEconomicData,
  isEnvironmentalData,
  isLivelihoodData,
  isSocialData,
  isSpeciesData,
} from "@/app/utils/helper";
import { useTheme } from "@emotion/react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CommonTable from "./CommonTable";

const MatchingCriteria = ({ answer }) => {
  const [screenWidth, setScreenWidth] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    if (typeof window !== undefined && window) {
      setScreenWidth(window?.innerWidth);

      const handleResize = () => setScreenWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const isSmallScreen = screenWidth <= 800;

  const options = {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
    },
    colors: [theme.palette.chart.green, theme.palette.chart.orange],
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: {
      categories: [],
      max: 100,
      labels: {
        formatter: (val) => `${val}%`,
      },
    },
    yaxis: {
      title: {
        text: "",
      },
    },
    legend: {
      position: "bottom",
      horizontalAlign: "left",
      offsetX: 30,
      fontSize: "12px",
      customLegendItems: ["Positive", "Negative"],
      markers: {
        fillColors: [theme.palette.chart.green, theme.palette.chart.orange],
        shape: "circle",
        size: 4,
      },
    },
    tooltip: {
      y: {
        formatter: (val, { seriesIndex, dataPointIndex, w }) => {
          return w.config.series[seriesIndex].data[dataPointIndex].actual;
        },
      },
    },
  };

  return (
    answer?.answer?.response === "Yes" &&
    (isSocialData(answer) ||
      isEconomicData(answer) ||
      isCulturalData(answer) ||
      isEnvironmentalData(answer) ||
      isLivelihoodData(answer) ||
      isSpeciesData(answer)) && (
      <Box
        sx={{
          p: { xs: "0px 16px 16px 16px", md: "0px 120px" },
          overflow: "hidden",
          mt: 6,
        }}
      >
        <Grid
          container
          alignItems={"center"}
          borderRadius={"8px"}
          border="8px solid #C3E6F5"
        >
          <Grid
            item
            xs={12}
            lg={12}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            bgcolor="#C3E6F5"
            py={1}
          >
            <Grid item pt={2} xs={2.5} md={2} lg={2}>
              <Typography variant="outputBody1">Category</Typography>
            </Grid>
            <Grid item pt={2} xs={2.5} md={2.5} lg={2.5}>
              <Typography variant="outputBody1">Factor</Typography>
            </Grid>
            <Grid item pt={2} xs={3.5} md={4.5} lg={3}>
              <Typography variant="outputBody1">Type of Influence</Typography>
            </Grid>
            <Grid item pt={2} xs={2.5} md={2.5} lg={4.5}>
              <Typography variant="outputBody1">Nature of Influence</Typography>
            </Grid>
            <Grid item pt={2} xs={0} md={0} lg={1}>
              <Typography variant="outputBody1"></Typography>
            </Grid>
          </Grid>

          {/* Social Category */}
          {isSocialData(answer) && (
            <CommonTable
              categoryName="Social"
              answer={answer}
              options={options}
              getSeries={getSeries}
              isSmallScreen={isSmallScreen}
            />
          )}

          {/* Economic Category */}
          {isEconomicData(answer) && (
            <CommonTable
              categoryName="Economic"
              answer={answer}
              options={options}
              getSeries={getSeries}
              isSmallScreen={isSmallScreen}
            />
          )}

          {/* Cultural Category */}
          {isCulturalData(answer) && (
            <CommonTable
              categoryName="Cultural"
              answer={answer}
              options={options}
              getSeries={getSeries}
              isSmallScreen={isSmallScreen}
            />
          )}

          {/* Environmental Category */}
          {isEnvironmentalData(answer) && (
            <CommonTable
              categoryName="Environmental"
              answer={answer}
              options={options}
              getSeries={getSeries}
              isSmallScreen={isSmallScreen}
            />
          )}

          {/* Species Category */}
          {isSpeciesData(answer) && (
            <CommonTable
              categoryName="Species"
              answer={answer}
              options={options}
              getSeries={getSeries}
              isSmallScreen={isSmallScreen}
            />
          )}

          {/* Livelihood Category */}
          {isLivelihoodData(answer) && (
            <CommonTable
              categoryName="Livelihood"
              answer={answer}
              options={options}
              getSeries={getSeries}
              isSmallScreen={isSmallScreen}
            />
          )}
        </Grid>
      </Box>
    )
  );
};

export default MatchingCriteria;
