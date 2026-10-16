import { useEffect, type RefObject } from "react";

export function useHeroMotion(heroRef: RefObject<HTMLElement | null>): void {
  useEffect(() => {
    const hero = heroRef.current;
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!hero || !finePointer.matches || reducedMotion.matches) return;

    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const render = () => {
      frame = 0;
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      hero.style.setProperty("--hero-motion-x", `${currentX.toFixed(2)}px`);
      hero.style.setProperty("--hero-motion-y", `${currentY.toFixed(2)}px`);

      if (Math.abs(targetX - currentX) > 0.01 || Math.abs(targetY - currentY) > 0.01) {
        frame = window.requestAnimationFrame(render);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      const bounds = hero.getBoundingClientRect();
      targetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 10;
      targetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 6;
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    const reset = () => {
      targetX = 0;
      targetY = 0;
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    hero.addEventListener("pointermove", onPointerMove, { passive: true });
    hero.addEventListener("pointerleave", reset, { passive: true });

    return () => {
      hero.removeEventListener("pointermove", onPointerMove);
      hero.removeEventListener("pointerleave", reset);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [heroRef]);
}
