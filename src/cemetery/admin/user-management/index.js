import { Box, Button, Divider, Grid2, Stack, Typography } from "@mui/material";
import BasicTable from "../../../shared/Table/BasicTable";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CustomModal from "../../../shared/Modal/CustomModal";
import { SimpleField } from "../../../shared";
import { useAdminRegisterUserMutation, useLazyAdminFetchUsersQuery } from "../../../service/adminService";

export const UserManagement = () => {
  const [register] = useAdminRegisterUserMutation();

  const [page, setPage] = useState(1);
  const [count, setCount] = useState(3);

  const [openCreateAccount, setOpenCreateAccount] = useState(false);
  const [getAdminList, result] = useLazyAdminFetchUsersQuery()

  const [fieldData, setFieldData] = useState({
    role: "",
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Box>
          <Button
            disabled
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

  useEffect(() => {
    getAdminList()
  }, [])

  const onConfirmAddUser = async() =>{
    const response = await register(fieldData)
    if (response.data.statusCode == 200) {
      getAdminList();
    }
  }
  
  useEffect(() => {
    console.log("result", result);
  }, [result]);
  
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
        rows={result?.data}
        columns={columns}
        onPageChange={onPageChange}
        page={page}
        count={count}
      />
      <CustomModal
        open={openCreateAccount}
        onClose={() => setOpenCreateAccount(false)}
        onOk={() => {
          setOpenCreateAccount(false)
          onConfirmAddUser()
        }}
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
                onChange={(e) =>
                  setFieldData((prevState) => ({
                    ...prevState,
                    role: e.target.value,
                  }))
                }
              />
            </Grid2>
            <Grid2 sm={24} lg={24} sx={{ width: "100%" }}>
              <SimpleField
                label="First Name"
                onChange={(e) =>
                  setFieldData((prevState) => ({
                    ...prevState,
                    firstName: e.target.value,
                  }))
                }
              />
            </Grid2>
            <Grid2 sm={24} lg={24} sx={{ width: "100%" }}>
              <SimpleField
                label="Last Name"
                onChange={(e) =>
                  setFieldData((prevState) => ({
                    ...prevState,
                    lastName: e.target.value,
                  }))
                }
              />
            </Grid2>
            <Grid2 sm={24} lg={24} sx={{ width: "100%" }}>
              <SimpleField
                label="Email"
                onChange={(e) =>
                  setFieldData((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }))
                }
              />
            </Grid2>
            <Grid2 sm={24} lg={24} sx={{ width: "100%" }}>
              <SimpleField
                type="password"
                label="Password"
                onChange={(e) =>
                  setFieldData((prevState) => ({
                    ...prevState,
                    password: e.target.value,
                  }))
                }
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
