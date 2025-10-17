import React, { JSX, useRef, useEffect } from 'react';
import { GridRenderer } from './backgroundRender';

const START_TIME = new Date();
START_TIME.setHours(0, 0, 0, 0);

interface BackgroundTilesProps {
  setGlEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

function BackgroundTiles({setGlEnabled}: BackgroundTilesProps): JSX.Element {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const gridRef = useRef<GridRenderer>(null);
    const mousePosRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
      const canvas = canvasRef.current;

      if (!canvas) return;

      const gl: WebGL2RenderingContext | null = canvas.getContext("webgl2");
      if (gl) {
        setGlEnabled(true);
      } else {
        setGlEnabled(false);
        console.log("WebGL is disabled, this website will look ugly :(");
        return;
      }

      // Set canvas size to full window
      const resize = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          gl.viewport(0, 0, window.innerWidth, window.innerHeight)
          gridRef.current?.resize(canvas.width, canvas.height);

          // Changing canvas size completely wipes our canvas, re-render to avoid flickering
          const mousePos = mousePosRef.current;
          gridRef.current?.render(mousePos.x, mousePos.y, (Date.now() - START_TIME.getTime()) / 1000);
      };

      resize();
      window.addEventListener("resize", resize);

      gridRef.current = new GridRenderer(gl, canvas.width, canvas.height);

      // Mouse event listener to update background effects
      const handleMouseMove = (e: MouseEvent) => {
        const mousePos = mousePosRef.current;
        const x = e.clientX;
        const y = e.clientY;
        mousePos.x = x;
        mousePos.y = y;
      };
      window.addEventListener("mousemove", handleMouseMove)

      // Animation loop
      const targetFPS = 15;
      const frameDuration = 1000 / targetFPS; // ~66.67 ms
      let lastFrameTime = 0;
      const draw = (time = 0) => {
        if (time - lastFrameTime >= frameDuration) {
          lastFrameTime = time;

          const mousePos = mousePosRef.current;
          gridRef.current?.render(mousePos.x, mousePos.y, (Date.now() - START_TIME.getTime()) / 1000);
        }
        requestAnimationFrame(draw);
      };
      requestAnimationFrame(draw);

      return () => {
        // Remove event listeners upon unmount
        window.removeEventListener("resize", resize);
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        backgroundColor: 'black', /* Default, if no gl context */
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
}

export default BackgroundTiles;
