export type ServiceId =
  | "brazilian" | "bikini" | "underarms" | "full-legs" | "half-legs"
  | "full-arms" | "half-arms" | "full-stomach" | "fingers-toes"
  | "full-face" | "tailored-add-ons";

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

export interface SiteImage {
  src: string;
  alt: string;
  priority: boolean;
}

export interface LoyaltyConfig {
  sessions: number;
  discount: string;
  heading: [string, string];
  body: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  location: string;
  studioLabel: string;
  description: string;
  heroEyebrow: string;
  trust: string[];
  experience: string;
  why: Array<[string, string]>;
  signature: { kicker: string; label: string; details: string[] };
  loyalty: LoyaltyConfig;
  faq: Array<[string, string]>;
  nav: string[];
  footer: string;
}

export interface BookingConfig {
  provider: "Acuity";
  baseUrl: string;
  query: Record<string, string>;
}
