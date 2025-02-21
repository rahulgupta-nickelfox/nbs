import React, { useState } from "react";
import { Grid, Box, Typography, Divider } from "@mui/material";
import Image from "next/image";

const BenefitsSection = () => {
  const images = [
    {
      src: "/benefits-1.jpg",
      label: "Climate change mitigation and adaptation",
    },
    { src: "/benefits-2.jpg", label: "Air quality management" },
    { src: "/benefits-3.jpg", label: "Biodiversity conservation" },
    { src: "/benefits-4.jpg", label: "Water management" },
    { src: "/benefits-5.jpg", label: "Ecosystem sustainability" },
    { src: "/benefits-6.jpg", label: "Public health and well-being" },
    { src: "/benefits-7.jpg", label: "Economic opportunities and green jobs" },
  ];
  return (
    <Box
      sx={{
        p: { xs: "16px 46px 16px 16px", sm: "16px 56px 40px 30px" },
        overflow: "hidden",
      }}
    >
      <Grid item xs={12}>
        <Typography
          maxWidth={766}
          className="intro_heading"
          variant="outputBody3"
          sx={{
            color: "#0B0B0B",
            fontWeight: { xs: 700, sm: 500 },
            mb: 4,
            display: "block",
            textTransform: "none",
          }}
        >
          Benefits
        </Typography>
        <Grid item xs={12} md={5.5} sx={{ mb: 4 }}>
          <Typography variant="title2" color={"#1A1A1A"}>
            Benefits of Nature-based Solutions
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        display="flex"
        alignItems="center"
        justifyContent="center"
        spacing={4}
      >
        {images.map((image, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            xl={3}
            key={index}
            display="flex"
            justifyContent="center"
            alignItems={"center"}
          >
            <Box
              sx={{
                maxWidth: "350px",
                display: "flex",
                position: "relative",
              }}
            >
              <Image
                src={image.src}
                alt={image.label}
                height={200}
                width={280}
              />
              <Typography
                sx={{
                  fontSize: "15px !important",
                  fontWeight: 700,
                  letterSpacing: "-0.4px",
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "#fff",
                  padding: "25px 0px",
                  height: "78px",
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                {image.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BenefitsSection;
