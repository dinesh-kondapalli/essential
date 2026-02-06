"use client";

import { useEffect, useRef, useCallback } from "react";

const SUBTLE = " .,;:-_=+";
const DENSE = "·:;+-=~*#%@_|/\\<>!?$&0123456789abcdefghijklmnopqrstuvwxyz";

export default function MonospaceGrid() {
  const preRef = useRef<HTMLPreElement>(null);
  const gridRef = useRef<Uint8Array>(new Uint8Array(0));
  const colsRef = useRef(0);
  const rowsRef = useRef(0);
  const mouseCol = useRef(-1);
  const mouseRow = useRef(-1);
  const rafRef = useRef(0);
  const lastFlicker = useRef(0);

  const charAt = useCallback((idx: number): string => {
    const v = gridRef.current[idx];
    if (v === 0) return " ";
    if (v < 10) return SUBTLE[v];
    return DENSE[(v - 10) % DENSE.length];
  }, []);

  const randomChar = useCallback((): number => {
    const r = Math.random();
    if (r > 0.92) return 10 + Math.floor(Math.random() * DENSE.length);
    if (r > 0.85) return 1 + Math.floor(Math.random() * (SUBTLE.length - 1));
    return 0; // space
  }, []);

  const initGrid = useCallback(() => {
    const charWidth = 24;
    const charHeight = 18;
    const cols = Math.ceil(window.innerWidth / charWidth) + 2;
    const rows = Math.ceil(window.innerHeight / charHeight) + 2;
    colsRef.current = cols;
    rowsRef.current = rows;
    const grid = new Uint8Array(cols * rows);
    for (let i = 0; i < grid.length; i++) {
      grid[i] = randomChar();
    }
    gridRef.current = grid;
  }, [randomChar]);

  const render = useCallback(() => {
    if (!preRef.current) return;
    const cols = colsRef.current;
    const rows = rowsRef.current;
    const grid = gridRef.current;
    let out = "";
    for (let r = 0; r < rows; r++) {
      const offset = r * cols;
      for (let c = 0; c < cols; c++) {
        out += charAt(offset + c);
      }
      if (r < rows - 1) out += "\n";
    }
    preRef.current.textContent = out;
  }, [charAt]);

  useEffect(() => {
    initGrid();
    render();

    const tick = (now: number) => {
      const cols = colsRef.current;
      const rows = rowsRef.current;
      const grid = gridRef.current;

      // Ambient flicker every ~35ms (very fast, continuous)
      if (now - lastFlicker.current > 35) {
        lastFlicker.current = now;
        // Flicker 20-35 random single cells
        const count = 20 + Math.floor(Math.random() * 16);
        for (let i = 0; i < count; i++) {
          const idx = Math.floor(Math.random() * grid.length);
          grid[idx] = randomChar();
        }
        // Flicker 4-7 small clusters
        const clusters = 4 + Math.floor(Math.random() * 4);
        for (let c = 0; c < clusters; c++) {
          const cr = Math.floor(Math.random() * rows);
          const cc = Math.floor(Math.random() * cols);
          const rad = 1 + Math.floor(Math.random() * 3);
          for (let dr = -rad; dr <= rad; dr++) {
            for (let dc = -rad; dc <= rad; dc++) {
              const nr = cr + dr;
              const nc = cc + dc;
              if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
                if (dr * dr + dc * dc <= rad * rad && Math.random() > 0.25) {
                  grid[nr * cols + nc] = randomChar();
                }
              }
            }
          }
        }
        // Occasional full-line flicker
        if (Math.random() > 0.85) {
          const lineRow = Math.floor(Math.random() * rows);
          for (let lc = 0; lc < cols; lc++) {
            if (Math.random() > 0.4) {
              grid[lineRow * cols + lc] = randomChar();
            }
          }
        }
      }

      // Cursor-driven flicker: 360-degree ring within radius 5
      const mc = mouseCol.current;
      const mr = mouseRow.current;
      if (mc >= 0 && mr >= 0) {
        const radius = 5;
        for (let dr = -radius; dr <= radius; dr++) {
          for (let dc = -radius; dc <= radius; dc++) {
            const dist = Math.sqrt(dr * dr + dc * dc);
            if (dist > radius) continue;
            const nr = mr + dr;
            const nc = mc + dc;
            if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue;
            // Probability inversely proportional to distance: closer = more active
            const prob = 1 - dist / radius;
            if (Math.random() < prob * 0.7) {
              // Displace character - push outward from cursor center
              const angle = Math.atan2(dr, dc);
              const pushDist = Math.round(1 + Math.random() * 1.5);
              const targetR = nr + Math.round(Math.sin(angle) * pushDist);
              const targetC = nc + Math.round(Math.cos(angle) * pushDist);
              if (targetR >= 0 && targetR < rows && targetC >= 0 && targetC < cols) {
                // Move the char outward
                grid[targetR * cols + targetC] = grid[nr * cols + nc] || randomChar();
              }
              // Replace original position with a new random char
              grid[nr * cols + nc] = randomChar();
            }
          }
        }
      }

      render();
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    const handleResize = () => {
      initGrid();
      render();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [initGrid, render, randomChar]);

  useEffect(() => {
    const charWidth = 24;
    const charHeight = 18;

    const handleMouseMove = (e: MouseEvent) => {
      mouseCol.current = Math.floor(e.clientX / charWidth);
      mouseRow.current = Math.floor(e.clientY / charHeight);
    };

    const handleMouseLeave = () => {
      mouseCol.current = -1;
      mouseRow.current = -1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 z-[-5] size-full h-screen w-full overflow-x-hidden overflow-y-hidden">
      <pre
        ref={preRef}
        className="z-0 size-full select-none font-mono text-[#d7d7d7] text-[18px] leading-none"
        aria-hidden="true"
        style={{
          fontFamily: '"Geist Mono", ui-monospace, monospace',
          fontSize: "18px",
          lineHeight: "18px",
          whiteSpace: "pre",
          letterSpacing: "6px",
          marginLeft: "5.1px",
          marginRight: "5.1px",
        }}
      />
    </div>
  );
}
