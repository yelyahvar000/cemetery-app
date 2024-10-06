import { Box } from "@mui/material";
import BasicTable from "../../../shared/Table/BasicTable";
import { SimpleField } from "../../../shared";

export const UserManagement = () => {
  const rows = [
    {
      id: 1,
      firstName: "Peter",
      lastName: "Pan",
      userName: "Peter.Pan",
      position: "Treasurer",
    },
    {
      id: 2,
      firstName: "Johnson",
      lastName: "Smith",
      userName: "Johnson.Smith",
      position: "Treasurer",
    },
    {
      id: 3,
      deceased: "Captain",
      bornDate: "America",
      diedDate: "Captain.America",
      position: "Local Economics",
    },
  ];

  const headers = [
    "id",
    "First Name",
    "Last Name",
    "User Name",
    "Position",
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
};
