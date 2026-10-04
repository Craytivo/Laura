import type { BookingConfig } from "../types";

export const bookingConfig: BookingConfig = {
  provider: "Acuity",
  baseUrl: "https://rusugar.as.me/schedule/36a17782",
  query: {
    utm_source: "website",
    utm_medium: "website",
    utm_content: "book_now"
  }
};

export function buildBookingUrl(): string {
  let url: URL;

  try {
    url = new URL(bookingConfig.baseUrl);
  } catch {
    throw new Error("Invalid RU Sugaring booking URL.");
  }

  if (!["https:", "http:"].includes(url.protocol)) {
    throw new Error("RU Sugaring booking URL must use HTTP(S).");
  }

  Object.entries(bookingConfig.query).forEach(([key, value]) => {
    if (key && value) url.searchParams.set(key, value);
  });

  return url.toString();
}
