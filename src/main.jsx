import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowRight, CalendarDays, Gift, Menu, Sparkles, X } from "lucide-react";
import "./styles.css";

const services = [
  ["Brazilian", "$45", "1 hour", "Smooth, personalized Brazilian sugaring with care and comfort in mind."],
  ["Bikini", "$35", "35 min", "Front and outer bikini line, customized to your preferred shape and coverage."],
  ["Underarms", "$20", "25 min", "Complete hair removal of the underarm area."],
  ["Full Legs", "$60", "50 min", "Complete hair removal from the upper thighs to the ankles."],
  ["Full Arms", "$45", "40 min", "Complete hair removal from the shoulders to the wrists."],
  ["Full Face", "$25", "30 min", "A smooth, fresh finish for the full face."],
];

const bundles = [
  ["Brazilian + Underarms", "$55", "55 min", "Bundle & save $10"],
  ["Brazilian + Underarms + Half Legs", "$95", "1 hr 20 min", "Bundle & save $15"],
  ["Full Body Glow", "$155", "2 hours", "Brazilian, underarms, full legs, full arms + tailored add-ons"],
];

function App() {
  const [open, setOpen] = React.useState(false);
  const bookingUrl = "https://rusugar.as.me/schedule/36a17782?utm_source=website&utm_medium=website&utm_content=book_now";

  const book = () => window.open(bookingUrl, "_blank", "noopener,noreferrer");

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
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
              <button className="button button-dark" onClick={book}>Book your appointment <ArrowRight size={17}/></button>
              <button className="text-button" onClick={() => go("services")}>View services</button>
            </div>
          </div>
          <div className="hero-art" aria-label="Photo placeholder">
            <div className="photo-placeholder">
              <Sparkles size={24} strokeWidth={1.5}/>
              <span>RU SUGARING</span>
              <small>Your studio photography will live here</small>
            </div>
          </div>
        </section>

        <section className="intro section">
          <p className="eyebrow">THE RU EXPERIENCE</p>
          <h2>Sugaring, without<br /><em>the salon rush.</em></h2>
          <p>RU Sugaring is a private, home-based studio where every appointment is intentionally personal. Come in, get comfortable, and leave feeling smooth.</p>
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
            <p className="eyebrow">SERVICES</p>
            <h2>Start with your<br /><em>smooth.</em></h2>
          </div>
          <div className="service-list">
            {services.map(([name, price, duration, desc], i) => (
              <article className={i === 0 ? "service-card featured" : "service-card"} key={name}>
                <div className="service-number">0{i + 1}</div>
                <div className="service-main">
                  <div className="service-title"><h3>{name}</h3><strong>{price}</strong></div>
                  <p>{desc}</p>
                  <small>{duration}</small>
                </div>
                {i === 0 && <span className="popular">MOST BOOKED</span>}
              </article>
            ))}
          </div>
          <p className="more-services">Half legs · Half arms · Full stomach · Fingers & toes · Tailored add-ons</p>
        </section>

        <section className="bundles section">
          <div className="bundle-intro">
            <p className="eyebrow">BUNDLES</p>
            <h2>More smooth.<br /><em>More value.</em></h2>
          </div>
          <div className="bundle-list">
            {bundles.map(([name, price, time, note]) => (
              <article className="bundle-card" key={name}>
                <div><h3>{name}</h3><p>{note}</p></div>
                <div className="bundle-price"><strong>{price}</strong><span>{time}</span></div>
              </article>
            ))}
          </div>
        </section>

        <section id="loyalty" className="loyalty">
          <div className="loyalty-icon"><Sparkles size={26}/></div>
          <p className="eyebrow">RU LOYALTY</p>
          <h2>Come back.<br /><em>Save more.</em></h2>
          <p>Complete 5 sessions with RU Sugaring and receive 10% off your services.</p>
          <button className="button button-light" onClick={book}>Start your first session <ArrowRight size={17}/></button>
        </section>

        <section id="faq" className="section faq">
          <div className="section-heading light">
            <p className="eyebrow">GOOD TO KNOW</p>
            <h2>Your questions,<br /><em>answered.</em></h2>
          </div>
          <div className="faq-list">
            {[
              ["Where are you located?", "RU Sugaring is a private home-based studio in Edmonton. Exact location details can be provided with your booking."],
              ["How do I book?", "Use the online booking button to choose your service and appointment time."],
              ["What should I do before my appointment?", "Arrive with clean skin and avoid heavy lotions or oils on the area being sugared."],
              ["What if I need to cancel?", "Booking and cancellation details will be listed here once the RU Sugaring policy is finalized."],
            ].map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}
          </div>
        </section>

        <section id="book" className="book">
          <div>
            <p className="eyebrow">READY WHEN YOU ARE</p>
            <h2>Let's get<br /><em>you smooth.</em></h2>
            <p>Choose your service and find a time that works for you.</p>
          </div>
          <div className="book-actions">
            <button className="button button-light" onClick={book}>Book an appointment <CalendarDays size={17}/></button>
            <button className="gift-button"><Gift size={18}/> Gift cards</button>
          </div>
        </section>
      </main>

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