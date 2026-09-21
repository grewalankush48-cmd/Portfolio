'use client';

import { useEffect, useRef } from 'react';

export default function CyberMatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Matrix characters for cyber digital rain
    const chars = '01#$<>[]*!?_~XYZABCDEF789ΩΨΔ';
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));

    let frameCount = 0;

    const render = () => {
      // Semi-transparent black clear to create falling trails
      ctx.fillStyle = 'rgba(6, 1, 3, 0.12)';
      ctx.fillRect(0, 0, width, height);

      frameCount++;

      // Draw digital rain every 2 frames for smooth cyber effect
      if (frameCount % 2 === 0) {
        ctx.font = `${fontSize}px 'Share Tech Mono', monospace`;

        for (let i = 0; i < drops.length; i++) {
          const char = chars[Math.floor(Math.random() * chars.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;

          // Leading char is bright white-ruby, trailing chars are blood red
          if (Math.random() > 0.92) {
            ctx.fillStyle = '#fff0f3';
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#ff0033';
          } else {
            ctx.fillStyle = '#e11d48';
            ctx.shadowBlur = 4;
            ctx.shadowColor = '#990000';
          }

          ctx.fillText(char, x, y);
          ctx.shadowBlur = 0;

          if (y > height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Obsidian-Blood Canvas Background */}
      <div className="absolute inset-0 bg-[#060103] blood-grid-bg opacity-85"></div>

      {/* Pulsating Blood Red Nebulae / Spotlights */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-600/12 rounded-full blur-[160px] pointer-events-none animate-blood-pulse"></div>
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none animate-blood-pulse" style={{ animationDelay: '1.4s' }}></div>
      <div className="absolute bottom-10 left-1/3 w-[650px] h-[450px] bg-red-950/25 rounded-full blur-[180px] pointer-events-none"></div>

      {/* Falling Blood-Red Matrix Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-35" />

      {/* Horizontal Laser Scanning Line */}
      <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_15px_#ff0033] animate-laser pointer-events-none"></div>

      {/* CRT Scanline Overlay */}
      <div className="absolute inset-0 scanline-red opacity-50 pointer-events-none"></div>
    </div>
  );
}
