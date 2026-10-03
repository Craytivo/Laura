import React from "react";
import { ResponsiveImage } from "./ResponsiveImage";

export function Gallery({ images }) {
  const galleryImages = images.slice(2, 6);
  return <section className="gallery-section" data-reveal><div className="gallery-heading"><div><p className="eyebrow">THE RU EDIT</p><h2>A closer look<br /><em>at RU.</em></h2></div><p>Studio details, smooth results, and the little things that make an appointment feel personal.</p></div><div className="editorial-gallery">{galleryImages.map((image,i)=><div className={`gallery-item gallery-item-${i+1}`} key={image.src}><ResponsiveImage image={image} className="real-image gallery-photo" loading="lazy" sizes={i===0 ? "(max-width: 800px) 100vw, 50vw" : "(max-width: 800px) 50vw, 25vw"} /><span className="gallery-index">0{i+1}</span></div>)}</div><div className="brand-moment brand-moment-gallery"><em>Softness is part of the service.</em><span>RU SUGARING · EDMONTON</span></div></section>;
}