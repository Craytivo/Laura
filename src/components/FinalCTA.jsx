import React from "react";
import { CalendarDays, Gift } from "lucide-react";
import { Button } from "./Button";
export function FinalCTA({ onBook }){return <section id="book" className="book" data-reveal><div><p className="eyebrow">READY WHEN YOU ARE</p><h2>Let's get<br /><em>you smooth.</em></h2><p>Choose your service, then find a time that works for you.</p></div><div className="book-actions"><Button variant="light" onClick={onBook}>Book your appointment <CalendarDays size={17}/></Button><button className="gift-button" type="button"><Gift size={18}/> Gift cards</button></div></section>}
