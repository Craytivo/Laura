import { useEffect, useState } from "react";

const SECTION_IDS = ["home", "signature", "why", "services", "gallery", "bundles", "faq", "book"] as const;
export type StorySectionId = typeof SECTION_IDS[number];

const PARALLAX_SELECTORS = ".hero-photo, .signature-photo, .gallery-photo";

export function useScrollStory(): StorySectionId {
  const [activeSection, setActiveSection] = useState<StorySectionId>("home");

  useEffect(() => {
    const sections = SECTION_IDS
      .map(id => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const section = visible[0]?.target as HTMLElement | undefined;
        if (section && SECTION_IDS.includes(section.id as StorySectionId)) {
          setActiveSection(section.id as StorySectionId);
        }
      },
      { threshold: [0.15, 0.35, 0.6], rootMargin: "-12% 0px -55% 0px" }
    );

    sections.forEach(section => observer.observe(section));

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointerFine = window.matchMedia("(pointer: fine)").matches;
    const isMobile = window.matchMedia("(max-width: 800px)").matches;
    const images = Array.from(document.querySelectorAll<HTMLElement>(PARALLAX_SELECTORS));

    if (prefersReducedMotion) {
      return () => observer.disconnect();
    }

    let frame = 0;

    const updateParallax = () => {
      frame = 0;
      const viewportCenter = window.innerHeight / 2;
      const distance = isMobile ? 0.018 : pointerFine ? 0.035 : 0.022;

      images.forEach(image => {
        const rect = image.getBoundingClientRect();
        const offset = (rect.top + rect.height / 2 - viewportCenter) * distance;
        const clamped = Math.max(-14, Math.min(14, -offset));
        image.style.setProperty("--ru-parallax", `${clamped.toFixed(2)}px`);
      });
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateParallax);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updateParallax();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return activeSection;
}
