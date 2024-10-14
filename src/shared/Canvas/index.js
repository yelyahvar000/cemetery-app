import { useEffect, useRef, useState } from "react";
import { BoxRectangle } from "./rectangleClass";
import PIN_START from "../../assets/green_pin_small.png";
import PIN_END from "../../assets/red_pin_small.png";
import { Box, Button, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import MenuAppBar from "../../shared/Headers/MenuAppBar";
import "./mapRoutePage.css";

const MODE = {
  read: "read",
  write: "write",
};

export const CemeteryCanvas = ({
  mapBackground,
  showMenuBar = false,
  menuBarTitle = "Title",
  goBack,
  onSave,
  allowGrid = false,
  location = '',
  initialData = null
}) => {
  const [boxes, setBoxes] = useState([]);
  const [list, setList] = useState([]);
  const [canvasHeight, setCanvasHeight] = useState(1000);
  const [canvasWidth, setCanvasWidth] = useState(1500);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(true);
  const [activated, setActivated] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [posDown, setPosDown] = useState({ x: 0, y: 0 });
  const [locked, setLocked] = useState(false);

  const [pointer, setPointer] = useState(null);
  const [greenPin, setGreenPin] = useState(null);

  const [entrance, setEntrance] = useState({ x: 950, y: 800, h: 20, w: 20 });
  const [destination, setDestination] = useState({
    x: 950,
    y: 800,
    h: 20,
    w: 20,
  });

  const [showGrid, setShowGrid] = useState(allowGrid);
  const [puntod, setPuntod] = useState([{ x: 560, y: 365, w: 10, h: 10 }]);
  const [base64Data, setBase64Data] = useState({
    entrance: {  },
    destination: {  },
    dots: [],
  });

  useEffect(() => {
    if (initialData) {
      const newData = JSON.parse(initialData);
      console.log("newData", newData);
      setBase64Data({ ...newData });
      const newList = newData.dots.map((item)=> new BoxRectangle(
         "",
         contextRef.current,
         "red",
         item?.x,
         item?.y,
         item?.w,
         item?.h
       ))
       setList(newList);
    }
  }, [initialData, canvasRef.current]);

  useEffect(() => {
    setShowGrid(allowGrid);
  }, [allowGrid]);

  const onDragging = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (locked == false) {
      setPos({ x, y });
    }
  
  };

  const drawThis = (x, y) => {
    const clickBox = new BoxRectangle(
      "",
      contextRef.current,
      "red",
      x,
      y,
      13,
      13
    );
    const item = getCollision(clickBox);

    if (item !== undefined) {
      const newList = list;
      const exist = newList.find((elem) => elem?.getId() === item?.getId());

      if (!exist) {
        const newRect = new BoxRectangle(
          item?.getId(),
          contextRef.current,
          "red",
          item?.getX(),
          item?.getY(),
          item?.getW(),
          item?.getH()
        );

        newList.push(newRect);
        setList([...newList]);
      }
    }
  };

  const onMouseDown = (e) => {
    e.preventDefault();
    setIsMouseDown(true);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosDown({ x, y });
    setActivated(true);
  };

  const onMouseUp = (e) => {
    setIsMouseDown(false);
    setActivated(false);
  };

  const getCollision = (box) => {
    for (let i = 0; i < boxes.length; i++) {
      const hasCollide = boxes[i].collision(box);
      if (hasCollide) return boxes[i];
    }
    return null;
  };

  const createGridTiles = () => {
    const context = contextRef.current;
    context.beginPath();
    for (let i = 5; i <= canvasWidth; i = i + 6) {
      context.moveTo(i, 5);
      context.lineTo(i, canvasHeight);

      context.moveTo(5, i);
      context.lineTo(canvasWidth, i);

      context.lineWidth = 0.25;
      context.strokeStyle = "red";
      context.stroke();
    }
  };

  const drawLine = () => {
    const tempBoxes = [];
    for (let a = 5; a < canvasHeight; a = a + 6) {
      for (let b = 5; b < canvasWidth; b = b + 6) {
        const box = new BoxRectangle(
          `${a}${b}`,
          contextRef.current,
          "transparent",
          b,
          a,
          5.4,
          5.4
        );
        box.draw();
        tempBoxes.push(box);
      }
    }
    setBoxes([...tempBoxes]);
  };

  const onClearCanvas = () => {
    const canvas = canvasRef.current;
    contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
  };

  const updateCanvas = () => {

    const canvas = canvasRef.current;
    if (canvas) {
      if (showGrid) {
        createGridTiles();
      }

      setPointer({
        x: pos.x,
        y: pos.y,
        h: base64Data.entrance.w,
        w: base64Data.entrance.h,
      });

      drawThis(pos.x, pos.y);

      base64Data?.dots.map((item) => {
        //drawThis(item.x, item.y);
      });

       if (pointer?.x && pointer?.y) {
         const endImage = new Image();
         endImage.src = PIN_END;
         endImage.onload = () => {
           contextRef.current.drawImage(
             endImage,
             pointer.x - 30,
             pointer.y - 40,
             60,
             60
           );
         };
       }
      
      if (base64Data.dots.length > 0) {
        const lastElem = base64Data.dots[base64Data.dots.length - 1];
        console.log("lastElem", lastElem);
      }

        const startImage = new Image();
        startImage.src = PIN_START;
        startImage.onload = () => {
          contextRef.current.drawImage(
            startImage,
            base64Data.entrance.x,
            base64Data.entrance.y,
            60,
            60
          );
        };
     
      // puntod.map((item, index) => {
      //   const i = new BoxRectangle(
      //     `puntod-${index}`,
      //     contextRef.current,
      //     "purple",
      //     item.x,
      //     item.y,
      //     item.w,
      //     item.h
      //   );
      //   if (i.collision(pointer) && locked == false) {
      //     setLocked(true);
      //   }
      //   i.draw();
      // });

      list.map((item) => {
        item.draw();
      });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      const context = canvas.getContext("2d");
      context.lineCap = "round";
      context.stokeStyle = "black";
      context.lineWidth = 5;
      contextRef.current = context;

      drawLine();

      setPointer({
        x: base64Data.destination.x,
        y: base64Data.destination.y,
        h: base64Data.destination.w,
        w: base64Data.destination.h,
      });

      updateCanvas();
    }

    const mouseEventDown = canvasRef.current.addEventListener(
      "mousedown",
      onMouseDown
    );
    const mouseEventUp = canvasRef.current.addEventListener(
      "mouseup",
      onMouseUp
    );
    const mouseEventDrag = canvasRef.current.addEventListener(
      "mousemove",
      onDragging
    );

    return () => {
      if (mouseEventDown && mouseEventUp && mouseEventDrag) {
        canvasRef.current.removeEventListener("mousedown", onMouseDown);
        canvasRef.current.removeEventListener("mouseup", onMouseUp);
        canvasRef.current.removeEventListener("mousemove", onDragging);
      }
    };
  }, [canvasRef.current]);

  useEffect(() => {
    if (activated && isMouseDown) {
      onClearCanvas();
      updateCanvas();
    }
  }, [pos]);

  const onProcessData = () => {
    const newBase64Data = base64Data;
    newBase64Data.destination = {
      ...newBase64Data.destination,
      x: pointer.x,
      y: pointer.y,
    };
    console.log("onProcessData list", list);
    const newList = list.map((item) => ({
      x:item.getX(),y:item.getY(),h:item.getH(),w:item.getW()
    }))
    console.log("onProcessData newList", newList);


    onSave({ ...base64Data, dots: newList });
  };

  const onSetStartingPoint = () => {};

  const onSetDestinationPoint = () => {};

  const onReset = () => {
    //window.location.reload();
    const shadowData = { ...base64Data };
    shadowData.dots = []
    shadowData.dots.push(shadowData.destination);
    console.log("shadowData", shadowData);
    setBase64Data(shadowData);
    setLocked(false);
  };

  const onCrateLine = () => {};

  useEffect(() => {
    onClearCanvas()
    updateCanvas()
  }, [list]);

  return (
    <>
      {showMenuBar && (
        <MenuAppBar title={menuBarTitle} goBack={goBack}>
          <Box>
            <Stack direction={"row"} spacing={2}>
              {/* <Button
                variant="contained"
                color="secondary"
                onClick={onSetStartingPoint}
              >
                Set Starting Point
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={onSetDestinationPoint}
              >
                Set Destination
              </Button>
              <Button variant="contained" color="error" onClick={onReset}>
                Reset
              </Button>
              <Button variant="contained" color="error" onClick={onCrateLine}>
                Create Line
              </Button> */}
              <Button
                variant="contained"
                color="success"
                onClick={onProcessData}
              >
                Save Changes
              </Button>
            </Stack>
          </Box>
        </MenuAppBar>
      )}

      <Grid container justifyContent={"center"}>
          <Box>
          <img src={mapBackground} width={canvasWidth} height={canvasHeight} />
        </Box>   

        <Box sx={{ position: "absolute" }}>
          <canvas className="canvas-container-bar-char" ref={canvasRef} />
        </Box>
      </Grid>
    </>
  );
};
