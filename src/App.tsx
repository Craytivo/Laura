import React from "react";
import type { Service } from "./types";
import { site } from "./features/site/data/site";
import { services } from "./features/services/data/services";
import { bundles } from "./features/bundles/data/bundles";
import { images } from "./features/gallery/data/images";
import { faq } from "./features/faq/data/faq";
import { buildBookingUrl } from "./features/booking/config/booking";
import { useReveal } from "./hooks/useReveal";
import { useScrollStory } from "./hooks/useScrollStory";
import { useTactileInteraction } from "./hooks/useTactileInteraction";
import { Header } from "./components/Header";
import { Hero } from "./features/site/components/Hero";
import { SignatureService } from "./features/site/components/SignatureService";
import { WhySugaring } from "./features/site/components/WhySugaring";
import { Services } from "./features/services/components/Services";
import { Gallery } from "./components/Gallery";
import { Bundles } from "./components/Bundles";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./features/booking/components/FinalCTA";
import { MobileBookingBar } from "./features/booking/components/MobileBookingBar";
import { Footer } from "./features/site/components/Footer";

export default function App(): React.ReactElement {
  const [isNavigationOpen, setIsNavigationOpen] = React.useState(false);
  const [selectedService, setSelectedService] = React.useState<Service | null>(null);
  useReveal();
  const activeSection = useScrollStory();
  useTactileInteraction();
  const bookingUrl = React.useMemo(buildBookingUrl, []);
  const book = React.useCallback(() => { window.open(bookingUrl, "_blank", "noopener,noreferrer"); }, [bookingUrl]);
  const navigateTo = React.useCallback((id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setIsNavigationOpen(false); }, []);
  const toggleService = React.useCallback((service: Service) => { setSelectedService(current => current?.id === service.id ? null : service); }, []);
  const signatureService = services.find(service => service.featured) ?? services[0];
  const heroImage = images.find(image => image.role === "hero");
  const signatureImage = images.find(image => image.role === "signature");
  const galleryImages = images.filter(image => image.role === "gallery");
  if (!signatureService || !heroImage || !signatureImage || galleryImages.length < 4) throw new Error("RU Sugaring content configuration is incomplete.");
  const allGalleryImages = [heroImage, signatureImage, ...galleryImages];
  return <div className="site">
    <Header open={isNavigationOpen} onToggle={() => setIsNavigationOpen(value => !value)} onNavigate={navigateTo} onBook={book} business={site} service={signatureService} />
    <main>
      <Hero image={heroImage} service={signatureService} business={site} onBook={book} onNavigate={navigateTo} />
      <SignatureService image={signatureImage} service={signatureService} business={site} onBook={book} />
      <WhySugaring features={site.why} />
      <Services services={services} selected={selectedService} onSelect={toggleService} bookingUrl={bookingUrl} />
      <Gallery images={allGalleryImages} />
      <Bundles bundles={bundles} bookingUrl={bookingUrl} />
      <FAQ items={faq} />
      <FinalCTA onBook={book} onNavigate={navigateTo} />
    </main>
    <MobileBookingBar selected={selectedService} fallback={signatureService} activeSection={activeSection} onBook={book} />
    <Footer business={site} onNavigate={navigateTo} />
  </div>;
}
