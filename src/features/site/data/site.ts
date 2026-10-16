import type { SiteConfig } from "../../../types";
export const site = {
  name:"RU Sugaring", shortName:"RU", location:"Edgemont, Edmonton, Canada", studioLabel:"Edmonton · Private Studio",
  description:"A private sugaring studio in Edmonton focused on comfortable appointments, thoughtful service, and beautifully smooth results.",
  tagline:"Smooth skin. Sweet confidence.",
  heroEyebrow:"Edmonton · Home-based sugaring", trust:["Private studio","One-on-one care","Clear pricing"],
  experience:[
    "A cozy, home-based sugaring studio where your appointment is all about you. No rushing, no pressure, and no crowded salon atmosphere—just a comfortable, private space where you can relax and feel at ease.",
    "Whether it’s your very first sugaring experience or you’re a seasoned regular, every appointment is personalized to you, your needs, and your comfort level. Take your time, ask questions, and settle in—we believe great results start with feeling comfortable.",
    "Come as you are. Leave feeling smooth, confident, and cared for."
  ],
  why:[{ title:"Thoughtful", description:"Your appointment is personal, not rushed. Every service is tailored to you." },{ title:"Private", description:"A comfortable home-based setting with one-on-one attention." },{ title:"Simple", description:"Clear services, straightforward pricing, and easy online booking." }],
  signature:{ kicker:"01", label:"The RU Signature", details:["Private studio","One-on-one care","Edmonton"] },
  nav:[{ label:"Services", id:"services" },{ label:"Why sugaring", id:"why" },{ label:"FAQ", id:"faq" }],
  footer:"Edgemont, Edmonton, Canada · Home-based sugaring studio"
} satisfies SiteConfig;
