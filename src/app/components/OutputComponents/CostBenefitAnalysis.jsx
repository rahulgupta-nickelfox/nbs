"use client";
import { getTotalCost } from "@/app/utils/helper";
import { useTheme } from "@emotion/react";
import { Box, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { Cell, Legend, Pie, PieChart } from "recharts";

const CostBenefitAnalysis = ({ answer, setTotalCost }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const capitalExpenditureTotal = (answer) => {
    let grandTotal = 0;
    for (let i = 1; i <= 8; i++) {
      const totalCostAvailable = parseFloat(
        answer?.answer?.[`total_cost_available_1_${i}`]
      );

      if (!isNaN(totalCostAvailable) && totalCostAvailable > 0) {
        grandTotal += Number(totalCostAvailable);
      } else {
        const valuePerYear = parseFloat(
          answer?.answer?.[`value_per_year_1_${i}`]
        );
        const discountRate = parseFloat(
          answer?.answer?.[`discount_rate_considered_1_${i}`]
        );
        const durationInMonths = parseFloat(
          answer?.answer?.[`duration_in_months_1_${i}`]
        );
        const cost = getTotalCost(valuePerYear, discountRate, durationInMonths);
        if (cost !== "NaN" && cost !== NaN) {
          grandTotal += Number(cost);
        }
      }
    }
    return parseFloat(grandTotal).toFixed(2);
  };

  const operationalExpenditureTotal = (answer) => {
    let grandTotal = 0;
    for (let i = 1; i <= 8; i++) {
      const totalCostAvailable = parseFloat(
        answer?.answer?.[`total_cost_available_2_${i}`]
      );

      if (!isNaN(totalCostAvailable) && totalCostAvailable > 0) {
        grandTotal += Number(totalCostAvailable);
      } else {
        const valuePerYear = parseFloat(
          answer?.answer?.[`value_per_year_2_${i}`]
        );
        const discountRate = parseFloat(
          answer?.answer?.[`discount_rate_considered_2_${i}`]
        );
        const durationInMonths = parseFloat(
          answer?.answer?.[`duration_in_months_2_${i}`]
        );
        const cost = getTotalCost(valuePerYear, discountRate, durationInMonths);
        if (cost !== "NaN" && cost !== NaN) {
          grandTotal += Number(cost);
        }
      }
    }
    return parseFloat(grandTotal).toFixed(2);
  };

  const transactionalCostTotal = (answer) => {
    let grandTotal = 0;
    for (let i = 1; i <= 6; i++) {
      const totalCostAvailable = parseFloat(
        answer?.answer?.[`total_cost_available_3_${i}`]
      );

      if (!isNaN(totalCostAvailable) && totalCostAvailable > 0) {
        grandTotal += Number(totalCostAvailable);
      } else {
        const valuePerYear = parseFloat(
          answer?.answer?.[`value_per_year_3_${i}`]
        );
        const discountRate = parseFloat(
          answer?.answer?.[`discount_rate_considered_3_${i}`]
        );
        const durationInMonths = parseFloat(
          answer?.answer?.[`duration_in_months_3_${i}`]
        );
        const cost = getTotalCost(valuePerYear, discountRate, durationInMonths);
        if (cost !== "NaN" && cost !== NaN) {
          grandTotal += Number(cost);
        }
      }
    }
    return parseFloat(grandTotal).toFixed(2);
  };

  const costsDueToDisservicesTotal = (answer) => {
    let grandTotal = 0;
    for (let i = 1; i <= 6; i++) {
      const totalCostAvailable = parseFloat(
        answer?.answer?.[`total_cost_available_4_${i}`]
      );

      if (!isNaN(totalCostAvailable) && totalCostAvailable > 0) {
        grandTotal += Number(totalCostAvailable);
      } else {
        const valuePerYear = parseFloat(
          answer?.answer?.[`value_per_year_4_${i}`]
        );
        const discountRate = parseFloat(
          answer?.answer?.[`discount_rate_considered_4_${i}`]
        );
        const durationInMonths = parseFloat(
          answer?.answer?.[`duration_in_months_4_${i}`]
        );
        const cost = getTotalCost(valuePerYear, discountRate, durationInMonths);
        if (cost !== "NaN" && cost !== NaN) {
          grandTotal += Number(cost);
        }
      }
    }
    return parseFloat(grandTotal).toFixed(2);
  };

  const totalCosts = (answer) => {
    const total = (
      parseFloat(capitalExpenditureTotal(answer)) +
      parseFloat(operationalExpenditureTotal(answer)) +
      parseFloat(transactionalCostTotal(answer)) +
      parseFloat(costsDueToDisservicesTotal(answer))
    ).toFixed(2);

    setTotalCost(total);
    return total;
  };

  const data = [
    {
      name: "Capital Expenditure",
      value: Number(capitalExpenditureTotal(answer)),
    },
    {
      name: "Operational Expenditure",
      value: Number(operationalExpenditureTotal(answer)),
    },
    {
      name: "Transactional Cost",
      value: Number(transactionalCostTotal(answer)),
    },
    {
      name: "Costs due to Disservices",
      value: Number(costsDueToDisservicesTotal(answer)),
    },
  ];
  const COLORS = [
    theme.palette.chart.blue,
    theme.palette.chart.orange,
    theme.palette.chart.yellow,
    theme.palette.chart.green,
  ];

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Grid container spacing={{ xs: 0, md: 2 }}>
        <Grid item xs={12} p={2} bgcolor="#C3E6F5">
          <Typography variant="outputBody1" mt={1}>
            Cost-Benefit Analysis
          </Typography>
        </Grid>
        <Grid item xs={12} mt={{ xs: 1, sm: 3 }} pl={{ xs: 0.5, md: 0 }}>
          <Typography variant="outputBody1">Costs</Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>

        <Grid
          item
          xs={12}
          mt={2}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexDirection={{ xs: "column", md: "row" }}
          gap={2}
        >
          <Grid item xs={12} md={6}>
            <Box border="0.5px solid #B9B9B9" borderRadius={5} display={"flex"}>
              {data.some((item) => item.value > 0) ? (
                <PieChart width={600} height={250}>
                  <Pie
                    data={data}
                    cx={117.5}
                    cy={117.5}
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey={(value) => value.value}
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Legend
                    verticalAlign="middle"
                    align="right"
                    layout="vertical"
                    iconType="circle"
                    iconSize={20}
                    formatter={(value) => (
                      <Typography
                        variant="outputBody2"
                        sx={{
                          paddingLeft: "20px",
                          paddingBottom: "20px",
                          color: "#000",
                        }}
                      >
                        {value}
                      </Typography>
                    )}
                  />
                </PieChart>
              ) : (
                <Box
                  component={"div"}
                  width={isMobile ? 360 : 600}
                  height={isMobile ? 200 : 270}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Box
                    component="div"
                    borderRadius="50%"
                    width={isMobile ? 180 : 250}
                    height={isMobile ? 180 : 250}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    backgroundColor={theme.palette.chart.bgDark}
                  >
                    <Typography variant="body2" color="#fff" align="center">
                      No information on costs available
                    </Typography>
                  </Box>
                </Box>
              )}
            </Box>
          </Grid>
          {data.some((item) => item.value > 0) && (
            <Grid container border="2px solid #71C9EB" mr={{ xs: 0, sm: 3 }}>
              <Grid
                item
                xs={12}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Grid
                  item
                  xs={1.5}
                  pt={{ xs: 1.5, md: 0.5 }}
                  pb={{ xs: 1.5, md: 0.5 }}
                  pr={1}
                  borderRight="1px solid #71C9EB"
                  textAlign={"center"}
                >
                  <Typography variant="outputBodyBold">S.No.</Typography>
                </Grid>
                <Grid
                  item
                  xs={6.5}
                  pt={{ xs: 1.5, md: 0.5 }}
                  pb={{ xs: 1.5, md: 0.5 }}
                  pl={1}
                  borderRight={"1px solid #71C9EB"}
                >
                  <Typography variant="outputBodyBold">
                    Category of Costs
                  </Typography>
                </Grid>
                <Grid item xs={4} pl={1}>
                  <Typography variant="outputBodyBold">Costs</Typography>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Grid
                  item
                  xs={1.5}
                  pt={{ xs: 1.5, md: 0.5 }}
                  pb={{ xs: 1.5, md: 0.5 }}
                  borderTop={"1px solid #71C9EB"}
                  borderRight={"1px solid #71C9EB"}
                  textAlign={"center"}
                >
                  <Typography variant="outputBody2">1</Typography>
                </Grid>
                <Grid
                  item
                  xs={6.5}
                  pt={{ xs: 1.5, md: 0.5 }}
                  pb={{ xs: 1.5, md: 0.5 }}
                  pl={1}
                  borderTop={"1px solid #71C9EB"}
                  borderRight={"1px solid #71C9EB"}
                >
                  <Typography variant="outputBody2">
                    Capital Expenditure
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={4}
                  pl={1}
                  pt={{ xs: 1.5, md: 0.5 }}
                  pb={{ xs: 1.5, md: 0.5 }}
                  borderTop={"1px solid #71C9EB"}
                >
                  <Typography variant="outputBody2">
                    {capitalExpenditureTotal(answer)}
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                item
                xs={12}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Grid
                  item
                  xs={1.5}
                  pt={{ xs: 1.5, md: 0.5 }}
                  pb={{ xs: 1.5, md: 0.5 }}
                  borderTop={"1px solid #71C9EB"}
                  borderRight={"1px solid #71C9EB"}
                  textAlign={"center"}
                >
                  <Typography variant="outputBody2">2</Typography>
                </Grid>
                <Grid
                  item
                  xs={6.5}
                  pt={{ xs: 1.5, md: 0.5 }}
                  pb={{ xs: 1.5, md: 0.5 }}
                  pl={1}
                  borderTop={"1px solid #71C9EB"}
                  borderRight={"1px solid #71C9EB"}
                >
                  <Typography variant="outputBody2">
                    Operational Expenditure
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={4}
                  pl={1}
                  pt={{ xs: 1.5, md: 0.5 }}
                  pb={{ xs: 1.5, md: 0.5 }}
                  borderTop={"1px solid #71C9EB"}
                >
                  <Typography variant="outputBody2">
                    {operationalExpenditureTotal(answer)}
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                item
                xs={12}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Grid
                  item
                  xs={1.5}
                  pt={{ xs: 1.5, md: 0.5 }}
                  pb={{ xs: 1.5, md: 0.5 }}
                  borderTop={"1px solid #71C9EB"}
                  borderRight={"1px solid #71C9EB"}
                  textAlign={"center"}
                >
                  <Typography variant="outputBody2">3</Typography>
                </Grid>
                <Grid
                  item
                  xs={6.5}
                  pt={{ xs: 1.5, md: 0.5 }}
                  pb={{ xs: 1.5, md: 0.5 }}
                  pl={1}
                  borderTop={"1px solid #71C9EB"}
                  borderRight={"1px solid #71C9EB"}
                >
                  <Typography variant="outputBody2">
                    Transactional Costs
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={4}
                  pl={1}
                  pt={{ xs: 1.5, md: 0.5 }}
                  pb={{ xs: 1.5, md: 0.5 }}
                  borderTop={"1px solid #71C9EB"}
                >
                  <Typography variant="outputBody2">
                    {transactionalCostTotal(answer)}
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                item
                xs={12}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Grid
                  item
                  xs={1.5}
                  pt={{ xs: 1.5, md: 0.5 }}
                  pb={{ xs: 1.5, md: 0.5 }}
                  borderTop={"1px solid #71C9EB"}
                  borderRight={"1px solid #71C9EB"}
                  textAlign={"center"}
                >
                  <Typography variant="outputBody2">4</Typography>
                </Grid>
                <Grid
                  item
                  xs={6.5}
                  pt={{ xs: 1.5, md: 0.5 }}
                  pb={{ xs: 1.5, md: 0.5 }}
                  pl={1}
                  borderTop={"1px solid #71C9EB"}
                  borderRight={"1px solid #71C9EB"}
                >
                  <Typography variant="outputBody2">
                    Costs Due to Disservices
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={4}
                  pl={1}
                  pt={{ xs: 1.5, md: 0.5 }}
                  pb={{ xs: 1.5, md: 0.5 }}
                  borderTop={"1px solid #71C9EB"}
                >
                  <Typography variant="outputBody2">
                    {costsDueToDisservicesTotal(answer)}
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                item
                xs={12}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Grid
                  item
                  xs={1.5}
                  pt={{ xs: 1.5, md: 0.5 }}
                  pb={{ xs: 1.5, md: 0.5 }}
                  borderTop={"1px solid #71C9EB"}
                  borderRight={"1px solid #71C9EB"}
                >
                  <Typography variant="outputBody2">
                    <span style={{ color: "transparent" }}>5</span>{" "}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6.5}
                  pt={{ xs: 1.5, md: 0.5 }}
                  pb={{ xs: 1.5, md: 0.5 }}
                  pl={1}
                  borderTop={"1px solid #71C9EB"}
                  borderRight={"1px solid #71C9EB"}
                >
                  <Typography variant="outputBody2">Total Cost</Typography>
                </Grid>
                <Grid
                  item
                  xs={4}
                  pl={1}
                  pt={{ xs: 1.5, md: 0.5 }}
                  pb={{ xs: 1.5, md: 0.5 }}
                  borderTop={"1px solid #71C9EB"}
                >
                  <Typography variant="outputBody2">
                    {totalCosts(answer)}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CostBenefitAnalysis;
