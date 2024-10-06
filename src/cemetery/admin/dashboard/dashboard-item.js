import { Box, Grid2, Stack, Typography } from "@mui/material";

const DashboardItem = ({ title, value }) => {
  return (
    <Grid2 sx={{ border: "1px solid black", padding: "8px", width: "350px" }}>
      <Stack direction={"row"} spacing={2}>
        <Box sx={{ height: "120px", width: "140px", background: "red" }}></Box>
        <Stack direction={"column"} sx={{width:'230px'}}>
          <Typography variant="h6" fontWeight={200}>
            {title}
          </Typography>
          <Typography variant="h3">{value}</Typography>
        </Stack>
      </Stack>
    </Grid2>
  );
};
export default DashboardItem;
