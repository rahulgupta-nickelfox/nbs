import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Scope = ({ question, answers, setAnswers }) => {
  const [selectedValues, setSelectedValues] = useState({});
  const handleInputChange = (key, value) => {
    setAnswers((prevAnswers) => ({
      answer: {
        ...prevAnswers.answer,
        [key]: value,
      },
    }));
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography sx={{ fontSize: "16px !important", fontWeight: 500 }} mb={2}>
        {question.title}
      </Typography>
      {question.subquestions.map((subq, idx) => (
        <React.Fragment key={`${subq.id}_fragment`}>
          <Typography key={subq.id} variant="caption3">
            {idx + 1}. {subq.inputLabel}
          </Typography>
          <TableContainer component={Box} sx={{ mt: 2, mb: 2 }}>
            <Table>
              <TableHead key={`${subq.id}_head`}>
                <TableRow
                  key={`${subq.id}_head_row`}
                  sx={{ bgcolor: "#E4F8FF" }}
                >
                  {subq.header.map((head, index) => (
                    <TableCell
                      key={index}
                      sx={{ p: 0.5, borderBottom: "none" }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: "13px", sm: "18px", fontWeight: 600 },
                        }}
                      >
                        {head}
                      </Typography>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {subq.data.map((row, rowIndex) => (
                  <TableRow key={`row-${rowIndex}`}>
                    <TableCell
                      key={`cell-${rowIndex}`}
                      sx={{ borderBottom: "none" }}
                      width={"2%"}
                    >
                      <RadioGroup
                        value={
                          answers.answer[
                            `${idx + 1}_${subq.header[1]
                              .toLowerCase()
                              .replace(/\s+/g, "_")}` || ""
                          ] || ""
                        }
                        onChange={(e) =>
                          handleInputChange(
                            `${idx + 1}_${subq.header[1]
                              .toLowerCase()
                              .replace(/\s+/g, "_")}`,
                            e.target.value
                          )
                        }
                      >
                        <FormControlLabel
                          sx={{ pl: 3 }}
                          value={row.value[0]}
                          control={
                            <Radio
                              onClick={() => {
                                const key = `${idx + 1}_${subq.header[1]
                                  .toLowerCase()
                                  .replace(/\s+/g, "_")}`;
                                if (answers.answer[key] === row.value[0]) {
                                  handleInputChange(key, "");
                                }
                              }}
                            />
                          }
                          label=""
                        />
                      </RadioGroup>
                    </TableCell>
                    {row.value.slice(1).map((cellValue, cellIndex) => (
                      <TableCell
                        key={`cell-${rowIndex}-${cellIndex}`}
                        width={cellIndex === 0 ? "15%" : "30%"}
                        sx={{ borderBottom: "none" }}
                      >
                        <Typography
                          sx={{ fontSize: { xs: "13px", sm: "16px" } }}
                        >
                          {cellValue}
                        </Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </React.Fragment>
      ))}
    </Box>
  );
};

export default Scope;
