"use client";
import { getBenefit, getTotalCostBenefit } from "@/app/utils/helper";
import { useTheme } from "@emotion/react";
import {
  Box,
  Divider,
  Grid,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { Cell, Legend, Pie, PieChart } from "recharts";

const Benefits = ({ answer, setTotalBenefit }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const climateChangeMETotal = (answer) => {
    let grandTotal = 0;
    for (let i = 1; i <= 6; i++) {
      const economicValue = parseFloat(
        answer?.answer?.[`clmtchg_miteff_${i}_economic_value`]
      );
      const discountRate = parseFloat(
        answer?.answer?.[`clmtchg_miteff_${i}_discountRate`]
      );
      const durationInMonths = parseFloat(
        answer?.answer?.[`clmtchg_miteff_${i}_durationMonth`]
      );
      const cost = getTotalCostBenefit(
        economicValue,
        discountRate,
        durationInMonths
      );
      if (cost !== "NaN" && cost !== NaN) {
        grandTotal += Number(cost);
      }
    }
    return parseFloat(grandTotal).toFixed(2);
  };

  const climateChangeDRTotal = (answer) => {
    let grandTotal = 0;
    for (let i = 1; i <= 6; i++) {
      const economicValue = parseFloat(
        answer?.answer?.[`clmtchg_disres_${i}_economic_value`]
      );
      const discountRate = parseFloat(
        answer?.answer?.[`clmtchg_disres_${i}_discountRate`]
      );
      const durationInMonths = parseFloat(
        answer?.answer?.[`clmtchg_disres_${i}_durationMonth`]
      );
      const cost = getTotalCostBenefit(
        economicValue,
        discountRate,
        durationInMonths
      );
      if (cost !== "NaN" && cost !== NaN) {
        grandTotal += Number(cost);
      }
    }
    return parseFloat(grandTotal).toFixed(2);
  };

  const climateChangeTRTotal = (answer) => {
    let grandTotal = 0;
    for (let i = 1; i <= 6; i++) {
      const economicValue = parseFloat(
        answer?.answer?.[`clmtchg_tempreg_${i}_economic_value`]
      );
      const discountRate = parseFloat(
        answer?.answer?.[`clmtchg_tempreg_${i}_discountRate`]
      );
      const durationInMonths = parseFloat(
        answer?.answer?.[`clmtchg_tempreg_${i}_durationMonth`]
      );
      const cost = getTotalCostBenefit(
        economicValue,
        discountRate,
        durationInMonths
      );
      if (cost !== "NaN" && cost !== NaN) {
        grandTotal += Number(cost);
      }
    }
    return parseFloat(grandTotal).toFixed(2);
  };

  const climateChangeBPTotal = (answer) => {
    let grandTotal = 0;
    for (let i = 1; i <= 6; i++) {
      const economicValue = parseFloat(
        answer?.answer?.[`clmtchg_bftppl_${i}_economic_value`]
      );
      const discountRate = parseFloat(
        answer?.answer?.[`clmtchg_bftppl_${i}_discountRate`]
      );
      const durationInMonths = parseFloat(
        answer?.answer?.[`clmtchg_bftppl_${i}_durationMonth`]
      );
      const cost = getTotalCostBenefit(
        economicValue,
        discountRate,
        durationInMonths
      );
      if (cost !== "NaN" && cost !== NaN) {
        grandTotal += Number(cost);
      }
    }
    return parseFloat(grandTotal).toFixed(2);
  };

  const climateChangeTotal = (answer) => {
    return parseFloat(
      parseFloat(climateChangeMETotal(answer)) +
        parseFloat(climateChangeDRTotal(answer)) +
        parseFloat(climateChangeTRTotal(answer)) +
        parseFloat(climateChangeBPTotal(answer))
    ).toFixed(2);
  };

  const waterQDRTotal = (answer) => {
    let grandTotal = 0;
    for (let i = 1; i <= 4; i++) {
      const economicValue = parseFloat(
        answer?.answer?.[`water_qlt_drinking_water_${i}_economic_value`]
      );
      const discountRate = parseFloat(
        answer?.answer?.[`water_qlt_drinking_water_${i}_discountRate`]
      );
      const durationInMonths = parseFloat(
        answer?.answer?.[`water_qlt_drinking_water_${i}_durationMonth`]
      );
      const cost = getTotalCostBenefit(
        economicValue,
        discountRate,
        durationInMonths
      );
      if (cost !== "NaN" && cost !== NaN) {
        grandTotal += Number(cost);
      }
    }
    return parseFloat(grandTotal).toFixed(2);
  };

  const waterIDRTotal = (answer) => {
    let grandTotal = 0;

    for (let i = 1; i <= 5; i++) {
      const economicValue = parseFloat(
        answer?.answer?.[`water_impvd_disres_${i}_economic_value`]
      );
      const discountRate = parseFloat(
        answer?.answer?.[`water_impvd_disres_${i}_discountRate`]
      );
      const durationInMonths = parseFloat(
        answer?.answer?.[`water_impvd_disres_${i}_durationMonth`]
      );
      const cost = getTotalCostBenefit(
        economicValue,
        discountRate,
        durationInMonths
      );
      if (cost !== "NaN" && cost !== NaN) {
        grandTotal += Number(cost);
      }
    }
    return parseFloat(grandTotal).toFixed(2);
  };

  const waterQGTotal = (answer) => {
    let grandTotal = 0;
    for (let i = 1; i <= 4; i++) {
      const economicValue = parseFloat(
        answer?.answer?.[`water_qltgrdwater_${i}_economic_value`]
      );
      const discountRate = parseFloat(
        answer?.answer?.[`water_qltgrdwater_${i}_discountRate`]
      );
      const durationInMonths = parseFloat(
        answer?.answer?.[`water_qltgrdwater_${i}_durationMonth`]
      );
      const cost = getTotalCostBenefit(
        economicValue,
        discountRate,
        durationInMonths
      );
      if (cost !== "NaN" && cost !== NaN) {
        grandTotal += Number(cost);
      }
    }
    return parseFloat(grandTotal).toFixed(2);
  };

  const waterWATotal = (answer) => {
    let grandTotal = 0;

    for (let i = 1; i <= 5; i++) {
      const economicValue = parseFloat(
        answer?.answer?.[`water_waterforagri_${i}_economic_value`]
      );
      const discountRate = parseFloat(
        answer?.answer?.[`water_waterforagri_${i}_discountRate`]
      );
      const durationInMonths = parseFloat(
        answer?.answer?.[`water_waterforagri_${i}_durationMonth`]
      );
      const cost = getTotalCostBenefit(
        economicValue,
        discountRate,
        durationInMonths
      );
      if (cost !== "NaN" && cost !== NaN) {
        grandTotal += Number(cost);
      }
    }
    return parseFloat(grandTotal).toFixed(2);
  };

  const waterTotal = (answer) => {
    return parseFloat(
      parseFloat(waterQDRTotal(answer)) +
        parseFloat(waterIDRTotal(answer)) +
        parseFloat(waterQGTotal(answer)) +
        parseFloat(waterWATotal(answer))
    ).toFixed(2);
  };

  const greenInfraTotal = (answer) => {
    let grandTotal = 0;

    for (let i = 1; i <= 6; i++) {
      const economicValue = parseFloat(
        answer?.answer?.[`green_infra_${i}_economic_value`]
      );
      const discountRate = parseFloat(
        answer?.answer?.[`green_infra_${i}_discountRate`]
      );
      const durationInMonths = parseFloat(
        answer?.answer?.[`green_infra_${i}_durationMonth`]
      );
      const cost = getTotalCostBenefit(
        economicValue,
        discountRate,
        durationInMonths
      );
      if (cost !== "NaN" && cost !== NaN) {
        grandTotal += Number(cost);
      }
    }
    return parseFloat(grandTotal).toFixed(2);
  };

  const greenBCTotal = (answer) => {
    let grandTotal = 0;

    for (let i = 1; i <= 7; i++) {
      const economicValue = parseFloat(
        answer?.answer?.[`green_bftclmtenv_${i}_economic_value`]
      );
      const discountRate = parseFloat(
        answer?.answer?.[`green_bftclmtenv_${i}_discountRate`]
      );
      const durationInMonths = parseFloat(
        answer?.answer?.[`green_bftclmtenv_${i}_durationMonth`]
      );
      const cost = getTotalCostBenefit(
        economicValue,
        discountRate,
        durationInMonths
      );
      if (cost !== "NaN" && cost !== NaN) {
        grandTotal += Number(cost);
      }
    }
    return parseFloat(grandTotal).toFixed(2);
  };

  const greenBPTotal = (answer) => {
    let grandTotal = 0;

    for (let i = 1; i <= 6; i++) {
      const economicValue = parseFloat(
        answer?.answer?.[`green_bft2ppl_${i}_economic_value`]
      );
      const discountRate = parseFloat(
        answer?.answer?.[`green_bft2ppl_${i}_discountRate`]
      );
      const durationInMonths = parseFloat(
        answer?.answer?.[`green_bft2ppl_${i}_durationMonth`]
      );
      const cost = getTotalCostBenefit(
        economicValue,
        discountRate,
        durationInMonths
      );
      if (cost !== "NaN" && cost !== NaN) {
        grandTotal += Number(cost);
      }
    }
    return parseFloat(grandTotal).toFixed(2);
  };

  const greenTotal = (answer) => {
    return (
      parseFloat(greenInfraTotal(answer)) +
      parseFloat(greenBCTotal(answer)) +
      parseFloat(greenBPTotal(answer))
    ).toFixed(2);
  };

  const airRP = (answer) => {
    let grandTotal = 0;

    for (let i = 1; i <= 6; i++) {
      const economicValue = parseFloat(
        answer?.answer?.[`airqlt_redpoll_${i}_economic_value`]
      );
      const discountRate = parseFloat(
        answer?.answer?.[`airqlt_redpoll_${i}_discountRate`]
      );
      const durationInMonths = parseFloat(
        answer?.answer?.[`airqlt_redpoll_${i}_durationMonth`]
      );
      const cost = getTotalCostBenefit(
        economicValue,
        discountRate,
        durationInMonths
      );
      if (cost !== "NaN" && cost !== NaN) {
        grandTotal += Number(cost);
      }
    }
    return parseFloat(grandTotal).toFixed(2);
  };

  const airRE = (answer) => {
    let grandTotal = 0;
    for (let i = 1; i <= 4; i++) {
      const economicValue = parseFloat(
        answer?.answer?.[`airqlt_redemi_${i}_economic_value`]
      );
      const discountRate = parseFloat(
        answer?.answer?.[`airqlt_redemi_${i}_discountRate`]
      );
      const durationInMonths = parseFloat(
        answer?.answer?.[`airqlt_redemi_${i}_durationMonth`]
      );
      const cost = getTotalCostBenefit(
        economicValue,
        discountRate,
        durationInMonths
      );
      if (cost !== "NaN" && cost !== NaN) {
        grandTotal += Number(cost);
      }
    }
    return parseFloat(grandTotal).toFixed(2);
  };

  const airBP = (answer) => {
    let grandTotal = 0;

    for (let i = 1; i <= 7; i++) {
      const economicValue = parseFloat(
        answer?.answer?.[`airqlt_bft3ppl_${i}_economic_value`]
      );
      const discountRate = parseFloat(
        answer?.answer?.[`airqlt_bft3ppl_${i}_discountRate`]
      );
      const durationInMonths = parseFloat(
        answer?.answer?.[`airqlt_bft3ppl_${i}_durationMonth`]
      );
      const cost = getTotalCostBenefit(
        economicValue,
        discountRate,
        durationInMonths
      );
      if (cost !== "NaN" && cost !== NaN) {
        grandTotal += Number(cost);
      }
    }
    return parseFloat(grandTotal).toFixed(2);
  };

  const airTotal = (answer) => {
    return (
      parseFloat(airRP(answer)) +
      parseFloat(airRE(answer)) +
      parseFloat(airBP(answer))
    ).toFixed(2);
  };

  const publicPHITotal = (answer) => {
    let grandTotal = 0;

    for (let i = 1; i <= 6; i++) {
      const economicValue = parseFloat(
        answer?.answer?.[`phealth_poshlthimp_${i}_economic_value`]
      );
      const discountRate = parseFloat(
        answer?.answer?.[`phealth_poshlthimp_${i}_discountRate`]
      );
      const durationInMonths = parseFloat(
        answer?.answer?.[`phealth_poshlthimp_${i}_durationMonth`]
      );
      const cost = getTotalCostBenefit(
        economicValue,
        discountRate,
        durationInMonths
      );
      if (cost !== "NaN" && cost !== NaN) {
        grandTotal += Number(cost);
      }
    }
    return parseFloat(grandTotal).toFixed(2);
  };

  const publicDETotal = (answer) => {
    let grandTotal = 0;

    for (let i = 1; i <= 7; i++) {
      const economicValue = parseFloat(
        answer?.answer?.[`phealth_detrieff_${i}_economic_value`]
      );
      const discountRate = parseFloat(
        answer?.answer?.[`phealth_detrieff_${i}_discountRate`]
      );
      const durationInMonths = parseFloat(
        answer?.answer?.[`phealth_detrieff_${i}_durationMonth`]
      );
      const cost = getTotalCostBenefit(
        economicValue,
        discountRate,
        durationInMonths
      );
      if (cost !== "NaN" && cost !== NaN) {
        grandTotal += Number(cost);
      }
    }
    return parseFloat(grandTotal).toFixed(2);
  };

  const publicIICTotal = (answer) => {
    let grandTotal = 0;

    for (let i = 1; i <= 5; i++) {
      const economicValue = parseFloat(
        answer?.answer?.[`phealth_improvimmchild_${i}_economic_value`]
      );
      const discountRate = parseFloat(
        answer?.answer?.[`phealth_improvimmchild_${i}_discountRate`]
      );
      const durationInMonths = parseFloat(
        answer?.answer?.[`phealth_improvimmchild_${i}_durationMonth`]
      );
      const cost = getTotalCostBenefit(
        economicValue,
        discountRate,
        durationInMonths
      );
      if (cost !== "NaN" && cost !== NaN) {
        grandTotal += Number(cost);
      }
    }
    return parseFloat(grandTotal).toFixed(2);
  };

  const publicRDTotal = (answer) => {
    let grandTotal = 0;

    for (let i = 1; i <= 5; i++) {
      const economicValue = parseFloat(
        answer?.answer?.[`phealth_reddis_${i}_economic_value`]
      );
      const discountRate = parseFloat(
        answer?.answer?.[`phealth_reddis_${i}_discountRate`]
      );
      const durationInMonths = parseFloat(
        answer?.answer?.[`phealth_reddis_${i}_durationMonth`]
      );
      const cost = getTotalCostBenefit(
        economicValue,
        discountRate,
        durationInMonths
      );
      if (cost !== "NaN" && cost !== NaN) {
        grandTotal += Number(cost);
      }
    }
    return parseFloat(grandTotal).toFixed(2);
  };

  const publicTotal = (answer) => {
    return (
      parseFloat(publicPHITotal(answer)) +
      parseFloat(publicDETotal(answer)) +
      parseFloat(publicIICTotal(answer)) +
      parseFloat(publicRDTotal(answer))
    ).toFixed(2);
  };

  const potentialEmpTotal = (answer) => {
    let grandTotal = 0;

    for (let i = 1; i <= 7; i++) {
      const economicValue = parseFloat(
        answer?.answer?.[`poteco_employment_${i}_economic_value`]
      );
      const discountRate = parseFloat(
        answer?.answer?.[`poteco_employment_${i}_discountRate`]
      );
      const durationInMonths = parseFloat(
        answer?.answer?.[`poteco_employment_${i}_durationMonth`]
      );
      const cost = getTotalCostBenefit(
        economicValue,
        discountRate,
        durationInMonths
      );
      if (cost !== "NaN" && cost !== NaN) {
        grandTotal += Number(cost);
      }
    }
    return parseFloat(grandTotal).toFixed(2);
  };

  const potentialIETotal = (answer) => {
    let grandTotal = 0;

    for (let i = 1; i <= 8; i++) {
      const economicValue = parseFloat(
        answer?.answer?.[`poteco_improvineco_${i}_economic_value`]
      );
      const discountRate = parseFloat(
        answer?.answer?.[`poteco_improvineco_${i}_discountRate`]
      );
      const durationInMonths = parseFloat(
        answer?.answer?.[`poteco_improvineco_${i}_durationMonth`]
      );
      const cost = getTotalCostBenefit(
        economicValue,
        discountRate,
        durationInMonths
      );
      if (cost !== "NaN" && cost !== NaN) {
        grandTotal += Number(cost);
      }
    }
    return parseFloat(grandTotal).toFixed(2);
  };

  const potentialIEGTotal = (answer) => {
    let grandTotal = 0;

    for (let i = 1; i <= 7; i++) {
      const economicValue = parseFloat(
        answer?.answer?.[`poteco_indvecogrowth_${i}_economic_value`]
      );
      const discountRate = parseFloat(
        answer?.answer?.[`poteco_indvecogrowth_${i}_discountRate`]
      );
      const durationInMonths = parseFloat(
        answer?.answer?.[`poteco_indvecogrowth_${i}_durationMonth`]
      );
      const cost = getTotalCostBenefit(
        economicValue,
        discountRate,
        durationInMonths
      );
      if (cost !== "NaN" && cost !== NaN) {
        grandTotal += Number(cost);
      }
    }
    return parseFloat(grandTotal).toFixed(2);
  };

  const potentialTotal = (answer) => {
    return (
      parseFloat(potentialEmpTotal(answer)) +
      parseFloat(potentialIETotal(answer)) +
      parseFloat(potentialIEGTotal(answer))
    ).toFixed(2);
  };

  const benefitTotal = (answer) => {
    const total = (
      parseFloat(climateChangeTotal(answer)) +
      parseFloat(waterTotal(answer)) +
      parseFloat(greenTotal(answer)) +
      parseFloat(airTotal(answer)) +
      parseFloat(publicTotal(answer)) +
      parseFloat(potentialTotal(answer))
    ).toFixed(2);

    setTotalBenefit(total);
    return total;
  };

  const data = [
    {
      name: "Climate Change",
      value: Number(climateChangeTotal(answer)),
    },
    {
      name: "Water",
      value: Number(waterTotal(answer)),
    },
    {
      name: "Green Space Management",
      value: Number(greenTotal(answer)),
    },
    {
      name: "Air Quality",
      value: Number(airTotal(answer)),
    },
    {
      name: "Public Health and Wellbeing",
      value: Number(publicTotal(answer)),
    },
    {
      name: (
        <>
          Potential Economic Opportunities <br /> and Green Jobs
        </>
      ),
      value: Number(potentialTotal(answer)),
    },
  ];

  const COLORS = [
    theme.palette.chart.blue,
    theme.palette.chart.orange,
    theme.palette.chart.yellow,
    theme.palette.chart.green,
    theme.palette.chart.gray1,
    theme.palette.chart.gray2,
  ];

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Grid container spacing={{ xs: 0.5, md: 3 }}>
        <Grid item xs={12} mt={5}>
          <Typography variant="outputBody1">Benefits</Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          mt={3}
          display={"flex"}
          justifyContent={isMobile ? "start" : "space-between"}
          alignSelf={"center"}
          gap={isMobile ? 1 : 0}
        >
          <Typography variant="outputBody2">
            Total Number of Benefits
          </Typography>
          <Typography variant="outputBody2">{getBenefit(answer)}</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          mt="10px"
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
                    dataKey="value"
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
                  height={isMobile ? 240 : 320}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Box
                    component="div"
                    borderRadius="50%"
                    width={isMobile ? 200 : 300}
                    height={isMobile ? 200 : 300}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    backgroundColor={theme.palette.chart.bgDark}
                  >
                    <Typography variant="body2" color="#fff" align="center">
                      No information on benefits available
                    </Typography>
                  </Box>
                </Box>
              )}
            </Box>
          </Grid>
          {data.some((item) => item.value > 0) && (
            <Grid container border={"2px solid #71C9EB"} mr={{ xs: 0, sm: 3 }}>
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
                  borderRight={"1px solid #71C9EB"}
                  textAlign={"center"}
                >
                  <Typography variant="outputBodyBold">S.No.</Typography>
                </Grid>
                <Grid
                  item
                  xs={8}
                  pt={{ xs: 1.5, md: 0.5 }}
                  pb={{ xs: 1.5, md: 0.5 }}
                  pl={1}
                  borderRight={"1px solid #71C9EB"}
                >
                  <Typography variant="outputBodyBold">
                    Category of Benefits
                  </Typography>
                </Grid>
                <Grid item xs={2.5} pl={1}>
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
                  borderRight={"1px solid #71C9EB"}
                  borderTop={"1px solid #71C9EB"}
                  textAlign={"center"}
                >
                  <Typography variant="outputBody2">1</Typography>
                </Grid>
                <Grid
                  item
                  xs={8}
                  pt={{ xs: 1.5, md: 0.5 }}
                  pb={{ xs: 1.5, md: 0.5 }}
                  pl={1}
                  borderRight={"1px solid #71C9EB"}
                  borderTop={"1px solid #71C9EB"}
                >
                  <Typography variant="outputBody2">Climate Change</Typography>
                </Grid>
                <Grid
                  item
                  xs={2.5}
                  pl={1}
                  pt={{ xs: 1.5, md: 0.5 }}
                  pb={{ xs: 1.5, md: 0.5 }}
                  borderTop={"1px solid #71C9EB"}
                >
                  <Typography variant="outputBody2">
                    {climateChangeTotal(answer)}
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
                  borderRight={"1px solid #71C9EB"}
                  borderTop={"1px solid #71C9EB"}
                  textAlign={"center"}
                >
                  <Typography variant="outputBody2">2</Typography>
                </Grid>
                <Grid
                  item
                  xs={8}
                  pt={{ xs: 1.5, md: 0.5 }}
                  pb={{ xs: 1.5, md: 0.5 }}
                  pl={1}
                  borderRight={"1px solid #71C9EB"}
                  borderTop={"1px solid #71C9EB"}
                >
                  <Typography variant="outputBody2">Water</Typography>
                </Grid>
                <Grid
                  item
                  xs={2.5}
                  pl={1}
                  pt={{ xs: 1.5, md: 0.5 }}
                  pb={{ xs: 1.5, md: 0.5 }}
                  borderTop={"1px solid #71C9EB"}
                >
                  <Typography variant="outputBody2">
                    {waterTotal(answer)}
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
                  borderRight={"1px solid #71C9EB"}
                  borderTop={"1px solid #71C9EB"}
                  textAlign={"center"}
                >
                  <Typography variant="outputBody2">3</Typography>
                </Grid>
                <Grid
                  item
                  xs={8}
                  pt={{ xs: 1.5, md: 0.5 }}
                  pb={{ xs: 1.5, md: 0.5 }}
                  pl={1}
                  borderRight={"1px solid #71C9EB"}
                  borderTop={"1px solid #71C9EB"}
                >
                  <Typography variant="outputBody2">
                    Green Space Management
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={2.5}
                  pl={1}
                  pt={{ xs: 1.5, md: 0.5 }}
                  pb={{ xs: 1.5, md: 0.5 }}
                  borderTop={"1px solid #71C9EB"}
                >
                  <Typography variant="outputBody2">
                    {greenTotal(answer)}
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
                  borderRight={"1px solid #71C9EB"}
                  borderTop={"1px solid #71C9EB"}
                  textAlign={"center"}
                >
                  <Typography variant="outputBody2">4</Typography>
                </Grid>
                <Grid
                  item
                  xs={8}
                  pt={{ xs: 1.5, md: 0.5 }}
                  pb={{ xs: 1.5, md: 0.5 }}
                  pl={1}
                  borderRight={"1px solid #71C9EB"}
                  borderTop={"1px solid #71C9EB"}
                >
                  <Typography variant="outputBody2">Air Quality</Typography>
                </Grid>
                <Grid
                  item
                  xs={2.5}
                  pl={1}
                  pt={{ xs: 1.5, md: 0.5 }}
                  pb={{ xs: 1.5, md: 0.5 }}
                  borderTop={"1px solid #71C9EB"}
                >
                  <Typography variant="outputBody2">
                    {airTotal(answer)}
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
                  borderRight={"1px solid #71C9EB"}
                  borderTop={"1px solid #71C9EB"}
                  textAlign={"center"}
                >
                  <Typography variant="outputBody2">5</Typography>
                </Grid>
                <Grid
                  item
                  xs={8}
                  pt={{ xs: 1.5, md: 0.5 }}
                  pb={{ xs: 1.5, md: 0.5 }}
                  pl={1}
                  borderRight={"1px solid #71C9EB"}
                  borderTop={"1px solid #71C9EB"}
                >
                  <Typography variant="outputBody2">
                    Public Health and Wellbeing
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={2.5}
                  pl={1}
                  pt={{ xs: 1.5, md: 0.5 }}
                  pb={{ xs: 1.5, md: 0.5 }}
                  borderTop={"1px solid #71C9EB"}
                >
                  <Typography variant="outputBody2">
                    {publicTotal(answer)}
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
                  borderRight={"1px solid #71C9EB"}
                  borderTop={"1px solid #71C9EB"}
                  textAlign={"center"}
                >
                  <Typography variant="outputBody2">6</Typography>
                </Grid>
                <Grid
                  item
                  xs={8}
                  pt={{ xs: 1.5, md: 0.5 }}
                  pb={{ xs: 1.5, md: 0.5 }}
                  pl={1}
                  borderRight={"1px solid #71C9EB"}
                  borderTop={"1px solid #71C9EB"}
                >
                  <Typography variant="outputBody2">
                    Potential Economic Opportunities
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={2.5}
                  pl={1}
                  pt={{ xs: 1.5, md: 0.5 }}
                  pb={{ xs: 1.5, md: 0.5 }}
                  borderTop={"1px solid #71C9EB"}
                >
                  <Typography variant="outputBody2">
                    {potentialTotal(answer)}
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
                  borderRight={"1px solid #71C9EB"}
                  borderTop={"1px solid #71C9EB"}
                  textAlign={"center"}
                >
                  <Typography variant="outputBody2">
                    <span style={{ color: "transparent" }}>7</span>{" "}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={8}
                  pt={{ xs: 1.5, md: 0.5 }}
                  pb={{ xs: 1.5, md: 0.5 }}
                  pl={1}
                  borderRight={"1px solid #71C9EB"}
                  borderTop={"1px solid #71C9EB"}
                >
                  <Typography variant="outputBody2">Total Benefits</Typography>
                </Grid>
                <Grid
                  item
                  xs={2.5}
                  pl={1}
                  pt={{ xs: 1.5, md: 0.5 }}
                  pb={{ xs: 1.5, md: 0.5 }}
                  borderTop={"1px solid #71C9EB"}
                >
                  <Typography variant="outputBody2">
                    {benefitTotal(answer)}
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

export default Benefits;
