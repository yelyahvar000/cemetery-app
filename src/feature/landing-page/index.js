import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import LOGO from "../../assets/Buenavista-sm.png";
import BG from "../../assets/main-bg.jpg";
import { useNavigate } from "react-router-dom";


export const LandingPage = () => {
  const navigate = useNavigate();


  const onSearch = () => {
    navigate("/feature/map-route-page");
  }

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            paddingLeft: "8rem",
            paddingRight: "8rem",
            height: "100%",
            backgroundColor: "rgba(255,255,255,0.7)",
            paddingBottom: "100px",
          }}
        >
          <Grid container size={12} justifyContent={"center"} width={"100%"}>
            <img src={LOGO} height={110} />
          </Grid>

          <Grid container>
            <Typography
              variant="body1"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              BUENAVISTA, GUIMARAS
            </Typography>
          </Grid>

          <Grid container>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              PUBLIC CEMETERY MANAGEMENT
            </Typography>
          </Grid>

          <Grid>
            <Typography variant="caption">
              (OLD POBLACION | EAST VALENCIA | BANBAN CEMETERY)
            </Typography>
          </Grid>

          <Grid container spacing={2} sx={{ marginTop: "50px" }}>
            <Autocomplete
              disablePortal
              options={[]}
              sx={{ width: 450 }}
              renderInput={(params) => <TextField {...params} label="Movie" />}
            />
            <Button variant="contained" onClick={onSearch}>
              Search
            </Button>
          </Grid>
        </div>
      </div>
    </Box>
  );
};
