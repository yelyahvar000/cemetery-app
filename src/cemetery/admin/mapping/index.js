import { Box, Button } from "@mui/material";
import BasicTable from "../../../shared/Table/BasicTable";

export const Mapping = () => {

  const rows = [
    {
      id: 1,
      deceased: "Peter P.",
      bornDate: "1900",
      diedDate: "1940",
      place: "Poblacion",
      niche: "Lot 2, Block 1",
    },
    {
      id: 2,
      deceased: "Johnson S.",
      bornDate: "1860",
      diedDate: "1978",
      place: "Poblacion",
      niche: "Lot 1, Block 2",
    },
    {
      id: 3,
      deceased: "Erick T.",
      bornDate: "1650",
      diedDate: "1700",
      place: "Poblacion",
      niche: "Lot 1, Block 1",
    },
  ];

  const headers = [
    "id",
    "Deceased",
    "Born Date",
    "Died Date",
    "Place",
    "Niche",
    "Options",
  ];

  const buttons = [{ name: "Niche" }, { name: "Routes" }];

  const onAction = (name, data) => {
    console.log("onAction", name, data);
  }

  return (
    <Box>
      <BasicTable
        rows={rows}
        headers={headers}
        buttons={buttons}
        onAction={onAction}
      />
    </Box>
  );
}