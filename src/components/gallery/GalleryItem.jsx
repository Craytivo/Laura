import React from "react";
import { ResponsiveImage } from "../ResponsiveImage";

const labels = ["THE STUDIO", "THE DETAILS", "THE FEEL", "THE FINISH"];

export function GalleryItem({ image, index, sizes }) {
  return (
    <figure className={"gallery-item gallery-item-" + (index + 1)}>
      <ResponsiveImage image={image} className="real-image gallery-photo" loading="lazy" sizes={sizes} />
      <figcaption>
        <span>{String(index + 1).padStart(2, "0")}</span>
        <strong>{labels[index]}</strong>
      </figcaption>
    </figure>
  );
}
