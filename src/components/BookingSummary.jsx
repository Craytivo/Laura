import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "./Button";

export function BookingSummary({ selected, onBook, onNavigate }) {
  return <section className="selected-service section" data-reveal><div className="selected-service-inner"><div><p className="eyebrow">YOUR BOOKING</p><h2>{selected ? <><em>{selected.name}</em><br />is selected.</> : <>Ready to<br /><em>choose?</em></>}</h2><p>{selected ? `You've chosen ${selected.name} · ${selected.price} · ${selected.duration}. Next, choose an available time in Acuity.` : "Choose a service above, then continue to Acuity to select an available time."}</p></div><div className="selected-service-action">{selected ? <><div className="chosen-pill"><Check size={15}/> {selected.name} · {selected.price}</div><Button onClick={onBook}>Continue to Acuity <ArrowRight size={17}/></Button></> : <Button onClick={()=>onNavigate("services")}>Choose a service <ArrowRight size={17}/></Button>}</div></div></section>;
}
