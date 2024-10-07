import { Box, Button, Stack } from "@mui/material";
import BasicTable from "../../../shared/Table/BasicTable";
import { useState } from "react";

export const UserManagement = () => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(3);

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
      firstName: "Captain",
      lastName: "America",
      userName: "Captain.America",
      position: "Local Economics",
    },
  ];

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "firstName",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "lastName",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "userName",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "position",
      dataIndex: "position",
      key: "position"
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Box>
          <Button
            size="small"
            variant="contained"
            onClick={() => onAction(record)}
          >
            Edit
          </Button>
        </Box>
      ),
    },
  ];

  const onAction = (data) => {
    console.log("onAction", data);
  };

  const onPageChange = (value) => {
    setPage(value);
  };

  return (
    <Box>
      <BasicTable
        rows={rows}
        columns={columns}
        onPageChange={onPageChange}
        page={page}
        count={count}
      />
    </Box>
  );
}
