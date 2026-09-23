import React from "react";
export function FAQ({items}){return <section id="faq" className="section faq" data-reveal><div className="section-heading light"><p className="eyebrow">GOOD TO KNOW</p><h2>Your questions,<br/><em>answered.</em></h2></div><div className="faq-list">{items.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>}
