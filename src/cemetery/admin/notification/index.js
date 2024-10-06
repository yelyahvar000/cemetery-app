import { Box } from "@mui/material";
import BasicTable from "../../../shared/Table/BasicTable";

export const Notification = () => {
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
    'Options'
  ];

  const buttons = [
   { name: "send email"},
   { name: "verified Payment"}
  ];

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