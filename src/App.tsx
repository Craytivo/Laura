import React from "react";
import type { Service } from "./types";
import { site } from "./data/site";
import { services } from "./data/services";
import { bundles } from "./data/bundles";
import { images } from "./data/images";
import { buildBookingUrl } from "./config/booking";
import { useReveal } from "./hooks/useReveal";
import { AppErrorBoundary } from "./components/AppErrorBoundary";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SignatureService } from "./components/SignatureService";
import { WhySugaring } from "./components/WhySugaring";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { Bundles } from "./components/Bundles";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { MobileBookingBar } from "./components/MobileBookingBar";
import { Footer } from "./components/Footer";

export default function App(): React.ReactElement {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<Service | null>(null);
  useReveal();

  const bookingUrl = React.useMemo(() => buildBookingUrl(), []);
  const book = React.useCallback(() => {
    window.open(bookingUrl, "_blank", "noopener,noreferrer");
  }, [bookingUrl]);

  const navigate = React.useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  }, []);

  const selectService = React.useCallback((service: Service) => {
    setSelected(current => current?.id === service.id ? null : service);
  }, []);

  const signature = services.find(service => service.featured) ?? services[0];
  const heroImage = images.find(image => image.role === "hero");
  const signatureImage = images.find(image => image.role === "signature");
  const galleryImages = images.filter(image => image.role === "gallery");

  if (!signature || !heroImage || !signatureImage || galleryImages.length < 4) {
    throw new Error("RU Sugaring content configuration is incomplete.");
  }

  return (
    <AppErrorBoundary>
      <div className="site">
        <Header open={open} onToggle={() => setOpen(value => !value)} onNavigate={navigate} onBook={book} business={site} service={signature} />
        <main>
          <Hero image={heroImage} service={signature} business={site} onBook={book} onNavigate={navigate} />
          <SignatureService image={signatureImage} service={signature} business={site} onBook={book} />
          <WhySugaring features={site.why} />
          <Services services={services} selected={selected} onSelect={selectService} bookingUrl={bookingUrl} />
          <Gallery images={[heroImage, signatureImage, ...galleryImages]} />
          <Bundles bundles={bundles} bookingUrl={bookingUrl} />
          <FAQ items={site.faq} />
          <FinalCTA onBook={book} onNavigate={navigate} />
        </main>
        <MobileBookingBar selected={selected} fallback={signature} onBook={book} />
        <Footer business={site} onNavigate={navigate} />
      </div>
    </AppErrorBoundary>
  );
}
