import type { SiteConfig } from "../types";

export const site = {
  name:"RU Sugaring",
  shortName:"RU",
  location:"Edmonton, Alberta",
  studioLabel:"Edmonton · Private Studio",
  description:"A private sugaring studio in Edmonton focused on comfortable appointments, thoughtful service, and beautifully smooth results.",
  heroEyebrow:"Edmonton · Home-based sugaring",
  trust:["Private studio","One-on-one care","Clear pricing"],
  experience:"RU Sugaring is a private, home-based studio where every appointment is intentionally personal. Come in, get comfortable, and leave feeling smooth.",
  why:[
    { title:"Thoughtful", description:"Your appointment is personal, not rushed. Every service is tailored to you." },
    { title:"Private", description:"A comfortable home-based setting with one-on-one attention." },
    { title:"Simple", description:"Clear services, straightforward pricing, and easy online booking." }
  ],
  signature:{ kicker:"01", label:"The RU Signature", details:["Private studio","One-on-one care","Edmonton"] },
  faq:[
    { question:"Where are you located?", answer:"RU Sugaring is a private home-based studio in Edmonton. Exact location details can be provided with your booking." },
    { question:"How do I book?", answer:"Choose a service on this site, then continue to the RU Sugaring Acuity booking page to select an available time." },
    { question:"What should I do before my appointment?", answer:"Arrive with clean skin and avoid heavy lotions or oils on the area being sugared." },
    { question:"What if I need to cancel?", answer:"Booking and cancellation details will be listed here once the RU Sugaring policy is finalized." }
  ],
  nav:[
    { label:"Services", id:"services" },
    { label:"Why sugaring", id:"why" },
    { label:"FAQ", id:"faq" }
  ],
  footer:"Edmonton, Alberta · Home-based sugaring studio"
} satisfies SiteConfig;
