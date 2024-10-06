import { useEffect, useRef, useState } from "react";
import "./mapRoutePage.css";
import { BoxRectangle } from "./rectangleClass";
import IMG from "../../../assets/EAST_VALENCIA_MAP.png";
import PIN_START from "../../../assets/location-pin-green.png";
import PIN_END from "../../../assets/location-pin-red.png";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export const MapSetting = () => {
  const [boxes, setBoxes] = useState([]);
  const [list, setList] = useState([]);
  const [canvasHeight, setCanvasHeight] = useState(800);
  const [canvasWidth, setCanvasWidth] = useState(1000);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [activated, setActivated] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [posDown, setPosDown] = useState({ x: 0, y: 0 });
  const [locked, setLocked] = useState(false);
  const [redPin, setRedPin] = useState(null);
  const [showGrid, setShowGrid] = useState(true);
  const [puntod, setPuntod] = useState([{ x: 560, y: 365, w: 10, h: 10 }]);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const onDragging = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPos({ x, y });
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
    console.log("item----->>", item);
    if (item !== undefined) {
      const newList = list;
      const exist = newList.find((elem) => elem?.getId() === item?.getId());
      console.log("exist", exist);

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
    console.log("mouseDown", { x, y });
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

  const drawLines = () => {
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

  const oResetCanvas = () => {
    setList([]);
    setPos({ x: 329, y: 663 });
    setPosDown({ x: 329, y: 663 });
    setLocked(false);
    setActivated(false);
    setIsMouseDown(false);
    onClearCanvas();
    updateCanvas();
    redPin.update(329, 663);
    redPin.draw();
  };

  const updateCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const image = new Image(1000, 800);
      image.src = IMG;
      image.onload = () => {
        const greenPin = new Image(20, 20);
        greenPin.src = PIN_START;
        greenPin.onload = () => {
          contextRef.current.drawImage(greenPin, 329, 663, 25, 30);
        };

        contextRef.current.drawImage(image, 0, 0, 1000, 800);
        if (showGrid) {
          createGridTiles();
        }
        drawLines();

        if (isMouseDown && !locked && activated) {
          redPin?.update(pos.x, pos.y);
          drawThis(pos.x, pos.y);
        }
        redPin?.draw();
        puntod.map((item, index) => {
          const i = new BoxRectangle(
            `puntod-${index}`,
            contextRef.current,
            "purple",
            item.x,
            item.y,
            item.w,
            item.h
          );
          if (i.collision(redPin) && locked == false) {
            console.log("lock is true");
            setLocked(true);
          }
          i.draw();
        });

        list.map((item) => {
          item.draw();
        });
      };
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 1000;
      canvas.height = 800;

      const context = canvas.getContext("2d");
      context.lineCap = "round";
      context.stokeStyle = "black";
      context.lineWidth = 5;
      contextRef.current = context;

      const redPin = new BoxRectangle(
        "pinStart",
        contextRef.current,
        "red",
        329,
        663,
        13,
        13
      );
      setRedPin(redPin);
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

  useEffect(() => {
    if (!locked)
      if (
        posDown.x + 10 >= redPin?.getX() &&
        redPin?.getX() + redPin?.getW() >= posDown.x &&
        posDown.y + 10 >= redPin?.getY() &&
        redPin?.getY() + redPin?.getH() >= posDown.y
      ) {
        console.log("collision ----->> ");
        setActivated(true);
      } else {
        setActivated(false);
      }
  }, [posDown, redPin, activated]);

  const enableGrid = (event) => {
    onClearCanvas();
    setShowGrid(event.target.checked);
    updateCanvas();
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid lg={8}>
          <canvas className="canvas-container-bar-char" ref={canvasRef} />
        </Grid>
        <Grid size={4}>
          <Button variant="contained" onClick={oResetCanvas}>
            Reset Map
          </Button>
          <Grid size={4}>
            <FormControlLabel
              checked={showGrid}
              onChange={enableGrid}
              control={<Checkbox defaultChecked />}
              label="Show Grid"
            />
          </Grid>
          <br />
          isMouseDown: {isMouseDown ? "true" : "false"}
          <br />
          pos: {JSON.stringify(pos)}
          <br />
          activated: {activated ? "true" : "false"}
          <br />
          list count: {list.length}
          <br />
          locked: {locked ? "true" : "false"}
        </Grid>
      </Grid>
    </>
  );
};
