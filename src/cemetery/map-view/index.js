import banbanImg from "../../assets/banban.JPG";
import poblasionImg from "../../assets/poblasion.JPG";
import eastvelenciaImg from "../../assets/east_velencia.JPG";
import { Grid2 } from "@mui/material";
import { CemeteryCanvas } from "../../shared";
import MAP_BG from "../../assets/EAST_VALENCIA_MAP.png";

export const MapView = () => {
  return (
    <Grid2>
      <Grid2>
        <CemeteryCanvas mapBackground={MAP_BG} />
      </Grid2>
    </Grid2>
  );
};
