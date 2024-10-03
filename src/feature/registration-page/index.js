
import { Button, TextField, Alert, Typography, Grid2, Divider } from "@mui/material";
import LOGO from "../../assets/Buenavista-sm.png";
import BG from "../../assets/main-bg.jpg";
import { Link } from "react-router-dom";
import { usePostLoginMutation } from "../../service/loginService";
import { useEffect, useState } from "react";
import "./login.css";
import { PageWrapper } from "../../shared";
import { PasswordField, SimpleField } from "../../shared/TextFields";

export const RegistrationPage = () => {
  const [login] = usePostLoginMutation();

  const [isLoading, setIsLoading] = useState(false);
  const [apiStatus, setApiStatus] = useState({
    success: null,
    message: "",
  });

  const onLogin = async () => {
    setIsLoading(true);
    const response = await login({
      email: "email@domain.com",
      password: "Password123",
    });
    setIsLoading(false);
    if (response.error) {
      setApiStatus("FAILED");
    } else {
      setApiStatus("SUCCESS");
    }
    console.log("response", response);
  };

  return (
    <PageWrapper
      config={{ bg: BG }}
      content={
        <div className="bg-text">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Grid2
              container
              size={12}
              justifyContent={"center"}
              width={"100%"}
              marginBottom={"18px"}
            >
              <img src={LOGO} height={110} />
            </Grid2>

            <Grid2 container>
              <Typography
                color="black"
                variant="body1"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                BUENAVISTA, GUIMARAS
              </Typography>
            </Grid2>

            <Grid2 container>
              <Typography
                color="black"
                variant="h5"
                noWrap
                component="div"
                fontWeight={900}
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                PUBLIC CEMETERY MANAGEMENT
              </Typography>
            </Grid2>

            <Grid2>
              <Typography variant="caption" color="black" fontWeight={100}>
                (OLD POBLACION | EAST VALENCIA | BANBAN CEMETERY)
              </Typography>
            </Grid2>

            <Grid2
              container
              direction={"column"}
              spacing={2}
              size="auto"
              width={400}
              marginTop={"40px"}
            >
              <Grid2 spacing={2}>
                <SimpleField label="First Name" />
              </Grid2>
              <Grid2 spacing={2}>
                <SimpleField label="Last Name" />
              </Grid2>

              <Grid2 size={12} margin={1}>
                <Divider />
              </Grid2>

              <Grid2 spacing={2}>
                <SimpleField label="User Name" />
              </Grid2>
              <Grid2 spacing={2}>
                <SimpleField label="Email Address" />
              </Grid2>
              <Grid2 spacing={2}>
                <PasswordField label="Confirm Password" />
              </Grid2>
              <Grid2 spacing={2}>
                <PasswordField label="Password" />
              </Grid2>

              <Grid2 container justifyContent={"center"} marginTop={2}>
                <Button fullWidth size="small" variant="contained">
                  SIGN UP
                </Button>
              </Grid2>
            </Grid2>

            <Grid2 sx={{ marginTop: "12px" }}>
              <Typography variant="caption">
                Already have an account? <Link to={"/"}>SIGN IN</Link>
              </Typography>
            </Grid2>
          </div>
        </div>
      }
    />
  );
};


          
          

