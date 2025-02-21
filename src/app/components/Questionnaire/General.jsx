import React, { useState } from "react";
import { Box, FormGroup, TextField, Tooltip, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const General = ({ question, answers, setAnswers, setError, errors }) => {
  const handleInputChange = (key, value) => {
    setAnswers((prevAnswers) => ({
      answer: {
        ...prevAnswers.answer,
        [key]: value,
      },
    }));
    setError("");
  };

  return (
    <FormGroup>
      {question.fields.map((field) => (
        <Box
          key={field.name}
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
              {field.title}
              {field.required && <span>*</span>}
            </Typography>
            <Tooltip title={field.tooltip} arrow placement="right">
              <InfoOutlinedIcon
                fontSize="small"
                sx={{ color: "#585858", height: "16px", width: "16px" }}
              />
            </Tooltip>
          </Box>

          <TextField
            key={field.name}
            name={field.name}
            fullWidth
            value={answers.answer[field.name] || ""}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            required={field.required}
            multiline={field.multiline}
            rows={field.multiline ? 5 : 1}
            inputProps={{ maxLength: field.maxLength }}
            size="small"
            helperText={errors[field.name]}
            FormHelperTextProps={{
              sx: {
                color: "error.main",
                fontSize: "16px !important",
                fontWeight: 600,
                margin: "4px 0 0",
              },
            }}
          />
        </Box>
      ))}
    </FormGroup>
  );
};

export default General;
