import React from "react";
import type { Service } from "./types";
import { site } from "./data/site";
import { services } from "./data/services";
import { bundles } from "./data/bundles";
import { images } from "./data/images";
import { buildBookingUrl } from "./config/booking";
import { useReveal } from "./hooks/useReveal";
import { useScrollStory } from "./hooks/useScrollStory";
import { useTactileInteraction } from "./hooks/useTactileInteraction";
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
import { SectionProgress } from "./components/SectionProgress";

export default function App(): React.ReactElement {
  const [isNavigationOpen, setIsNavigationOpen] = React.useState(false);
  const [selectedService, setSelectedService] = React.useState<Service | null>(null);

  useReveal();
  const activeSection = useScrollStory();
  useTactileInteraction();

  const bookingUrl = React.useMemo(buildBookingUrl, []);

  const book = React.useCallback(() => {
    window.open(bookingUrl, "_blank", "noopener,noreferrer");
  }, [bookingUrl]);

  const navigateTo = React.useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsNavigationOpen(false);
  }, []);

  const toggleService = React.useCallback((service: Service) => {
    setSelectedService(current => current?.id === service.id ? null : service);
  }, []);

  const signatureService = services.find(service => service.featured) ?? services[0];
  const heroImage = images.find(image => image.role === "hero");
  const signatureImage = images.find(image => image.role === "signature");
  const galleryImages = images.filter(image => image.role === "gallery");

  if (!signatureService || !heroImage || !signatureImage || galleryImages.length < 4) {
    throw new Error("RU Sugaring content configuration is incomplete.");
  }

  const allGalleryImages = [heroImage, signatureImage, ...galleryImages];

  return (
    <div className="site">
      <Header
        open={isNavigationOpen}
        onToggle={() => setIsNavigationOpen(value => !value)}
        onNavigate={navigateTo}
        onBook={book}
        business={site}
        service={signatureService}
      />

      <SectionProgress activeSection={activeSection} onNavigate={navigateTo} />
      <main>
        <Hero
          image={heroImage}
          service={signatureService}
          business={site}
          onBook={book}
          onNavigate={navigateTo}
        />
        <SignatureService
          image={signatureImage}
          service={signatureService}
          business={site}
          onBook={book}
        />
        <WhySugaring features={site.why} />
        <Services
          services={services}
          selected={selectedService}
          onSelect={toggleService}
          bookingUrl={bookingUrl}
        />
        <Gallery images={allGalleryImages} />
        <Bundles bundles={bundles} bookingUrl={bookingUrl} />
        <FAQ items={site.faq} />
        <FinalCTA onBook={book} onNavigate={navigateTo} />
      </main>

      <MobileBookingBar
        selected={selectedService}
        fallback={signatureService}
        onBook={book}
      />
      <Footer business={site} onNavigate={navigateTo} />
    </div>
  );
}
