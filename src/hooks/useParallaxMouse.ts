import { useState, useEffect, useRef } from 'react';

export interface ParallaxState {
  x: number; // Normalized -1 to 1
  y: number; // Normalized -1 to 1
  smoothX: number; // Damped / interpolated
  smoothY: number; // Damped / interpolated
}

export function useParallaxMouse(damping: number = 0.08) {
  const [mouse, setMouse] = useState<ParallaxState>({
    x: 0,
    y: 0,
    smoothX: 0,
    smoothY: 0,
  });

  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const width = window.innerWidth || 1;
      const height = window.innerHeight || 1;
      // Calculate normalized coords (-1 to +1)
      const nx = ((e.clientX / width) - 0.5) * 2;
      const ny = ((e.clientY / height) - 0.5) * 2;
      targetRef.current = {
        x: Math.max(-1, Math.min(1, nx)),
        y: Math.max(-1, Math.min(1, ny)),
      };
    };

    const handleMouseLeave = () => {
      targetRef.current = { x: 0, y: 0 };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const width = window.innerWidth || 1;
        const height = window.innerHeight || 1;
        const nx = ((touch.clientX / width) - 0.5) * 2;
        const ny = ((touch.clientY / height) - 0.5) * 2;
        targetRef.current = {
          x: Math.max(-1, Math.min(1, nx)),
          y: Math.max(-1, Math.min(1, ny)),
        };
      }
    };

    const handleTouchEnd = () => {
      targetRef.current = { x: 0, y: 0 };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    const updateLoop = () => {
      // Linear interpolation (lerp) for ultra-smooth easing
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * damping;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * damping;

      setMouse({
        x: targetRef.current.x,
        y: targetRef.current.y,
        smoothX: currentRef.current.x,
        smoothY: currentRef.current.y,
      });

      rafId.current = requestAnimationFrame(updateLoop);
    };

    rafId.current = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [damping]);

  return mouse;
}
