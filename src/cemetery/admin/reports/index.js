import {
  Box,
  Button,
  Grid2,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import BasicTable from "../../../shared/Table/BasicTable";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";

export const Reports = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const rows = [
    {
      id: 1,
      firstName: "Johnny Depp",
      lastName: "Depp",
      email: "johnny.depp@fake.email.com",
      dueDate: "10/10/2024",
      amount: "1000.00",
    },
    {
      id: 2,
      firstName: "Arnold",
      lastName: "Schwarzenegger",
      email: "arnold.schwarzenegger@fake.email.com",
      dueDate: "10/10/2024",
      amount: "1000.00",
    },
    {
      id: 3,
      firstName: "Jim",
      lastName: "Carrey",
      email: "Jim.Carrey@fake.email.com",
      dueDate: "10/10/2024",
      amount: "1000.00",
    },
  ];

  const headers = [
    "id",
    "First Name",
    "Last Name",
    "Email",
    "Due Date",
    "Amount",
    "Options",
  ];

  const buttons = [{ name: "View" }, { name: "Print" }];

  const onAction = (name, data) => {
    console.log("onAction", name, data);
  };

  return (
    <Box>
      <Box
        sx={{
          paddingLeft: 4,
          paddingRight: 4,
          paddingTop: 1,
          paddingBottom: 1,
          border: "1px solid gray",
          marginBottom: 2,
        }}
      >
        <Grid2
          container
          justifyContent={"space-between"}
          alignItems={"end"}
          spacing={2}
        >
          <Stack direction={"row"} spacing={2}>
            <Stack>
              <Typography variant="caption" fontWeight={800}>
                Due Date (Start)
              </Typography>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </Stack>

            <Stack>
              <Typography variant="caption" fontWeight={800}>
                Due Date (End)
              </Typography>
              <DatePicker
                size=""
                minDate={startDate}
                selected={endDate}
                onChange={(date) => setEndDate(date)}
              />
            </Stack>
          </Stack>
          <Stack>
            <TextField
              label="Search"
              size="small"
              placeholder="Search"
              sx={{ width: "300px" }}
            />
          </Stack>
        </Grid2>
        <Grid2 sx={{ marginTop: 1 }} container justifyContent={"end"}>
          <Stack>
            <Box>
              <Button size="small" variant="contained" color="primary">
                Print
              </Button>
            </Box>
          </Stack>
        </Grid2>
      </Box>
      <BasicTable
        rows={rows}
        headers={headers}
        buttons={buttons}
        onAction={onAction}
      />
    </Box>
  );
};
