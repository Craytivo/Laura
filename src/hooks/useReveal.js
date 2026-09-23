import React from "react";

export function useReveal() {
  React.useEffect(() => {
    const items = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold:0.12, rootMargin:"0px 0px -8% 0px" });

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}
