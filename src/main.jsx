import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowRight, CalendarDays, Check, ChevronRight, Gift, Menu, Sparkles, X } from "lucide-react";
import "./styles.css";

const services = [
  ["Brazilian", "$45", "1 hour", "Smooth, personalized Brazilian sugaring with care and comfort in mind.", "Most booked"],
  ["Bikini", "$35", "35 min", "Hair removal from the front and outer bikini line, customized to your preferred shape and coverage."],
  ["Underarms", "$20", "25 min", "Complete hair removal of the underarm area."],
  ["Full Legs", "$60", "50 min", "Complete hair removal from the upper thighs to the ankles."],
  ["Half Legs", "$45", "30 min", "Hair removal from the lower legs, from the knees to the ankles."],
  ["Full Arms", "$45", "40 min", "Complete hair removal from the shoulders to the wrists."],
  ["Half Arms", "$35", "35 min", "Hair removal from the lower arms, from the elbows to the wrists."],
  ["Full Stomach", "$20", "30 min", "Complete hair removal from the stomach area."],
  ["Fingers / Toes", "$10", "25 min", "A simple add-on for fingers or toes."],
  ["Full Face", "$25", "30 min", "A smooth, fresh finish for the full face."],
  ["Tailored Add-ons", "$10+", "15 min", "Personalize your service with carefully selected add-ons. Prices vary."],
];

const bundles = [
  ["Brazilian + Underarms", "$55", "55 min", "Bundle & save $10"],
  ["Brazilian + Underarms + Half Legs", "$95", "1 hr 20 min", "Bundle & save $15"],
  ["Full Body Glow", "$155", "2 hours", "Brazilian + underarms + full legs + full arms + tailored add-ons"],
];

