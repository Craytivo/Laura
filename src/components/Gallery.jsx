import React from "react";
import { GalleryItem } from "./gallery/GalleryItem";

export function Gallery({ images }) {
  const galleryImages = images.slice(2, 6);
  return (
    <section className="gallery-section" data-reveal>
      <div className="gallery-heading">
        <div><p className="eyebrow">THE RU EDIT</p><h2>A closer look<br /><em>at RU.</em></h2></div>
        <p>Studio details, smooth results, and the little things that make an appointment feel personal.</p>
      </div>
      <div className="editorial-gallery">
        {galleryImages.map((image, index) => (
          <GalleryItem
            key={image.src}
            image={image}
            index={index}
            sizes={index === 0 ? "(max-width: 800px) 100vw, 50vw" : "(max-width: 800px) 50vw, 25vw"}
          />
        ))}
      </div>
      <div className="brand-moment brand-moment-gallery"><em>Softness is part of the service.</em><span>RU SUGARING · EDMONTON</span></div>
    </section>
  );
}
