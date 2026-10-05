import { useEffect } from "react";

export function useTactileInteraction(): void {
  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!finePointer.matches || reducedMotion.matches) return;

    const buttons = Array.from(document.querySelectorAll<HTMLElement>("[data-magnetic]"));
    const cleanups = buttons.map(button => {
      const onMove = (event: PointerEvent) => {
        const rect = button.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 7;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 5;
        button.style.setProperty("--magnetic-x", `${x.toFixed(2)}px`);
        button.style.setProperty("--magnetic-y", `${y.toFixed(2)}px`);
      };

      const reset = () => {
        button.style.setProperty("--magnetic-x", "0px");
        button.style.setProperty("--magnetic-y", "0px");
      };

      button.addEventListener("pointermove", onMove);
      button.addEventListener("pointerleave", reset);
      button.addEventListener("blur", reset);

      return () => {
        button.removeEventListener("pointermove", onMove);
        button.removeEventListener("pointerleave", reset);
        button.removeEventListener("blur", reset);
      };
    });

    return () => cleanups.forEach(cleanup => cleanup());
  }, []);
}
