"use client";

import React, { useEffect, useRef } from 'react';

const NetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let scrollY = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.5 + 0.5;
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvasWidth) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvasHeight) this.vy = -this.vy;
      }

      draw(ctx: CanvasRenderingContext2D, scrollOffset: number, canvasHeight: number) {
        ctx.beginPath();
        const drawY = this.y - scrollOffset * 0.2; // Subtle parallax effect
        let wrappedY = drawY % canvasHeight;
        if (wrappedY < 0) wrappedY += canvasHeight;

        ctx.arc(this.x, wrappedY, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(37, 99, 235, 0.4)'; // blue-600 with soft opacity
        ctx.fill();
      }
    }

    let particles: Particle[] = [];

    const initParticles = () => {
      particles = [];
      const density = window.innerWidth < 768 ? 15000 : 20000;
      const particleCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / density), 80);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const drawLines = (scrollOffset: number) => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          
          let y1 = (p1.y - scrollOffset * 0.2) % canvas.height;
          if (y1 < 0) y1 += canvas.height;
          
          let y2 = (p2.y - scrollOffset * 0.2) % canvas.height;
          if (y2 < 0) y2 += canvas.height;

          const dx = p1.x - p2.x;
          const dy = y1 - y2;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = window.innerWidth < 768 ? 120 : 160;

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(p1.x, y1);
            ctx.lineTo(p2.x, y2);
            // Light opacity for elegance and subtlety
            const opacity = (1 - distance / maxDistance) * 0.15;
            ctx.strokeStyle = `rgba(37, 99, 235, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx, scrollY, canvas.height);
      });

      drawLines(scrollY);
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('scroll', handleScroll, { passive: true });

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default NetworkBackground;
