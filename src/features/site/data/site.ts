import type { SiteConfig } from "../../../types";

export const site = {
  name:"RU Sugaring", shortName:"RU", location:"Edgemont, Edmonton, Canada", studioLabel:"Edmonton - Private Studio",
  description:"A private sugaring studio in Edmonton focused on comfortable appointments, thoughtful service, and beautifully smooth results.",
  tagline:"Smooth skin. Sweet confidence.",
  heroEyebrow:"Edmonton - Home-based sugaring", trust:["Private studio","One-on-one care","Clear pricing"],
  whyStory:[
    "Hidradenitis suppurativa (HS) is a chronic inflammatory skin condition that can cause painful, inflamed bumps or lumps to develop under the skin.",
    "HS is not caused by poor hygiene, is not contagious, is not simply an infection, and is not just ingrown hairs.",
    "HS isn't my fault and isn't yours. HS is a chronic inflammatory skin disease (more specifically, a chronic inflammatory disorder involving hair follicles).",
    "For me, sugaring has been a less irritating alternative to shaving. Because sugaring removes hair from the root, I found the results lasted longer, and over time, my hair grew back softer and finer.",
    "Note: Sugaring should not be performed over active HS bumps, open lesions, or irritated skin. Everyone's HS is different, so what works for me may not work for everyone."
  ],
  experience:[
    "A cozy, home-based sugaring studio where your appointment is all about you. No rushing, no pressure, and no crowded salon atmosphere - just a comfortable, private space where you can relax and feel at ease.",
    "Whether it’s your very first sugaring experience or you’re a seasoned regular, every appointment is personalized to you, your needs, and your comfort level. Take your time, ask questions, and settle in - we believe great results start with feeling comfortable.",
    "Come as you are. Leave feeling smooth, confident, and cared for."
  ],
  why:[{ title:"Thoughtful", description:"Your appointment is personal, not rushed. Every service is tailored to you." },{ title:"Private", description:"A comfortable home-based setting with one-on-one attention." },{ title:"Simple", description:"Clear services, straightforward pricing, and easy online booking." }],
  signature:{ kicker:"PRIVATE STUDIO", label:"The RU Signature", details:["Private studio","One-on-one care","Edmonton"] },
  nav:[{ label:"Services", id:"services" },{ label:"Why sugaring", id:"why" },{ label:"Gallery", id:"gallery" },{ label:"Bundles", id:"bundles" },{ label:"FAQ", id:"faq" }],
  footer:"Edgemont, Edmonton, Canada - Home-based sugaring studio"
} satisfies SiteConfig;
