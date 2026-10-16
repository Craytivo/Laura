import React from "react";
import type { SiteImage } from "../../types";

export interface ResponsiveImageProps {
  image: SiteImage;
  className?: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  sizes?: string;
}

function getOptimizedBasePath(src: string): string {
  return src.replace(/^\/images\//, "").replace(/\.[^.]+$/, "");
}

export function ResponsiveImage({ image, className = "", loading = "lazy", fetchPriority = "auto", sizes = "100vw" }: ResponsiveImageProps): React.ReactElement {
  const imageRef = React.useRef<HTMLImageElement>(null);
  const [shouldLoad, setShouldLoad] = React.useState(loading === "eager");
  const basePath = getOptimizedBasePath(image.src);
  React.useEffect(() => {
    if (shouldLoad || !imageRef.current) return;
    const element = imageRef.current;
    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShouldLoad(true);
        observer.disconnect();
      }
    }, { rootMargin: "300px 0px" });
    observer.observe(element);
    return () => observer.disconnect();
  }, [shouldLoad]);
  const placeholder = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
  return <picture>
    <source type="image/avif" srcSet={shouldLoad ? `/images/optimized/${basePath}.avif` : undefined} />
    <source type="image/webp" srcSet={shouldLoad ? `/images/optimized/${basePath}.webp` : undefined} />
    <img ref={imageRef} className={className} src={shouldLoad ? image.src : placeholder} alt={image.alt} width={image.width} height={image.height} loading={loading} fetchPriority={fetchPriority} decoding="async" sizes={sizes} />
  </picture>;
}
