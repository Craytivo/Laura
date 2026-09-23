import React from "react";
export function Gallery({ images }) {
  return <section className="gallery-section" data-reveal><div className="gallery-heading"><div><p className="eyebrow">THE RU EDIT</p><h2>A closer look<br /><em>at RU.</em></h2></div><p>Studio details, smooth results, and the little things that make an appointment feel personal.</p></div><div className="editorial-gallery">{images.slice(2).map((image,i)=><div className={`gallery-item gallery-item-${i+1}`} key={image.src}><img className="real-image gallery-photo" src={image.src} alt={image.alt} loading="lazy" decoding="async" /></div>)}</div></section>;
}
