import { useEffect, useRef } from "react";
import "./mapRoutePage.css";

export const MapRoutePage = () => {

  const canvasRef = useRef(null)
  const contextRef = useRef(null);

  const computeCanvasRec = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    console.log({ x, y });
    contextRef.current.fillStyle = 'blue';
    contextRef.current.fillRect(x, y, 50, 50);

    return { x, y };
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 800;
      canvas.height = 800;

      const context = canvas.getContext('2d');
      context.lineCap = 'round';
      context.stokeStyle = 'black'
      context.lineWidth = 5;
      contextRef.current = context;

      canvasRef.current.addEventListener("mousedown", computeCanvasRec);
      return () => {
        canvasRef.current.removeEventListener("mousedown", computeCanvasRec);
      }
    }
  }, [])
  
  // useEffect(() => {
  //   contextRef.current.fillStyle = 'blue';
  //   contextRef.current.fillRect(50, 50, 50, 50);
  //   contextRef.current.fillRect(100 + 20, 50, 50, 50);
  //   contextRef.current.fillRect(150 + 40, 50, 50, 50);
  // }, []);

  return (
    <>
      <div>MapRoutePage</div>
      <canvas className="canvas-container-bar-char" ref={canvasRef}></canvas>
    </>
  ); 
};
