import React from "react";
import { SectionHeading } from "./ui/SectionHeading";

export function WhySugaring({features}){
  return (
    <section id="why" className="dark-section" data-reveal>
      <SectionHeading eyebrow="Why Sugaring" dark>
        <h2>A gentler approach<br/>to hair removal.</h2>
      </SectionHeading>
      <div className="feature-grid">
        {features.map(([title,text],i)=>(
          <div key={title}><span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{text}</p></div>
        ))}
      </div>
    </section>
  );
}
