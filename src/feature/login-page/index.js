import { Button, TextField, Box, Typography, Grid2 } from "@mui/material";
import LOGO from "../../assets/Buenavista-sm.png";
import BG from "../../assets/main-bg.jpg";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100wh",
        backgroundImage: `url("${BG}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
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
            paddingLeft: "15rem",
            paddingRight: "15rem",
            height: "100%",
            backgroundColor: "rgba(255,255,255,0.7)",
            paddingBottom: "100px",
          }}
        >
          <Grid2 container size={12} justifyContent={"center"} width={"100%"}>
            <img src={LOGO} height={110} />
          </Grid2>

          <Grid2 container>
            <Typography
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
              variant="h5"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              PUBLIC CEMETERY MANAGEMENT
            </Typography>
          </Grid2>

          <Grid2>
            <Typography variant="caption">
              (OLD POBLACION | EAST VALENCIA | BANBAN CEMETERY)
            </Typography>
          </Grid2>

          <Grid2
            container
            direction={"column"}
            spacing={2}
            size="auto"
            width={400}
            marginTop={"80px"}
          >
            <Grid2 spacing={2}>
              <TextField
                size="small"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
              />
            </Grid2>
            <Grid2 spacing={2}>
              <TextField
                size="small"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                fullWidth
              />
            </Grid2>
            <Grid2 container justifyContent={"center"}>
              <Button fullWidth size="small" variant="contained">
                Login
              </Button>
            </Grid2>
          </Grid2>
          <Grid2 sx={{ marginTop: "12px" }}>
            <Typography variant="caption">
              Dont have an account yet?{" "}
              <Link to={"/feature/registration"}>SIGN UP</Link>
            </Typography>
          </Grid2>
        </div>
      </div>
    </Box>
  );
};
