import BasicTable from "../../../shared/Table/BasicTable";
import { useEffect, useState } from "react";
import { Box, Button, Divider, Grid2, Stack, Typography } from "@mui/material";
import {
  useAdminAddDeceasedMutation,
  useLazyAdminFetchDeceasedQuery,
} from "../../../service/adminService";
import { useNavigate } from "react-router-dom";
import { ROUTE_ADMIN_MAPPING } from "../../../constants";
import CustomModal from "../../../shared/Modal/CustomModal";
import AddIcon from "@mui/icons-material/Add";
import { SimpleField } from "../../../shared";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const Profiling = () => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(3);
  const [list, setList] = useState([]);
  const [openCreateAccount, setOpenCreateAccount] = useState();

  const [fieldData, setFieldData] = useState({
    lastName: "",
    firstName: "",
    middleName: "",
    suffix: "",
    address: "",
    born: "",
    died: "",
    cemeteryLocation: "",
    datePermit: "",
    natureApp: "",
    layerNiche: "",
    layerAddress: "",
    payeeLastName: "",
    payeeFirstName: "",
    payeeMiddleName: "",
    payeeSuffix: "",
    payeeContact: "",
    payeeEmail: "",
    payeeAddress: "",
  });

  const navigate = useNavigate();
  //const { data, isLoading, isSuccess, error } = useAdminFetchDeceasedQuery();
  const [addDeceased] = useAdminAddDeceasedMutation()
  const [searchDeased, result] = useLazyAdminFetchDeceasedQuery();

  console.log("result", result);

  useEffect(() => {
    searchDeased()
  }, [])
  
  const columns = [
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
      title: "Born",
      dataIndex: "born",
      key: "born",
    },
    {
      title: "Died",
      dataIndex: "died",
      key: "died",
    },
    {
      title: "place",
      dataIndex: "place",
      key: "place",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Stack spacing={1} direction={"row"}>
          <Button
            size="small"
            variant="contained"
            color="error"
            onClick={() => onEditRoutes(record)}
          >
            Edit Map
          </Button>
        </Stack>
      ),
    },
  ];

  const onEditRoutes = (data) => {
    console.log("onEditPins", data);
    navigate(
      `${ROUTE_ADMIN_MAPPING}?id=${data.id}&location=${data.place}`
    );
  };

  const onPageChange = (value) => {
    setPage(value);
  };

  const onAddDeceasedRecord = async() => {
    const response = await addDeceased(fieldData);
    if (response.data.statusCode == 200) {
      searchDeased();
    }
  }

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
        rows={result.data ?? []}
        columns={columns}
        onPageChange={onPageChange}
        page={page}
        count={count}
      />
      <CustomModal
        width={600}
        open={openCreateAccount}
        onClose={() => setOpenCreateAccount(false)}
        onOk={() => {
          setOpenCreateAccount(false);
          onAddDeceasedRecord();
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
              Add Deceased Account
            </Typography>
          </Grid2>

          <Box sx={{ margin: "1rem" }}>
            <Divider />
          </Box>

          <Grid2
            container
            spacing={2}
            sx={{
              width: "100%",
              marginBottom: "2rem",
              height: "500px",
              overflow: "auto",
            }}
          >
            <Grid2 sm={24} lg={24} sx={{ width: "100%" }}>
              <SimpleField
                size="medium"
                label="First Name"
                onChange={(e) =>
                  setFieldData((prev) => ({
                    ...prev,
                    firstName: e.target.value,
                  }))
                }
              />
            </Grid2>
            <Grid2 sm={24} lg={24} sx={{ width: "100%" }}>
              <SimpleField
                size="medium"
                label="Last Name"
                onChange={(e) =>
                  setFieldData((prev) => ({
                    ...prev,
                    lastName: e.target.value,
                  }))
                }
              />
            </Grid2>
            <Grid2 sm={24} lg={24} sx={{ width: "100%" }}>
              <SimpleField
                size="medium"
                label="Middle Name"
                onChange={(e) =>
                  setFieldData((prev) => ({
                    ...prev,
                    middleName: e.target.value,
                  }))
                }
              />
            </Grid2>
            <Grid2 sm={24} lg={24} sx={{ width: "100%" }}>
              <SimpleField
                size="medium"
                label="Suffix"
                onChange={(e) =>
                  setFieldData((prev) => ({
                    ...prev,
                    suffix: e.target.value,
                  }))
                }
              />
            </Grid2>
            <Grid2 sm={24} lg={24} sx={{ width: "100%" }}>
              <SimpleField
                size="medium"
                label="Address"
                onChange={(e) =>
                  setFieldData((prev) => ({
                    ...prev,
                    address: e.target.value,
                  }))
                }
              />
            </Grid2>
            <Grid2 sm={24} lg={24} sx={{ width: "100%" }}>
              <SimpleField
                placeHolder="DD-MM-YYYY"
                size="medium"
                label="Born (DD-MM-YYYY)"
                onChange={(e) =>
                  setFieldData((prev) => ({
                    ...prev,
                    born: e.target.value,
                  }))
                }
              />
            </Grid2>
            <Grid2 sm={24} lg={24} sx={{ width: "100%" }}>
              <SimpleField
                size="medium"
                label="Died (DD-MM-YYYY)"
                onChange={(e) =>
                  setFieldData((prev) => ({
                    ...prev,
                    died: e.target.value,
                  }))
                }
              />
            </Grid2>
            <Grid2 sm={24} lg={24} sx={{ width: "100%" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Cemetery Location
                </InputLabel>
                <Select
                  size="medium"
                  labelId="cemeteryLocation-simple-select-label"
                  id="cemeteryLocation-simple-select"
                  value={fieldData.cemeteryLocation}
                  label="Cemetery Location"
                  onChange={(e) =>
                    setFieldData((prev) => ({
                      ...prev,
                      cemeteryLocation: e.target.value,
                    }))
                  }
                >
                  <MenuItem value={"Poblacion Cemetery"}>
                    Poblacion Cemetery
                  </MenuItem>
                  <MenuItem value={"Ban Ban Cemetery"}>
                    Banban Cemetery
                  </MenuItem>
                  <MenuItem value={"East Velencia Cemetery"}>
                    East Valencia Cemetery
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid2>
            <Grid2 sm={24} lg={24} sx={{ width: "100%" }}>
              <SimpleField
                size="medium"
                label="Date Permit (DD-MM-YYYY)"
                onChange={(e) =>
                  setFieldData((prev) => ({
                    ...prev,
                    datePermit: e.target.value,
                  }))
                }
              />
            </Grid2>
            <Grid2 sm={24} lg={24} sx={{ width: "100%" }}>
              <FormControl fullWidth>
                <InputLabel id="natureApp-simple-select-label">
                  Nature App
                </InputLabel>
                <Select
                  labelId="natureApp-simple-select-label"
                  id="natureApp-simple-select"
                  value={fieldData.natureApp}
                  label="Nature App"
                  onChange={(e) =>
                    setFieldData((prev) => ({
                      ...prev,
                      natureApp: e.target.value,
                    }))
                  }
                >
                  <MenuItem value={"Construction"}>Construction</MenuItem>
                  <MenuItem value={"Excavation"}>Excavation</MenuItem>
                </Select>
              </FormControl>
            </Grid2>
            <Grid2 sm={24} lg={24} sx={{ width: "100%" }}>
              <SimpleField
                size="medium"
                label="Layer Niche"
                onChange={(e) =>
                  setFieldData((prev) => ({
                    ...prev,
                    layerNiche: e.target.value,
                  }))
                }
              />
            </Grid2>
            <Grid2 sm={24} lg={24} sx={{ width: "100%" }}>
              <SimpleField
                size="medium"
                label="Layer Address"
                onChange={(e) =>
                  setFieldData((prev) => ({
                    ...prev,
                    layerAddress: e.target.value,
                  }))
                }
              />
            </Grid2>
            <Grid2 sm={24} lg={24} sx={{ width: "100%" }}>
              <SimpleField
                size="medium"
                label="Payee Last Name"
                onChange={(e) =>
                  setFieldData((prev) => ({
                    ...prev,
                    payeeLastName: e.target.value,
                  }))
                }
              />
            </Grid2>
            <Grid2 sm={24} lg={24} sx={{ width: "100%" }}>
              <SimpleField
                size="medium"
                label="Payee First Name"
                onChange={(e) =>
                  setFieldData((prev) => ({
                    ...prev,
                    payeeFirstName: e.target.value,
                  }))
                }
              />
            </Grid2>
            <Grid2 sm={24} lg={24} sx={{ width: "100%" }}>
              <SimpleField
                size="medium"
                label="Payee Middle Name"
                onChange={(e) =>
                  setFieldData((prev) => ({
                    ...prev,
                    payeeMiddleName: e.target.value,
                  }))
                }
              />
            </Grid2>
            <Grid2 sm={24} lg={24} sx={{ width: "100%" }}>
              <SimpleField
                size="medium"
                label="Payee Suffix"
                onChange={(e) =>
                  setFieldData((prev) => ({
                    ...prev,
                    payeeSuffix: e.target.value,
                  }))
                }
              />
            </Grid2>
            <Grid2 sm={24} lg={24} sx={{ width: "100%" }}>
              <SimpleField
                size="medium"
                label="Payee Contact"
                onChange={(e) =>
                  setFieldData((prev) => ({
                    ...prev,
                    payeeContact: e.target.value,
                  }))
                }
              />
            </Grid2>
            <Grid2 sm={24} lg={24} sx={{ width: "100%" }}>
              <SimpleField
                type="email"
                size="medium"
                label="Payee Email"
                onChange={(e) =>
                  setFieldData((prev) => ({
                    ...prev,
                    payeeEmail: e.target.value,
                  }))
                }
              />
            </Grid2>
            <Grid2 sm={24} lg={24} sx={{ width: "100%" }}>
              <SimpleField
                size="medium"
                label="Payee Address"
                onChange={(e) =>
                  setFieldData((prev) => ({
                    ...prev,
                    payeeAddress: e.target.value,
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
