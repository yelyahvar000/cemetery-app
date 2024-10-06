import { Box } from "@mui/material";
import BasicTable from "../../../shared/Table/BasicTable";

export const Profiling = () => {
  const rows = [
    {
      id: 1,
      deceased: "Peter P.",
      bornDate: "1900",
      diedDate: "1940",
      place: "Poblacion",
    },
    {
      id: 2,
      deceased: "Johnson S.",
      bornDate: "1860",
      diedDate: "1978",
      place: "Poblacion",
    },
    {
      id: 3,
      deceased: "Erick T.",
      bornDate: "1650",
      diedDate: "1700",
      place: "Poblacion",
    },
  ];

  const headers = [
    "id",
    "Deceased",
    "Born Date",
    "Died Date",
    "Place",
    "Options",
  ];

  const buttons = [{ name: "EDIT" }, { name: "DELETE" }];

  const onAction = (name, data) => {
    console.log("onAction", name, data);
  };

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