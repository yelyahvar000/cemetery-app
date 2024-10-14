
import { useClientSearchDeceasedQuery } from "../../service/clientService";
import { MapViewComponent } from "../../shared/Map-View";
import { useSearchParams } from "react-router-dom";

import map_banban from "../../assets/map_banban.png";
import map_poblacion from "../../assets/map_poblacion.png";
import map_east_valencia from "../../assets/EAST_VALENCIA_MAP.png";

export function MapView() {
  const [searchParams] = useSearchParams();
  const { data } = useClientSearchDeceasedQuery(searchParams.get("fullname"));

   const getInitialBg = () => {
     const location = searchParams.get("location");
     const isBanBan = location.toLowerCase().includes("ban ban");
     const isPoblascion = location.toLowerCase().includes("poblacion");
     const isEastVelencia = location.toLowerCase().includes("east velencia");

     if (isBanBan) {
       return map_banban;
     } else if (isEastVelencia) {
       return map_east_valencia;
     } else if (isPoblascion) {
       return map_poblacion;
     }
   };
  
  const goBack = () => {};
  const onSave = () => {};

  return (
    <MapViewComponent
      mapBackground={getInitialBg()}
      showMenuBar={false}
      menuBarTitle=""
      goBack={goBack}
      onSave={onSave}
      allowGrid={false}
      initialData={data.deceased.canvasMap}
    />
  );
}
