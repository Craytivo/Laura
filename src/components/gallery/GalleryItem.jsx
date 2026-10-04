import React from "react";
import { ResponsiveImage } from "../ResponsiveImage";

export function GalleryItem({ image, index, sizes }) {
  return (
    <div className={"gallery-item gallery-item-" + (index + 1)}>
      <ResponsiveImage image={image} className="real-image gallery-photo" loading="lazy" sizes={sizes} />
      <span className="gallery-index">0{index + 1}</span>
    </div>
  );
}
