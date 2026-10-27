import { useEffect, useRef } from 'react';

// Import all 16 extracted frames from the original .ani file
import frame00 from '../assets/cursor/cursor_frame_00.png';
import frame01 from '../assets/cursor/cursor_frame_01.png';
import frame02 from '../assets/cursor/cursor_frame_02.png';
import frame03 from '../assets/cursor/cursor_frame_03.png';
import frame04 from '../assets/cursor/cursor_frame_04.png';
import frame05 from '../assets/cursor/cursor_frame_05.png';
import frame06 from '../assets/cursor/cursor_frame_06.png';
import frame07 from '../assets/cursor/cursor_frame_07.png';
import frame08 from '../assets/cursor/cursor_frame_08.png';
import frame09 from '../assets/cursor/cursor_frame_09.png';
import frame10 from '../assets/cursor/cursor_frame_10.png';
import frame11 from '../assets/cursor/cursor_frame_11.png';
import frame12 from '../assets/cursor/cursor_frame_12.png';
import frame13 from '../assets/cursor/cursor_frame_13.png';
import frame14 from '../assets/cursor/cursor_frame_14.png';
import frame15 from '../assets/cursor/cursor_frame_15.png';

const CURSOR_FRAMES = [
  frame00, frame01, frame02, frame03,
  frame04, frame05, frame06, frame07,
  frame08, frame09, frame10, frame11,
  frame12, frame13, frame14, frame15,
];

// Metadata extracted from original .ani:
// 16 frames, 32x32 pixels, hotspot at (7, 2), 100ms frame duration (6 jiffies)
const FRAME_DURATION_MS = 100;
const HOTSPOT_X = 7;
const HOTSPOT_Y = 2;
const CURSOR_SIZE = 32;

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const frameRefs = useRef<(HTMLImageElement | null)[]>([]);
  const frameIndexRef = useRef(0);
  const isOverTextInputRef = useRef(false);
  const isMouseInWindowRef = useRef(false);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    // Only activate on desktop devices with a fine pointer (mouse)
    const hasPointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!hasPointer.matches) return;

    // Check reduced motion preference
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedMotionRef.current = reducedMotionQuery.matches;

    const onReducedMotionChange = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches;
      if (e.matches) {
        // Freeze at frame 0
        frameRefs.current.forEach((el, idx) => {
          if (el) el.style.display = idx === 0 ? 'block' : 'none';
        });
        frameIndexRef.current = 0;
      }
    };
    reducedMotionQuery.addEventListener('change', onReducedMotionChange);

    // Inject stylesheet to hide default cursor across all elements,
    // preserving native text cursor for editable fields
    const styleEl = document.createElement('style');
    styleEl.id = 'custom-cursor-hide';
    styleEl.textContent = `
      *, *::before, *::after {
        cursor: none !important;
      }
      input, textarea, [contenteditable="true"] {
        cursor: text !important;
      }
    `;
    document.head.appendChild(styleEl);

    // Real-time mouse movement tracking without React re-renders
    const onMouseMove = (e: MouseEvent) => {
      isMouseInWindowRef.current = true;
      const target = e.target as HTMLElement | null;
      const isTextInput = !!(target && target.closest('input, textarea, [contenteditable="true"]'));
      isOverTextInputRef.current = isTextInput;

      if (cursorRef.current) {
        cursorRef.current.style.display = isTextInput ? 'none' : 'block';
        cursorRef.current.style.transform = `translate3d(${e.clientX - HOTSPOT_X}px, ${e.clientY - HOTSPOT_Y}px, 0)`;
      }
    };

    const onMouseLeave = () => {
      isMouseInWindowRef.current = false;
      if (cursorRef.current) {
        cursorRef.current.style.display = 'none';
      }
    };

    const onMouseEnter = (e: MouseEvent) => {
      isMouseInWindowRef.current = true;
      const target = e.target as HTMLElement | null;
      const isTextInput = !!(target && target.closest('input, textarea, [contenteditable="true"]'));
      isOverTextInputRef.current = isTextInput;

      if (cursorRef.current) {
        cursorRef.current.style.display = isTextInput ? 'none' : 'block';
        cursorRef.current.style.transform = `translate3d(${e.clientX - HOTSPOT_X}px, ${e.clientY - HOTSPOT_Y}px, 0)`;
      }
    };

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Frame animation loop with stacked DOM images for zero-flicker transitions
    const timer = setInterval(() => {
      if (reducedMotionRef.current) return;

      const prev = frameIndexRef.current;
      const next = (prev + 1) % CURSOR_FRAMES.length;
      frameIndexRef.current = next;

      if (frameRefs.current[prev]) {
        frameRefs.current[prev]!.style.display = 'none';
      }
      if (frameRefs.current[next]) {
        frameRefs.current[next]!.style.display = 'block';
      }
    }, FRAME_DURATION_MS);

    return () => {
      clearInterval(timer);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      reducedMotionQuery.removeEventListener('change', onReducedMotionChange);

      const injectedStyle = document.getElementById('custom-cursor-hide');
      if (injectedStyle) {
        injectedStyle.remove();
      }
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: CURSOR_SIZE,
        height: CURSOR_SIZE,
        pointerEvents: 'none',
        zIndex: 999999,
        display: 'none',
        willChange: 'transform',
      }}
      aria-hidden="true"
    >
      {CURSOR_FRAMES.map((src, i) => (
        <img
          key={i}
          ref={(el) => {
            frameRefs.current[i] = el;
          }}
          src={src}
          alt=""
          width={CURSOR_SIZE}
          height={CURSOR_SIZE}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: CURSOR_SIZE,
            height: CURSOR_SIZE,
            display: i === 0 ? 'block' : 'none',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
          draggable={false}
        />
      ))}
    </div>
  );
}
