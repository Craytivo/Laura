import type { BookingConfig, ServiceId } from "../types";

export const bookingConfig: BookingConfig = {
  provider:"Acuity",
  baseUrl:"https://rusugar.as.me/schedule/36a17782",
  query:{ utm_source:"website", utm_medium:"website", utm_content:"book_now" }
};

export function buildBookingUrl(serviceId?: ServiceId): string {
  const url = new URL(bookingConfig.baseUrl);
  Object.entries(bookingConfig.query).forEach(([key,value]) => url.searchParams.set(key,value));
  if (serviceId) url.searchParams.set("service", serviceId);
  return url.toString();
}
