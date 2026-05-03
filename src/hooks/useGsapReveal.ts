'use client';

import { useEffect, useRef, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/* ============================================================
   useGsapReveal
   ------------------------------------------------------------
   Reusable scroll-triggered reveal animation. Reveals each child
   matching the selector (default: `[data-reveal]`) when the
   container scrolls into view.

   Respects `prefers-reduced-motion` automatically via
   `gsap.matchMedia()`. When reduced-motion is on, elements
   render in their final state with no animation.

   Returns a ref to attach to the container element.

   USAGE:
     const ref = useGsapReveal();
     return (
       <section ref={ref}>
         <h2 data-reveal>Title</h2>
         <p data-reveal>Body</p>
       </section>
     );
   ============================================================ */

interface UseGsapRevealOptions {
  /** Selector for child elements to animate. Default: '[data-reveal]' */
  selector?: string;
  /** Y-axis distance to translate from. Default: 30 (px) */
  y?: number;
  /** Animation duration in seconds. Default: 0.9 */
  duration?: number;
  /** Stagger between children in seconds. Default: 0.12 */
  stagger?: number;
  /** ScrollTrigger start position. Default: 'top 80%' */
  start?: string;
  /** Whether the animation should replay on scroll back. Default: false */
  replay?: boolean;
}

export function useGsapReveal<T extends HTMLElement = HTMLElement>(
  options: UseGsapRevealOptions = {}
): RefObject<T | null> {
  const containerRef = useRef<T>(null);

  const {
    selector = '[data-reveal]',
    y = 30,
    duration = 0.9,
    stagger = 0.12,
    start = 'top 80%',
    replay = false,
  } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    /* Register plugin once per app — safe to call repeatedly */
    gsap.registerPlugin(ScrollTrigger);

    const targets = container.querySelectorAll(selector);
    if (targets.length === 0) return;

    const mm = gsap.matchMedia();

    /* Full motion */
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.set(targets, { opacity: 0, y });

      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container,
          start,
          toggleActions: replay
            ? 'play reverse play reverse'
            : 'play none none none',
        },
      });
    });

    /* Reduced motion — final state, no animation */
    mm.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set(targets, { opacity: 1, y: 0 });
    });

    return () => {
      mm.revert();
    };
  }, [selector, y, duration, stagger, start, replay]);

  return containerRef;
}
