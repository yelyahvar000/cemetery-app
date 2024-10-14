import { Box, Button, Divider, Grid2, Stack, Typography } from "@mui/material";
import BasicTable from "../../../shared/Table/BasicTable";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CustomModal from "../../../shared/Modal/CustomModal";
import { SimpleField } from "../../../shared";
//import { useAdminRegisterUserMutation } from "../../../service/adminService";

export const UserManagement = () => {
  //const [register] = useAdminRegisterUserMutation();

  const [page, setPage] = useState(1);
  const [count, setCount] = useState(3);

  const [openCreateAccount, setOpenCreateAccount] = useState(false);

  const [role, setRole] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      key: "position",
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
      <Button
        variant="contained"
        onClick={() => setOpenCreateAccount(true)}
        startIcon={<AddIcon />}
      >
        Add User
      </Button>
      <BasicTable
        rows={rows}
        columns={columns}
        onPageChange={onPageChange}
        page={page}
        count={count}
      />
      <CustomModal
        open={openCreateAccount}
        onClose={() => setOpenCreateAccount(false)}
        onOk={() => setOpenCreateAccount(false)}
        onCancel={() => setOpenCreateAccount(false)}
      >
        <>
          <Grid2
            container
            spacing={1}
            sx={{ width: "100%", marginTop: "12px" }}
            justifyContent={"center"}
          >
            <Typography variant="h5" sx={{ fontWeight: 400 }}>
              Create Account
            </Typography>
          </Grid2>

          <Box sx={{ margin: "1rem" }}>
            <Divider />
          </Box>

          <Grid2
            container
            spacing={2}
            sx={{ width: "100%", marginBottom: "2rem" }}
          >
            <Grid2 sm={24} lg={24} sx={{ width: "100%" }}>
              <SimpleField
                label="Role"
                onChange={(e) => setRole(e.target.value)}
              />
            </Grid2>
            <Grid2 sm={24} lg={24} sx={{ width: "100%" }}>
              <SimpleField
                label="First Name"
                onChange={(e) => setRole(e.target.value)}
              />
            </Grid2>
            <Grid2 sm={24} lg={24} sx={{ width: "100%" }}>
              <SimpleField
                label="Last Name"
                onChange={(e) => setRole(e.target.value)}
              />
            </Grid2>
            <Grid2 sm={24} lg={24} sx={{ width: "100%" }}>
              <SimpleField
                label="Email"
                onChange={(e) => setRole(e.target.value)}
              />
            </Grid2>
            <Grid2 sm={24} lg={24} sx={{ width: "100%" }}>
              <SimpleField
                type="password"
                label="Password"
                onChange={(e) => setRole(e)}
              />
            </Grid2>
          </Grid2>

          <Box sx={{ margin: "1rem" }}>
            <Divider />
          </Box>
        </>
      </CustomModal>
    </Box>
  );
};
