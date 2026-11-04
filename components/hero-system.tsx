"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

export function HeroSystem() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const scene = useRef<HTMLDivElement>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const rotation = useRef(0.4);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const element = canvas.current;
    const container = scene.current;
    if (!element || !container) return;
    const ctx = element.getContext("2d");
    if (!ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 1,
      height = 1,
      frame = 0,
      visible = true,
      angle = rotation.current,
      previous = 0;
    const points = Array.from({ length: 150 }, (_, i) => {
      const y = 1 - (i / 149) * 2;
      const r = Math.sqrt(1 - y * y);
      const a = Math.PI * (3 - Math.sqrt(5)) * i;
      return { x: Math.cos(a) * r, y, z: Math.sin(a) * r };
    });
    const links: [number, number][] = [];
    points.forEach((a, i) =>
      points.forEach((b, j) => {
        if (j > i && Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z) < 0.34)
          links.push([i, j]);
      }),
    );
    function draw(time: number) {
      if (!ctx || !element) return;
      const dt = previous ? Math.min(time - previous, 40) : 16;
      previous = time;
      if (!reduced.matches && !paused) angle += dt * 0.00013;
      rotation.current = angle;
      ctx.clearRect(0, 0, width, height);
      const radius = Math.min(width * 0.35, height * 0.34);
      const rx = reduced.matches ? -0.22 : -0.22 + pointer.current.y * 0.2;
      const ry = angle + (reduced.matches ? 0 : pointer.current.x * 0.3);
      const rotated = points.map((p) => {
        const x = p.x * Math.cos(ry) + p.z * Math.sin(ry);
        const z = -p.x * Math.sin(ry) + p.z * Math.cos(ry);
        const y = p.y * Math.cos(rx) - z * Math.sin(rx);
        const depth = p.y * Math.sin(rx) + z * Math.cos(rx);
        const perspective = 3.5 / (3.5 - depth);
        return {
          x: width / 2 + x * radius * perspective,
          y: height * 0.47 + y * radius * perspective,
          z: depth,
          scale: perspective,
        };
      });
      const [r, g, b] = [194, 211, 238];
      const glow = ctx.createRadialGradient(
        width / 2,
        height * 0.47,
        0,
        width / 2,
        height * 0.47,
        radius * 1.4,
      );
      glow.addColorStop(0, `rgba(${r},${g},${b},0.055)`);
      glow.addColorStop(1, `rgba(${r},${g},${b},0)`);
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);
      links.forEach(([i, j]) => {
        const a = rotated[i],
          b = rotated[j];
        ctx.strokeStyle = `rgba(${r},${g},${[194, 211, 238][2]},${0.04 + ((a.z + b.z + 2) / 4) * 0.24})`;
        ctx.lineWidth = 0.65;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      });
      // Tilted orbital rings are projected from real three-dimensional coordinates.
      for (let orbit = 0; orbit < 3; orbit++) {
        ctx.beginPath();
        for (let i = 0; i <= 160; i++) {
          const a = (i / 160) * Math.PI * 2;
          const x = Math.cos(a) * 1.28,
            y = Math.sin(a) * Math.cos(orbit * 1.1 + 0.35) * 1.28,
            z = Math.sin(a) * Math.sin(orbit * 1.1 + 0.35) * 1.28;
          const xx = x * Math.cos(ry * 0.3) + z * Math.sin(ry * 0.3),
            zz = -x * Math.sin(ry * 0.3) + z * Math.cos(ry * 0.3);
          const yy = y * Math.cos(rx) - zz * Math.sin(rx),
            d = y * Math.sin(rx) + zz * Math.cos(rx),
            s = 3.5 / (3.5 - d);
          const px = width / 2 + xx * radius * s,
            py = height * 0.47 + yy * radius * s;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.strokeStyle = `rgba(${r},${g},${b},${0.12 + orbit * 0.025})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
      rotated
        .sort((a, b) => a.z - b.z)
        .forEach((p, i) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, (i % 11 === 0 ? 2.1 : 1) * p.scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r},${g},${b},${0.2 + (p.z + 1) * 0.35})`;
          ctx.fill();
        });
    }
    function tick(time: number) {
      if (visible && !document.hidden) draw(time);
      frame = requestAnimationFrame(tick);
    }
    function resize() {
      if (!element || !ctx || !container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      element.width = width * dpr;
      element.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(0);
    }
    const observer = new ResizeObserver(resize);
    observer.observe(container);
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      previous = 0;
    });
    intersection.observe(container);
    resize();
    if (!reduced.matches && !paused) frame = requestAnimationFrame(tick);
    const change = () => {
      cancelAnimationFrame(frame);
      resize();
      if (!reduced.matches && !paused) frame = requestAnimationFrame(tick);
    };
    reduced.addEventListener("change", change);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      intersection.disconnect();
      reduced.removeEventListener("change", change);
    };
  }, [paused]);

  return (
    <div className="intelligence-sculpture">
      <div
        className="sculpture-scene"
        ref={scene}
        onPointerMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          pointer.current = {
            x: (e.clientX - r.left) / r.width - 0.5,
            y: (e.clientY - r.top) / r.height - 0.5,
          };
        }}
        onPointerLeave={() => {
          pointer.current = { x: 0, y: 0 };
        }}
      >
        <canvas ref={canvas} aria-hidden="true" />
        <div className="sculpture-center" aria-hidden="true">
          <span>SN</span>
        </div>
        <button
          className="sculpture-pause"
          onClick={() => setPaused(!paused)}
          aria-label={paused ? "Play 3D animation" : "Pause 3D animation"}
        >
          {paused ? <Play size={13} /> : <Pause size={13} />}
        </button>
      </div>
    </div>
  );
}
