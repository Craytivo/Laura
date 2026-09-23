import React from "react";
export function ResponsiveImage({image,className="",loading="lazy",fetchPriority="auto",sizes="100vw"}) {
  const base=image.src.replace(/^\/images\//,"").replace(/\.[^.]+$/,"");
  return <picture>
    <source type="image/avif" srcSet={`/images/optimized/${base}.avif`} />
    <source type="image/webp" srcSet={`/images/optimized/${base}.webp`} />
    <img className={className} src={image.src} alt={image.alt} loading={loading} fetchPriority={fetchPriority} decoding="async" sizes={sizes}/>
  </picture>;
}
