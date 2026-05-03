'use client';

import { useEffect, useState } from 'react';

/* ============================================================
   useScrollDirection
   ------------------------------------------------------------
   Tracks scroll direction with requestAnimationFrame throttling
   to keep the handler at 60fps. Returns:
   - direction: 'up' | 'down' | null (null until threshold met)
   - scrolled:  true once user has scrolled past `revealThreshold`

   Configuration prevents the navbar from feeling jumpy:
   - `deltaThreshold`: ignore micro-scrolls (< 5px)
   - `revealThreshold`: don't hide near top of page (< 120px)
   ============================================================ */

interface UseScrollDirectionOptions {
  /** Minimum px change to register a direction change. Default: 5 */
  deltaThreshold?: number;
  /** Don't hide the bar above this scroll position. Default: 120 */
  revealThreshold?: number;
}

interface UseScrollDirectionResult {
  direction: 'up' | 'down' | null;
  scrolled: boolean;
}

export function useScrollDirection(
  options: UseScrollDirectionOptions = {}
): UseScrollDirectionResult {
  const { deltaThreshold = 5, revealThreshold = 120 } = options;

  const [direction, setDirection] = useState<'up' | 'down' | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY;

      /* Always force visible near the top, regardless of direction */
      if (currentY < revealThreshold) {
        setDirection('up');
        setScrolled(false);
      } else {
        setScrolled(true);

        if (Math.abs(delta) >= deltaThreshold) {
          setDirection(delta > 0 ? 'down' : 'up');
        }
      }

      lastY = currentY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    /* Initialize once on mount so SSR-rendered state matches reality */
    update();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [deltaThreshold, revealThreshold]);

  return { direction, scrolled };
}
