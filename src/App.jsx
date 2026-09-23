import React from "react";
import { site } from "./data/site";
import { services } from "./data/services";
import { bundles } from "./data/bundles";
import { images } from "./data/images";
import { buildBookingUrl } from "./config/booking";
import { useReveal } from "./hooks/useReveal";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SignatureService } from "./components/SignatureService";
import { Intro } from "./components/Intro";
import { WhySugaring } from "./components/WhySugaring";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { Bundles } from "./components/Bundles";
import { BookingSummary } from "./components/BookingSummary";
import { Loyalty } from "./components/Loyalty";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { MobileBookingBar } from "./components/MobileBookingBar";
import { Footer } from "./components/Footer";

export default function App(){
 const [open,setOpen]=React.useState(false),[selected,setSelected]=React.useState(null);
 useReveal();
 const book=React.useCallback(()=>window.open(buildBookingUrl(),"_blank","noopener,noreferrer"),[]);
 const navigate=React.useCallback(id=>{document.getElementById(id)?.scrollIntoView({behavior:"smooth"});setOpen(false)},[]);
 const selectService=React.useCallback(service=>{setSelected(service);requestAnimationFrame(()=>document.getElementById("services")?.scrollIntoView({behavior:"smooth",block:"start"}))},[]);
 const signature=services[0];
 return <div className="site"><Header open={open} onToggle={()=>setOpen(value=>!value)} onNavigate={navigate} onBook={book} business={site} service={signature}/><main>
  <Hero image={images[0]} service={signature} business={site} onBook={book} onNavigate={navigate}/><SignatureService image={images[1]} service={signature} business={site} onBook={book}/><Intro business={site}/><WhySugaring features={site.why}/><Services services={services} selected={selected} onSelect={selectService}/><Gallery images={images}/><Bundles bundles={bundles} onSelect={selectService}/><BookingSummary selected={selected} onBook={book} onNavigate={navigate}/><Loyalty service={signature} loyalty={site.loyalty} onSelect={selectService}/><FAQ items={site.faq}/><FinalCTA onBook={book}/></main><MobileBookingBar selected={selected} fallback={signature} onBook={book}/><Footer business={site} onNavigate={navigate}/></div>;
}
