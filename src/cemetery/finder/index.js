import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Container, Divider, Grid2, InputLabel, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import LOGO from "../../assets/Buenavista-sm.png";
import BG from "../../assets/main-bg.jpg";
import banbanImg from "../../assets/banban.JPG";
import poblasionImg from "../../assets/poblasion.JPG";
import eastvelenciaImg from "../../assets/east_velencia.JPG";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import { useNavigate } from "react-router-dom";
import MenuAppBar from "../../shared/Headers/MenuAppBar";
import {CustomizedInputsStyled1, SearchTextField, TextFieldWithLabelOnTop} from '../../shared/TextFields'
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import FacebookIcon from "@mui/icons-material/Facebook";

export const Finder = () => {
  const navigate = useNavigate();

  const onSearch = () => {
    navigate("/feature/map-route-page");
  };

  return (
    <Box>
      <MenuAppBar />
      <Container>
        <Grid2
          sx={{
            marginTop: "2rem",
            width: "100%",
            background: "rgba(0,0,0, 0.4)",
            padding: "2rem",
          }}
          container
          justifyContent={"center"}
          alignItems={"center"}
          alignContent={"center"}
        >
          <Stack
            direction={"column"}
            justifyItems={"center"}
            justifyContent={"center"}
            sx={{ margin: 2 }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img src={LOGO} height={110} />
            </Box>
            <Typography
              textAlign={"center"}
              color="black"
              variant="body1"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              BUENAVISTA, GUIMARAS
            </Typography>
            <Typography
              textAlign={"center"}
              color="black"
              variant="h5"
              noWrap
              component="div"
              fontWeight={900}
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              PUBLIC CEMETERY MANAGEMENT
            </Typography>
            <Typography
              variant="caption"
              color="black"
              fontWeight={100}
              textAlign={"center"}
            >
              (OLD POBLACION | EAST VALENCIA | BANBAN CEMETERY)
            </Typography>
          </Stack>

          <Grid2 container size={12} justifyContent={"center"}>
            <Box sx={{ width: "60%" }}>
              <SearchTextField callback={onSearch} />
            </Box>
          </Grid2>
        </Grid2>

        <Box padding={"3rem"} alignItems={"center"}>
          <Grid2 container spacing={2} rowGap={2} justifyContent={"center"}>
            <Grid2 size={4} padding={5}>
              <Stack>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <img src={banbanImg} width={"100%"} height={"200px"} />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "8px",
                  }}
                >
                  <Typography variant="h7" fontWeight={800}>
                    Ban Ban Cemetery
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                  }}
                >
                  orem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>

                <Button variant="contained">More</Button>
              </Stack>
            </Grid2>

            <Grid2 size={4} padding={5}>
              <Stack>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <img src={poblasionImg} width={"100%"} height={"200px"} />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "8px",
                  }}
                >
                  <Typography variant="h7" fontWeight={800}>
                    Poblasion
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                  }}
                >
                  orem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
                <Button variant="contained">More</Button>
              </Stack>
            </Grid2>

            <Grid2 size={4} padding={5}>
              <Stack>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <img src={eastvelenciaImg} width={"100%"} height={"200px"} />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "8px",
                  }}
                >
                  <Typography variant="h7" fontWeight={800}>
                    East Velencia Cemetery
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                  }}
                >
                  orem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
                <Button variant="contained">More</Button>
              </Stack>
            </Grid2>
          </Grid2>
        </Box>

        <Box
          sx={{
            height: "500px",
            padding: "2rem",
          }}
        >
          <Stack direction="row" spacing={2} id="banban-cemetery">
            <img src={eastvelenciaImg} height={"400px"} width={"400px"} />
            <Box>
              <Box>
                <Typography variant="h5">Ban Ban Cemetery</Typography>
              </Box>
              <Box>
                <p>
                  <Typography>
                    orem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </Typography>
                </p>
                <p>
                  <Typography>
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </Typography>
                </p>
              </Box>
            </Box>
          </Stack>
        </Box>

        <Box
          sx={{
            height: "500px",
            padding: "2rem",
          }}
        >
          <Stack direction="row" spacing={2} id="poblacion-cemetery">
            <Box>
              <Box>
                <Typography variant="h5">Poblacion Cemetery</Typography>
              </Box>
              <Box>
                <p>
                  <Typography>
                    orem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </Typography>
                </p>
                <p>
                  <Typography>
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </Typography>
                </p>
              </Box>
            </Box>
            <img src={eastvelenciaImg} height={"400px"} width={"400px"} />
          </Stack>
        </Box>

        <Box
          sx={{
            height: "500px",
            padding: "2rem",
          }}
        >
          <Stack direction="row" spacing={2} id="east_valencia-cemetery">
            <img src={eastvelenciaImg} height={"400px"} width={"400px"} />
            <Box>
              <Box>
                <Typography variant="h5">East Velencia Cemetery</Typography>
              </Box>
              <Box>
                <p>
                  <Typography>
                    orem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </Typography>
                </p>
                <p>
                  <Typography>
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </Typography>
                </p>
              </Box>
            </Box>
          </Stack>

          <Box marginTop={6}>
            <Divider />
          </Box>

          <Grid2 container spacing={2} marginTop={4} padding={4}>
            <Grid2 size={12}>
              <Box>
                <Typography variant="h6" fontWeight={800}>
                  GET IN TOUCH
                </Typography>
              </Box>
              <Box>
                <Typography>
                  orem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when{" "}
                </Typography>
              </Box>
            </Grid2>

            <Grid2 container marginTop={4}>
              <Grid2 size={3}>
                <Stack direction={"column"} sx={{ width: "100%" }} spacing={2}>
                  <Box>
                    <TextFieldWithLabelOnTop label="NAME" />
                  </Box>

                  <Box>
                    <TextFieldWithLabelOnTop label="EMAIL" />
                  </Box>
                  <Box>
                    <TextFieldWithLabelOnTop label="CEMETERY NAME" />
                  </Box>
                  <Box>
                    {" "}
                    <textarea rows="4" style={{ width: "100%" }} />
                  </Box>
                </Stack>
              </Grid2>

              <Grid2 container size={4} rowGap={2} spacing={2} padding={4}>
                <Stack direction={"row"} spacing={2}>
                  <HomeWorkIcon />
                  <Stack direction={"column"}>
                    <Box>
                      <Typography variant="caption">
                        standard dummy text ever
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="caption">
                        standard dummy text ever
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="caption">
                        standard dummy text ever
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>

                <Stack direction={"row"} spacing={2}>
                  <PermPhoneMsgIcon />
                  <Stack direction={"column"}>
                    <Box>
                      <Typography variant="caption">+63 5678901234</Typography>
                    </Box>
                  </Stack>
                </Stack>

                <Stack direction={"row"} spacing={2}>
                  <AttachEmailIcon />
                  <Stack direction={"column"}>
                    <Box>
                      <Typography variant="caption">
                        fakeEmail@domin.com
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
                <Stack direction={"row"} spacing={2}>
                  <FacebookIcon />
                  <Stack direction={"column"}>
                    <Box>
                      <Typography variant="caption">
                        facePerson@fakeDomain.com
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Grid2>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </Box>
  );
};