import { Box, Grid2, Stack, Typography } from "@mui/material";
import DashboardItem from "./dashboard-item";



export const Dashboard = () => {
  

  const dashboardValues = [
    {
      name: "Local Economics Enterprise",
      value: 10,
    },
    {
      name: "Municipal Treasurer",
      value: 20,
    },
    {
      name: "Guest",
      value: 20,
    },
    {
      name: "Total Payment",
      value: 10,
    },
  ];

  return (
    <Grid2 container spacing={2}>
      {dashboardValues.map((item) => {
        return <DashboardItem title={item.name} value={item.value} />;
      })}
    </Grid2>
  );
};