import React, { JSX, useRef, useEffect, useState } from 'react';

function BackgroundTiles() {
    var canvasRef = useRef<HTMLCanvasElement>(null);
    const mousePosRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size to full window
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        // Mouse event listener to update background effects
        const handleMouseMove = (e: MouseEvent) => {
            var mousePos = mousePosRef.current;
            const x = e.clientX;
            const y = e.clientY;
            mousePos.x = x;
            mousePos.y = y;
        };
        window.addEventListener("mousemove", handleMouseMove)

        // Draw loop example
        const draw = () => {
            var mousePos = mousePosRef.current;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = `red`;
            ctx.fillRect(mousePos.x - 25, mousePos.y - 25, 50, 50);

            requestAnimationFrame(draw);
        };

        draw();

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
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
      }}
    />
  );
}

export default BackgroundTiles;