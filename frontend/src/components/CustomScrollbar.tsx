import React, { useEffect, useState, useRef } from 'react';

export default function CustomScrollbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [windowHeight, setWindowHeight] = useState(
    typeof window !== 'undefined' ? window.innerHeight : 800
  );
  const [navBottom, setNavBottom] = useState(72);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const starRef = useRef<HTMLDivElement>(null);

  const starSize = 22;
  const bottomPadding = 20;
  const starTopMin = navBottom + 2;
  const starTopMax = Math.max(starTopMin, windowHeight - bottomPadding - starSize);
  const travelDistance = Math.max(0, starTopMax - starTopMin);

  useEffect(() => {
    let animationFrameId: number;

    const updateMetrics = () => {
      const h = window.innerHeight;
      setWindowHeight(h);

      const nav = document.querySelector('nav');
      if (nav) {
        setNavBottom(nav.getBoundingClientRect().bottom);
      }

      const maxScroll = document.documentElement.scrollHeight - h;
      if (maxScroll > 0 && !isDraggingRef.current) {
        const currentProgress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
        setScrollProgress(currentProgress);
        if (starRef.current) {
          const currentTop = starTopMin + currentProgress * travelDistance;
          starRef.current.style.top = `${currentTop}px`;
        }
      }
    };

    const onScroll = () => {
      if (isDraggingRef.current) return;
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateMetrics);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateMetrics, { passive: true });
    updateMetrics();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateMetrics);
    };
  }, [starTopMin, travelDistance]);

  const updatePosition = (clientY: number) => {
    const clampedY = Math.max(starTopMin, Math.min(starTopMax, clientY - starSize / 2));
    const newProgress = travelDistance > 0 ? (clampedY - starTopMin) / travelDistance : 0;

    // Immediate zero-lag visual update
    if (starRef.current) {
      starRef.current.style.top = `${clampedY}px`;
    }
    setScrollProgress(newProgress);

    // Immediate scroll update without smooth animation queueing
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (maxScroll > 0) {
      window.scrollTo(0, newProgress * maxScroll);
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    isDraggingRef.current = true;

    // Disable smooth scrolling temporarily for instant real-time dragging
    document.documentElement.style.scrollBehavior = 'auto';

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Fallback if pointer capture unsupported
    }

    updatePosition(e.clientY);

    const onPointerMove = (moveEvent: PointerEvent) => {
      moveEvent.preventDefault();
      updatePosition(moveEvent.clientY);
    };

    const onPointerUp = (upEvent: PointerEvent) => {
      setIsDragging(false);
      isDraggingRef.current = false;
      document.documentElement.style.scrollBehavior = '';

      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      try {
        if (e.currentTarget.hasPointerCapture(upEvent.pointerId)) {
          e.currentTarget.releasePointerCapture(upEvent.pointerId);
        }
      } catch {
        // Ignored
      }
    };

    window.addEventListener('pointermove', onPointerMove, { passive: false });
    window.addEventListener('pointerup', onPointerUp, { passive: true });
  };

  const topPx = starTopMin + scrollProgress * travelDistance;

  return (
    <div
      className="fixed right-0.5 top-0 bottom-0 w-5 z-50 pointer-events-auto select-none hidden md:block cursor-pointer"
      onPointerDown={handlePointerDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        if (!isDraggingRef.current) setIsHovered(false);
      }}
      aria-hidden="true"
    >
      {/* Soft lavender glowing vertical rail starting immediately below navbar */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-[2px] rounded-full pointer-events-none transition-all duration-300"
        style={{
          top: `${navBottom}px`,
          bottom: '12px',
          background:
            isHovered || isDragging
              ? 'linear-gradient(180deg, rgba(196, 181, 253, 0.3) 0%, rgba(196, 181, 253, 0.85) 15%, rgba(196, 181, 253, 0.85) 85%, rgba(196, 181, 253, 0.3) 100%)'
              : 'linear-gradient(180deg, rgba(196, 181, 253, 0.15) 0%, rgba(196, 181, 253, 0.5) 15%, rgba(196, 181, 253, 0.5) 85%, rgba(196, 181, 253, 0.15) 100%)',
          boxShadow:
            isHovered || isDragging
              ? '0 0 8px rgba(167, 139, 250, 0.65), 0 0 16px rgba(139, 92, 246, 0.4)'
              : '0 0 6px rgba(167, 139, 250, 0.35), 0 0 14px rgba(139, 92, 246, 0.18)',
        }}
      />

      {/* Floating glowing ✦ star handle */}
      <div
        ref={starRef}
        className="absolute left-1/2 flex items-center justify-center select-none cursor-grab active:cursor-grabbing"
        style={{
          top: `${topPx}px`,
          width: `${starSize}px`,
          height: `${starSize}px`,
          fontSize: '20px',
          lineHeight: 1,
          color: isDragging ? '#ffffff' : isHovered ? '#ffffff' : '#e9d5ff',
          textShadow: isDragging
            ? '0 0 8px rgba(255, 255, 255, 1), 0 0 16px rgba(196, 181, 253, 1), 0 0 24px rgba(168, 85, 247, 0.8)'
            : isHovered
            ? '0 0 6px rgba(233, 213, 255, 1), 0 0 14px rgba(167, 139, 250, 0.85), 0 0 20px rgba(139, 92, 246, 0.5)'
            : '0 0 5px rgba(196, 181, 253, 0.9), 0 0 12px rgba(139, 92, 246, 0.6)',
          transform: `translate(-50%, 0) scale(${
            isDragging ? 1.25 : isHovered ? 1.15 : 1
          })`,
          transition: isDragging ? 'none' : 'transform 150ms ease',
        }}
      >
        ✦
      </div>
    </div>
  );
}
