export type ServiceId =
  | "brazilian"
  | "bikini"
  | "underarms"
  | "full-legs"
  | "half-legs"
  | "full-arms"
  | "half-arms"
  | "full-stomach"
  | "fingers-toes"
  | "full-face"
  | "tailored-add-ons";

export interface Service {
  id: ServiceId;
  name: string;
  price: string;
  duration: string;
  description: string;
  badge?: string;
  featured?: boolean;
}

export interface Bundle {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
}

export type ImageRole = "hero" | "signature" | "gallery";

export interface SiteImage {
  src: string;
  alt: string;
  priority: boolean;
  role: ImageRole;
}

export interface NavItem {
  label: string;
  id: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface WhyFeature {
  title: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  location: string;
  studioLabel: string;
  description: string;
  heroEyebrow: string;
  trust: readonly string[];
  experience: string;
  why: readonly WhyFeature[];
  signature: {
    kicker: string;
    label: string;
    details: readonly string[];
  };
  faq: readonly FAQItem[];
  nav: readonly NavItem[];
  footer: string;
}

export interface BookingConfig {
  provider: "Acuity";
  baseUrl: string;
  query: Readonly<Record<string, string>>;
}
