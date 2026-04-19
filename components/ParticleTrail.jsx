"use client";

import { useCallback, useEffect, useRef, useState } from "react";

function shouldEnableParticles() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return false;
  }
  const minLg = window.matchMedia("(min-width: 1024px)");
  const finePointer = window.matchMedia("(pointer: fine)");
  return minLg.matches && finePointer.matches;
}

export default function ParticleTrail() {
  const [particles, setParticles] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const particleIdRef = useRef(0);
  const isMountedRef = useRef(true);

  const addParticle = useCallback((x, y) => {
    const colors = ["#00ffaa", "#a855f7", "#22d3ee", "#f97316"];
    const id = particleIdRef.current++;
    const newParticle = {
      id,
      x,
      y,
      size: Math.random() * 6 + 2,
      opacity: 1,
      color: colors[Math.floor(Math.random() * colors.length)],
    };

    setParticles((prev) => [...prev.slice(-30), newParticle]);

    setTimeout(() => {
      if (!isMountedRef.current) return;
      setParticles((prev) => prev.filter((p) => p.id !== id));
    }, 800);
  }, []);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const update = () => {
      setVisible(shouldEnableParticles());
    };

    update();

    const mqLg = window.matchMedia("(min-width: 1024px)");
    const mqPointer = window.matchMedia("(pointer: fine)");
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    mqLg.addEventListener("change", update);
    mqPointer.addEventListener("change", update);
    mqMotion.addEventListener("change", update);

    return () => {
      mqLg.removeEventListener("change", update);
      mqPointer.removeEventListener("change", update);
      mqMotion.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;

    let lastX = null;
    let lastY = null;
    let throttle = false;
    const timeouts = [];

    const onMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setMousePos({ x, y });

      if (throttle) return;
      throttle = true;

      if (lastX === null || lastY === null) {
        lastX = x;
        lastY = y;
        setTimeout(() => {
          throttle = false;
        }, 50);
        return;
      }

      const dist = Math.hypot(x - lastX, y - lastY);
      const particleCount = Math.min(Math.floor(dist / 5), 5);

      for (let i = 0; i < particleCount; i++) {
        timeouts.push(
          setTimeout(() => {
            if (isMountedRef.current) addParticle(x, y);
          }, i * 30)
        );
      }

      lastX = x;
      lastY = y;

      setTimeout(() => {
        throttle = false;
      }, 50);
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      timeouts.forEach(clearTimeout);
    };
  }, [visible, addParticle]);

  if (!visible) {
    return null;
  }

  return (
    <>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle-trail-dot"
          style={{
            left: particle.x - particle.size / 2,
            top: particle.y - particle.size / 2,
            width: particle.size,
            height: particle.size,
            background: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
        />
      ))}

      <div
        className="particle-trail-ring"
        style={{
          left: mousePos.x - 30,
          top: mousePos.y - 30,
        }}
        aria-hidden
      />
    </>
  );
}
