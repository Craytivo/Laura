import React from "react";
import { ArrowUpRight } from "lucide-react";
import { GalleryItem } from "./gallery/GalleryItem";

export function Gallery({ images }) {
  const galleryImages = images.slice(2, 6);

  return (
    <section className="gallery-section" data-reveal>
      <div className="gallery-intro">
        <div className="gallery-title">
          <div className="gallery-index-large" aria-hidden="true">03</div>
          <div>
            <p className="eyebrow">THE RU EDIT</p>
            <h2>A closer look<br /><em>at RU.</em></h2>
          </div>
        </div>

        <div className="gallery-intro-side">
          <span className="gallery-rule-label">PRIVATE STUDIO / EDMONTON</span>
          <p>
            A quiet space, thoughtful details, and results designed to leave you
            feeling polished — never rushed.
          </p>
          <a href="#book" className="gallery-link">
            Experience RU <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className="editorial-gallery" aria-label="RU Sugaring studio gallery">
        {galleryImages.map((image, index) => (
          <GalleryItem
            key={image.src}
            image={image}
            index={index}
            sizes={
              index === 0
                ? "(max-width: 800px) 100vw, 58vw"
                : index === 1
                  ? "(max-width: 800px) 50vw, 42vw"
                  : "(max-width: 800px) 50vw, 21vw"
            }
          />
        ))}
      </div>

      <div className="brand-moment brand-moment-gallery">
        <div className="brand-moment-mark" aria-hidden="true">RU</div>
        <div>
          <em>Softness is part of the service.</em>
          <span>RU SUGARING · EDMONTON</span>
        </div>
      </div>
    </section>
  );
}
