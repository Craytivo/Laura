import React from "react";
import type { SiteImage } from "../types";

export interface ResponsiveImageProps {
  image: SiteImage;
  className?: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  sizes?: string;
}

function getOptimizedBasePath(src: string): string {
  return src
    .replace(/^\/images\//, "")
    .replace(/\.[^.]+$/, "");
}

export function ResponsiveImage({
  image,
  className = "",
  loading = "lazy",
  fetchPriority = "auto",
  sizes = "100vw",
}: ResponsiveImageProps): React.ReactElement {
  const basePath = getOptimizedBasePath(image.src);

  return (
    <picture>
      <source
        type="image/avif"
        srcSet={`/images/optimized/${basePath}.avif`}
      />
      <source
        type="image/webp"
        srcSet={`/images/optimized/${basePath}.webp`}
      />
      <img
        className={className}
        src={image.src}
        alt={image.alt}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        sizes={sizes}
      />
    </picture>
  );
}