function App() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(null);
  const bookingUrl = "https://rusugar.as.me/schedule/36a17782?utm_source=website&utm_medium=website&utm_content=book_now";

  const book = () => window.open(bookingUrl, "_blank", "noopener,noreferrer");

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const chooseService = (service) => {
    setSelected(service);
    requestAnimationFrame(() => document.getElementById("booking-start")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  return (
    <div className="site">
      <header className="nav">
        <button className="wordmark" onClick={() => go("home")}>RU<span>SUGARING</span></button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          <button onClick={() => go("services")}>Services</button>
          <button onClick={() => go("why")}>Why sugaring</button>
          <button onClick={() => go("loyalty")}>Loyalty</button>
          <button onClick={() => go("faq")}>FAQ</button>
          <button className="nav-book" onClick={book}>Book now <ArrowRight size={15}/></button>
        </nav>
        <button className="menu" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">EDMONTON · HOME-BASED SUGARING</p>
            <h1>Smooth skin.<br /><em>Simple.</em></h1>
            <p className="hero-text">A private sugaring studio in Edmonton focused on comfortable appointments, thoughtful service, and beautifully smooth results.</p>
            <div className="hero-actions">
              <button className="button button-dark" onClick={() => chooseService(services[0])}>Book your Brazilian <ArrowRight size={17}/></button>
              <button className="text-button" onClick={() => go("services")}>View all services</button>
            </div>
            <div className="hero-trust"><span><Check size={13}/> Private studio</span><span><Check size={13}/> Clear pricing</span><span><Check size={13}/> Online booking</span></div>
          </div>
          <div className="hero-art">
            <img className="real-image hero-photo" src={imageFiles[0]} alt="RU Sugaring studio" />
            <div className="hero-image-label">RU SUGARING · EDMONTON</div>
          </div>
        </section>

        <section id="booking-start" className="booking-start section">
          <div className="booking-start-copy">
            <p className="eyebrow">BOOKING MADE SIMPLE</p>
            <h2>What are you<br /><em>booking today?</em></h2>
            <p>Choose a service below. When you're ready, we'll take you straight to the RU Sugaring booking page to choose your time.</p>
          </div>
          <div className="booking-panel">
            <div className="booking-panel-head">
              <div>
                <span>01</span>
                <strong>Choose your service</strong>
              </div>
              <small>{selected ? "Selected" : "Start here"}</small>
            </div>
            <div className="quick-picks">
              {services.slice(0, 4).map((service) => (
                <button className={selected?.[0] === service[0] ? "quick-pick selected" : "quick-pick"} key={service[0]} onClick={() => setSelected(service)}>
                  <span><b>{service[0]}</b><small>{service[2]}</small></span>
                  <strong>{service[1]}</strong>
                  <ChevronRight size={17}/>
                </button>
              ))}
            </div>
            {selected && (
              <div className="selection-summary">
                <div><span>Selected service</span><strong>{selected[0]}</strong><small>{selected[1]} · {selected[2]}</small></div>
                <button className="button button-dark" onClick={book}>Continue to booking <ArrowRight size={16}/></button>
              </div>
            )}
            {!selected && <button className="booking-main-cta" onClick={() => go("services")}>Browse the full menu <ArrowRight size={16}/></button>}
          </div>
        </section>

        <section className="intro section">
          <p className="eyebrow">THE RU EXPERIENCE</p>
          <h2>Sugaring, without<br /><em>the salon rush.</em></h2>
          <p>RU Sugaring is a private, home-based studio where every appointment is intentionally personal. Come in, get comfortable, and leave feeling smooth.</p>
          <div className="intro-meta"><span>01 · PRIVATE</span><span>02 · PERSONAL</span><span>03 · EDMONTON</span></div>
        </section>

        <section className="signature">
          <div className="signature-image">
            <img className="real-image signature-photo" src={imageFiles[1]} alt="RU Sugaring service" />
          </div>
          <div className="signature-copy">
            <p className="eyebrow">THE SIGNATURE</p>
            <h2>Brazilian<br /><em>sugaring.</em></h2>
            <div className="signature-price"><strong>$45</strong><span>1 hour</span></div>
            <p>A private, personalized appointment with clear pricing and one-on-one attention.</p>
            <button className="button button-dark" onClick={() => chooseService(services[0])}>Book Brazilian <ArrowRight size={17}/></button>
          </div>
        </section>

        <section id="why" className="dark-section">
          <div className="section-heading">
            <p className="eyebrow">WHY SUGARING</p>
            <h2>A gentler approach<br />to hair removal.</h2>
          </div>
          <div className="feature-grid">
            <div><span>01</span><h3>Thoughtful</h3><p>Your appointment is personal, not rushed. Every service is tailored to you.</p></div>
            <div><span>02</span><h3>Private</h3><p>A comfortable home-based setting with one-on-one attention.</p></div>
            <div><span>03</span><h3>Simple</h3><p>Clear services, straightforward pricing, and easy online booking.</p></div>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="section-heading light">
            <p className="eyebrow">SERVICE MENU</p>
            <h2>Pick your<br /><em>smooth.</em></h2>
            <p className="section-lede">Not sure where to start? Brazilian is our featured service. Select any service to see it in your booking summary.</p>
          </div>
          <div className="service-list">
            {services.map((service, i) => (
              <button className={selected?.[0] === service[0] ? "service-card featured selected" : i === 0 ? "service-card featured" : "service-card"} key={service[0]} onClick={() => chooseService(service)}>
                <div className="service-number">{String(i + 1).padStart(2, "0")}</div>
                <div className="service-main">
                  <div className="service-title"><h3>{service[0]}</h3><strong>{service[1]}</strong></div>
                  <p>{service[3]}</p>
                  <small>{service[2]}</small>
                </div>
                {service[4] && <span className="popular">{service[4]}</span>}
                <ChevronRight className="service-arrow" size={19}/>
              </button>
            ))}
          </div>
        </section>

        <section className="gallery-section">
          <div className="gallery-heading">
            <div>
              <p className="eyebrow">THE RU EDIT</p>
              <h2>A closer look<br /><em>at RU.</em></h2>
            </div>
            <p>Studio details, smooth results, and the little things that make an appointment feel personal.</p>
          </div>
          <div className="gallery-grid">
            {imageFiles.slice(2, 6).map((src, i) => (
              <div className={i === 0 ? "gallery-tile tall" : i === 3 ? "gallery-tile wide" : "gallery-tile"} key={src}>
                <img className="real-image gallery-photo" src={src} alt={`RU Sugaring gallery ${i + 1}`} />
              </div>
            ))}
          </div>
        </section>

        <section className="bundles section">
          <div className="bundle-intro">
            <p className="eyebrow">BUNDLES</p>
            <h2>More smooth.<br /><em>More value.</em></h2>
            <p>Pair popular services and save on the combined appointment.</p>
          </div>
          <div className="bundle-list">
            {bundles.map((bundle) => (
              <button className="bundle-card" key={bundle[0]} onClick={() => chooseService(bundle)}>
                <div><h3>{bundle[0]}</h3><p>{bundle[3]}</p></div>
                <div className="bundle-price"><strong>{bundle[1]}</strong><span>{bundle[2]}</span><ChevronRight size={16}/></div>
              </button>
            ))}
          </div>
        </section>

        <section className="selected-service section">
          <div className="selected-service-inner">
            <div>
              <p className="eyebrow">YOUR BOOKING</p>
              <h2>{selected ? <><em>{selected[0]}</em><br />is selected.</> : <>Ready to<br /><em>choose?</em></>}</h2>
              <p>{selected ? `You've chosen ${selected[0]} · ${selected[1]} · ${selected[2]}. The next step is choosing an available time in Acuity.` : "Choose a service above and we'll carry your selection into the next step."}</p>
            </div>
            <div className="selected-service-action">
              {selected ? <><div className="chosen-pill"><Check size={15}/> {selected[0]} · {selected[1]}</div><button className="button button-dark" onClick={book}>Continue to Acuity <ArrowRight size={17}/></button></> : <button className="button button-dark" onClick={() => go("services")}>Choose a service <ArrowRight size={17}/></button>}
            </div>
          </div>
        </section>

        <section id="loyalty" className="loyalty">
          <div className="loyalty-icon"><Sparkles size={26}/></div>
          <p className="eyebrow">RU LOYALTY</p>
          <h2>Come back.<br /><em>Save more.</em></h2>
          <p>Complete 5 sessions with RU Sugaring and receive 10% off your services.</p>
          <button className="button button-light" onClick={() => chooseService(services[0])}>Start with a Brazilian <ArrowRight size={17}/></button>
        </section>

        <section id="faq" className="section faq">
          <div className="section-heading light">
            <p className="eyebrow">GOOD TO KNOW</p>
            <h2>Your questions,<br /><em>answered.</em></h2>
          </div>
          <div className="faq-list">
            {[
              ["Where are you located?", "RU Sugaring is a private home-based studio in Edmonton. Exact location details can be provided with your booking."],
              ["How do I book?", "Choose a service on this site, then continue to the RU Sugaring Acuity booking page to select an available time."],
              ["What should I do before my appointment?", "Arrive with clean skin and avoid heavy lotions or oils on the area being sugared."],
              ["What if I need to cancel?", "Booking and cancellation details will be listed here once the RU Sugaring policy is finalized."],
            ].map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}
          </div>
        </section>

        <section id="book" className="book">
          <div>
            <p className="eyebrow">READY WHEN YOU ARE</p>
            <h2>Let's get<br /><em>you smooth.</em></h2>
            <p>Choose your service, then find a time that works for you.</p>
          </div>
          <div className="book-actions">
            <button className="button button-light" onClick={() => chooseService(services[0])}>Book your Brazilian <CalendarDays size={17}/></button>
            <button className="gift-button"><Gift size={18}/> Gift cards</button>
          </div>
        </section>
      </main>

      <div className="mobile-booking-bar">
        <div><span>{selected ? selected[0] : "RU Sugaring"}</span><strong>{selected ? selected[1] : "Book your appointment"}</strong></div>
        <button onClick={selected ? book : () => chooseService(services[0])}>{selected ? "Continue" : "Book now"} <ArrowRight size={16}/></button>
      </div>

      <footer>
        <div className="footer-brand">RU<span>SUGARING</span></div>
        <p>Edmonton, Alberta · Home-based sugaring studio</p>
        <div className="footer-links"><button onClick={() => go("services")}>Services</button><button onClick={() => go("faq")}>FAQ</button><button onClick={() => go("book")}>Book</button></div>
        <small>© 2026 RU Sugaring</small>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);