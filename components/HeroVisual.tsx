"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  angle: number;
  speed: number;
  orbitRadius: number;
}

export default function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let nodes: Node[] = [];
    const maxDistance = 120; // Maximum distance to draw lines

    // Determine performance tier (fewer nodes on mobile)
    const isMobile = window.innerWidth < 768;
    const nodeCount = isMobile ? 45 : 100;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      initNodes();
    };

    const initNodes = () => {
      nodes = [];
      const width = canvas.width;
      const height = canvas.height;

      for (let i = 0; i < nodeCount; i++) {
        // Distribute nodes randomly
        const x = Math.random() * width;
        const y = Math.random() * height;
        nodes.push({
          x: x,
          y: y,
          baseX: x,
          baseY: y,
          vx: 0,
          vy: 0,
          radius: Math.random() * 2 + 1,
          angle: Math.random() * Math.PI * 2,
          speed: (Math.random() * 0.5 + 0.2) * (prefersReducedMotion ? 0.1 : 1),
          orbitRadius: Math.random() * 15 + 5,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      const width = canvas.width;
      const height = canvas.height;

      // Update and draw nodes
      nodes.forEach((node) => {
        // Orbit motion (subtle floating)
        if (!prefersReducedMotion) {
          node.angle += node.speed * 0.02;
          node.baseX += Math.cos(node.angle) * 0.1;
          node.baseY += Math.sin(node.angle) * 0.1;
        }

        // Mouse interaction
        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const forceRadius = 150;

          if (distance < forceRadius) {
            // Push/pull force based on distance
            const force = (forceRadius - distance) / forceRadius;
            const angle = Math.atan2(dy, dx);
            // Repel effect
            const targetX = node.x - Math.cos(angle) * force * 40;
            const targetY = node.y - Math.sin(angle) * force * 40;

            node.vx += (targetX - node.x) * 0.1;
            node.vy += (targetY - node.y) * 0.1;
          }
        }

        // Apply velocities and spring back to base positions
        node.vx += (node.baseX - node.x) * 0.05;
        node.vy += (node.baseY - node.y) * 0.05;

        // Apply friction
        node.vx *= 0.85;
        node.vy *= 0.85;

        node.x += node.vx;
        node.y += node.vy;

        // Boundary checks (bounce back)
        if (node.x < 0 || node.x > width) node.baseX = Math.random() * width;
        if (node.y < 0 || node.y > height) node.baseY = Math.random() * height;

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        // Gradient color for node based on its position
        const colorRatio = node.x / width;
        ctx.fillStyle = `rgba(${Math.floor(99 + colorRatio * 100)}, 102, ${Math.floor(241 - colorRatio * 50)}, 0.7)`;
        ctx.fill();
      });

      // Draw connection lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const alpha = (maxDistance - distance) / maxDistance * 0.15;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            
            // Subtle gradient line
            const grad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            grad.addColorStop(0, `rgba(99, 102, 241, ${alpha})`);
            grad.addColorStop(1, `rgba(6, 182, 212, ${alpha})`);
            
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Listeners
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current.x = e.touches[0].clientX - rect.left;
        mouseRef.current.y = e.touches[0].clientY - rect.top;
        mouseRef.current.active = true;
      }
    };

    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("touchmove", handleTouchMove);
    canvas.addEventListener("touchend", handleMouseLeave);

    // Initial setup
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: "auto",
        opacity: 0.8,
      }}
    />
  );
}
