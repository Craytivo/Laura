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
  const url = new URL(bookingConfig.baseUrl);

  Object.entries(bookingConfig.query).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  return url.toString();
}
