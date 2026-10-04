import { useEffect } from "react";

const REVEAL_SELECTOR = "[data-reveal]";

export function useReveal(): void {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)
    );

    if (elements.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      elements.forEach(element => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    elements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}
