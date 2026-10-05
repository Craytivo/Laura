import React from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "./Button";
import { SectionHeading } from "./ui/SectionHeading";
import { ServiceCard } from "./services/ServiceCard";

export function Services({ services, selected, onSelect, bookingUrl }) {
  const [previewIndex, setPreviewIndex] = React.useState(0);
  const touchStart = React.useRef(null);
  const previewService = services[previewIndex];

  React.useEffect(() => {
    if (selected) {
      const index = services.findIndex(service => service.id === selected.id);
      if (index >= 0) setPreviewIndex(index);
    }
  }, [selected, services]);

  const movePreview = direction => {
    setPreviewIndex(current => (current + direction + services.length) % services.length);
  };

  const handleTouchStart = event => {
    touchStart.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = event => {
    if (touchStart.current === null) return;
    const end = event.changedTouches[0]?.clientX ?? touchStart.current;
    const delta = end - touchStart.current;
    touchStart.current = null;
    if (Math.abs(delta) < 42) return;
    movePreview(delta < 0 ? 1 : -1);
  };

  return (
    <section id="services" className="section services" data-reveal data-story-section>
      <span className="section-marker" aria-hidden="true">03 / SERVICE MENU</span>
      <SectionHeading eyebrow="Service Menu" description="Choose your service, then book your time directly through RU's Acuity schedule.">
        <h2>Pick your<br/><em>smooth.</em></h2>
      </SectionHeading>

      <div
        className="service-swipe"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        aria-label="Swipe through RU services"
      >
        <div className="service-swipe-top">
          <span>{String(previewIndex + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}</span>
          <span>SWIPE TO EXPLORE</span>
        </div>
        <div className="service-swipe-main">
          <button type="button" onClick={() => movePreview(-1)} aria-label="Previous service"><ArrowLeft size={16} /></button>
          <div>
            <strong>{previewService.name}</strong>
            <span>{previewService.price} · {previewService.duration}</span>
            <p>{previewService.description}</p>
          </div>
          <button type="button" onClick={() => movePreview(1)} aria-label="Next service"><ArrowRight size={16} /></button>
        </div>
        <button className="service-swipe-select" type="button" onClick={() => onSelect(previewService)}>
          {selected?.id === previewService.id ? "SELECTED" : "CHOOSE THIS SERVICE"} <ArrowUpRight size={14} />
        </button>
      </div>

      <div className="service-list">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} selected={selected} onSelect={onSelect} bookingUrl={bookingUrl}/>
        ))}
      </div>

      <div className="service-book-row">
        {selected ? (
          <Button as="a" href={bookingUrl} target="_blank" rel="noopener noreferrer">
            Book {selected.name} <ArrowUpRight size={15}/>
          </Button>
        ) : (
          <span>SELECT A SERVICE TO BEGIN</span>
        )}
      </div>
      <div className="service-note"><span>TAKE YOUR TIME</span><em>Every appointment is personal.</em></div>
    </section>
  );
}
