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

const imageFiles = [
  "/images/IMG_2317.jpeg",
  "/images/IMG_2333.jpeg",
  "/images/IMG_2545.jpeg",
  "/images/IMG_2605.jpeg",
  "/images/IMG_2606.jpeg",
  "/images/IMG_2607.jpeg",
  "/images/IMG_2610.jpeg",
];

const bundles = [
  ["Brazilian + Underarms", "$55", "55 min", "Bundle & save $10"],
  ["Brazilian + Underarms + Half Legs", "$95", "1 hr 20 min", "Bundle & save $15"],
  ["Full Body Glow", "$155", "2 hours", "Brazilian + underarms + full legs + full arms + tailored add-ons"],
];

function App() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(null);

  React.useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
  const bookingUrl = "https://rusugar.as.me/schedule/36a17782?utm_source=website&utm_medium=website&utm_content=book_now";

  const book = () => window.open(bookingUrl, "_blank", "noopener,noreferrer");

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const chooseService = (service) => {
    setSelected(service);
    requestAnimationFrame(() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  return (
    <div className="site">
      <header className="nav">
        <button className="wordmark" onClick={() => go("home")} aria-label="RU Sugaring home">
          <strong>RU</strong><span>SUGARING</span>
        </button>
        <div className={open ? "nav-links open" : "nav-links"}>
          <div className="nav-mobile-meta"><span>RU SUGARING</span><small>EDMONTON · PRIVATE STUDIO</small></div>
          <nav>
          <button onClick={() => go("services")}>Services</button>
          <button onClick={() => go("why")}>Why sugaring</button>
          <button onClick={() => go("loyalty")}>Loyalty</button>
          <button onClick={() => go("faq")}>FAQ</button>
          <button className="nav-book" onClick={book}>Book now <ArrowRight size={15}/></button>
          </nav>
          <div className="nav-mobile-book"><span>$45 · Brazilian</span><button onClick={book}>Book your appointment <ArrowRight size={15}/></button></div>
        </div>
        <button className="menu" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="home" className="hero" data-reveal>
          <div className="hero-copy">
            <p className="eyebrow">EDMONTON · HOME-BASED SUGARING</p>
            <h1>Smooth skin.<br /><em>Simple.</em></h1>
            <p className="hero-text">A private sugaring studio in Edmonton focused on comfortable appointments, thoughtful service, and beautifully smooth results.</p>
            <div className="hero-offer"><strong>$45</strong><span>Brazilian · 1 hour</span></div>
            <div className="hero-actions">
              <button className="button button-dark" onClick={book}>Book your Brazilian <ArrowRight size={17}/></button>
              <button className="text-button" onClick={() => go("services")}>View all services</button>
            </div>
            <div className="hero-trust"><span><Check size={13}/> Private studio</span><span><Check size={13}/> Clear pricing</span><span><Check size={13}/> Online booking</span></div>
          </div>
          <div className="hero-art">
            <div className="hero-art-index">01 <span>THE STUDIO</span></div>
            <div className="hero-art-frame">
              <img className="real-image hero-photo" src={imageFiles[0]} alt="RU Sugaring Edmonton" fetchPriority="high" decoding="async" />
            <div className="hero-image-label">RU SUGARING · EDMONTON</div>
              </div>
            <div className="hero-art-note">PRIVATE / PERSONAL / EDMONTON</div>
          </div>
        </section>

        <section className="signature" data-reveal>
          <div className="signature-image">
            <img className="real-image signature-photo" src={imageFiles[1]} alt="RU Sugaring Brazilian service" loading="eager" fetchPriority="high" decoding="async" />
          </div>
          <div className="signature-copy">
            <div className="signature-kicker"><span>01</span><span>THE RU SIGNATURE</span></div>
            <p className="eyebrow">BRAZILIAN</p>
            <h2>Smooth,<br /><em>made personal.</em></h2>
            <div className="signature-price"><strong>$45</strong><span>60 MINUTES</span></div>
            <p>A private, one-on-one Brazilian appointment designed around comfort, care, and beautifully smooth results.</p>
            <div className="signature-details"><span>PRIVATE STUDIO</span><span>EDMONTON</span><span>ONLINE BOOKING</span></div>
            <button className="button button-dark" onClick={book}>Book Brazilian <ArrowRight size={17}/></button>
          </div>
        </section>


        <section className="intro section" data-reveal>
          <p className="eyebrow">THE RU EXPERIENCE</p>
          <h2>Sugaring, without<br /><em>the salon rush.</em></h2>
          <p>RU Sugaring is a private, home-based studio where every appointment is intentionally personal. Come in, get comfortable, and leave feeling smooth.</p>
          <div className="intro-meta"><span>01 · PRIVATE</span><span>02 · PERSONAL</span><span>03 · EDMONTON</span></div>
        </section>

        <section id="why" className="dark-section" data-reveal>
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

        <section id="services" className="section services" data-reveal>
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

        <section className="gallery-section" data-reveal>
          <div className="gallery-heading">
            <div>
              <p className="eyebrow">THE RU EDIT</p>
              <h2>A closer look<br /><em>at RU.</em></h2>
            </div>
            <p>Studio details, smooth results, and the little things that make an appointment feel personal.</p>
          </div>
          <div className="editorial-gallery">
            {imageFiles.slice(2).map((src, i) => (
              <div className={`gallery-item gallery-item-${i + 1}`} key={src}>
                <img className="real-image gallery-photo" src={src} alt={`RU Sugaring studio detail ${i + 1}`} loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </section>

        <section className="bundles section" data-reveal>
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

        <section className="selected-service section" data-reveal>
          <div className="selected-service-inner">
            <div>
              <p className="eyebrow">YOUR BOOKING</p>
              <h2>{selected ? <><em>{selected[0]}</em><br />is selected.</> : <>Ready to<br /><em>choose?</em></>}</h2>
              <p>{selected ? `You've chosen ${selected[0]} · ${selected[1]} · ${selected[2]}. Next, choose an available time in Acuity.` : "Choose a service above, then continue to Acuity to select an available time."}</p>
            </div>
            <div className="selected-service-action">
              {selected ? <><div className="chosen-pill"><Check size={15}/> {selected[0]} · {selected[1]}</div><button className="button button-dark" onClick={book}>Continue to Acuity <ArrowRight size={17}/></button></> : <button className="button button-dark" onClick={() => go("services")}>Choose a service <ArrowRight size={17}/></button>}
            </div>
          </div>
        </section>

        <section id="loyalty" className="loyalty" data-reveal>
          <div className="loyalty-icon"><Sparkles size={26}/></div>
          <p className="eyebrow">RU LOYALTY</p>
          <h2>Come back.<br /><em>Save more.</em></h2>
          <p>Complete 5 sessions with RU Sugaring and receive 10% off your services.</p>
          <button className="button button-light" onClick={() => chooseService(services[0])}>Start with a Brazilian <ArrowRight size={17}/></button>
        </section>

        <section id="faq" className="section faq" data-reveal>
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

        <section id="book" className="book" data-reveal>
          <div>
            <p className="eyebrow">READY WHEN YOU ARE</p>
            <h2>Let's get<br /><em>you smooth.</em></h2>
            <p>Choose your service, then find a time that works for you.</p>
          </div>
          <div className="book-actions">
            <button className="button button-light" onClick={book}>Book your Brazilian <CalendarDays size={17}/></button>
            <button className="gift-button"><Gift size={18}/> Gift cards</button>
          </div>
        </section>
      </main>

      <div className="mobile-booking-bar">
        <div><span>{selected ? selected[0] : "Brazilian · Signature"}</span><strong>{selected ? selected[1] : "$45 · 1 hour"}</strong></div>
        <button aria-label={selected ? `Book ${selected[0]}` : "Book a Brazilian appointment"} onClick={book}>Book <ArrowRight size={16}/></button>
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