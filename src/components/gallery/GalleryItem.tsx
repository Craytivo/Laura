import React from "react";
import type { SiteImage } from "../../types";
import { ResponsiveImage } from "../ResponsiveImage";

const LABELS = ["THE STUDIO", "THE DETAILS", "THE FEEL", "THE FINISH"] as const;

interface GalleryItemProps {
  image: SiteImage;
  index: number;
  sizes: string;
}

export function GalleryItem({ image, index, sizes }: GalleryItemProps): React.ReactElement {
  return (
    <figure className={"gallery-item gallery-item-" + (index + 1)}>
      <ResponsiveImage image={image} className="real-image gallery-photo" loading="lazy" sizes={sizes} />
      <figcaption>
        <span>{String(index + 1).padStart(2, "0")}</span>
        <strong>{LABELS[index] ?? "RU SUGARING"}</strong>
      </figcaption>
    </figure>
  );
}
