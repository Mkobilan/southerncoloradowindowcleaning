import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="logo-container">
            <Image src="/logo.png" alt="Southern Colorado Window Cleaning Logo" width={48} height={48} className="logo-img" />
            <span className="logo-text">SC Window Cleaning</span>
          </div>
          <div className="nav-links">
            <a href="#services" className="nav-link">Services</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#about" className="nav-link">About Us</a>
          </div>
          <a href="tel:7192971125" className="btn-primary">Call or Text Now</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <Image src="/hero.png" alt="Sparkling clean commercial storefront window reflecting a bright blue sky in Pueblo Colorado" fill priority style={{objectFit:"cover"}} />
        </div>
        <div className="hero-overlay"></div>
        <div className="container relative">
          <div className="hero-content animate-fade-in-up">
            <span className="hero-tagline">Serving Pueblo, Colorado &amp; Surrounding Areas</span>
            <h1>Let Your Windows <span>Shine Bright</span></h1>
            <p>Premium, professional window washing services for commercial buildings and storefronts. Discover why we are the top-rated cleaning company in your area.</p>
            <div className="hero-actions">
              <a href="tel:7192971125" className="btn-primary">Get a Free Quote</a>
              <a href="#services" className="btn-secondary">Our Services</a>
            </div>
          </div>
        </div>
      </section>

      {/* Prominent Brand / Logo Section */}
      <section className="brand-section">
        <div className="brand-line"></div>
        <div className="brand-content">
          <div className="brand-logo-wrap">
            <Image
              src="/logo.png"
              alt="Southern Colorado Window Cleaning - Pueblo Colorado"
              width={180}
              height={180}
              className="brand-logo"
            />
          </div>
          <div className="brand-text">
            <h2 className="brand-name">Southern Colorado Window Cleaning</h2>
            <p className="brand-tagline-text">Pueblo&rsquo;s Premier Professional Window Cleaning Service</p>
            <div className="brand-badges">
              <span className="badge">📍 Pueblo, CO</span>
              <span className="badge">✅ Free Quotes</span>
              <span className="badge">🌿 Eco-Friendly</span>
              <span className="badge">⭐ Streak-Free Guarantee</span>
            </div>
          </div>
        </div>
        <div className="brand-line"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Our Cleaning Services</h2>
          <p className="section-subtitle">We offer top-tier window cleaning solutions tailored to your business needs. From routine maintenance to heavy-duty initial cleanings, we make sure your business shines.</p>
          
          <div className="service-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <h3>Commercial &amp; Storefronts</h3>
              <p>Keep your business looking inviting with our professional commercial window cleaning services. First impressions matter — let your storefront shine in Pueblo.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h3>Recurring Maintenance</h3>
              <p>Choose weekly or monthly schedule cleaning packages to ensure your windows remain spotless year-round without lifting a finger.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
              </div>
              <h3>Hard Water &amp; Heavy Duty</h3>
              <p>We tackle the toughest grime and hard water stains. Specialized eco-friendly cleaning solutions for restorative shines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <h2 className="section-title" style={{textAlign: "center"}}>Transparent Pricing</h2>
          <p className="section-subtitle">No hidden fees. We provide straightforward, affordable window cleaning charges for the Pueblo area.</p>
          
          <div className="pricing-wrapper">
            {/* Exterior Only */}
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>Exterior Only</h3>
                <div className="price">$7-9<span>/pane</span></div>
              </div>
              <ul className="pricing-features">
                <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Outside glass surfaces</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Edge &amp; Sill wipedown</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Eco-friendly solutions</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Streak-free guarantee</li>
              </ul>
            </div>

            {/* Interior + Exterior */}
            <div className="pricing-card featured">
              <div className="pricing-badge">Most Popular</div>
              <div className="pricing-header">
                <h3>Interior &amp; Exterior</h3>
                <div className="price">$12-17<span>/pane</span></div>
              </div>
              <ul className="pricing-features">
                <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Both sides cleaned</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Edge &amp; Sill wipedown</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Eco-friendly solutions</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Streak-free guarantee</li>
              </ul>
            </div>

            {/* Deep Cleaning */}
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>Initial Deep Clean</h3>
                <div className="price">$25-50<span>/initial</span></div>
              </div>
              <ul className="pricing-features">
                <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Heavily soiled windows</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Hard water stain removal</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Long-term neglect restoration</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Preps for recurring plan</li>
              </ul>
            </div>
          </div>
          
          <div className="pricing-note">
            <strong>Need a custom plan?</strong> We offer specialized cleaning packages for large commercial properties and recurring services. Reach out for a free custom quote!
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="about" className="contact-cta">
        <div className="container">
          <h2>Ready for a Brighter View?</h2>
          <p style={{fontSize: "1.2rem", opacity: 0.9, maxWidth: "600px", margin: "0 auto"}}>
            Join other local Pueblo, Colorado businesses who trust us as their dedicated cleaning contractor. Contact our team today for a free quote!
          </p>
          
          <div className="contact-methods">
            <a href="tel:7192971125" className="contact-method">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <div className="contact-info">
                <span>Call or Text (Preferred)</span>
                <strong>719.297.1125</strong>
              </div>
            </a>
            
            <a href="mailto:matthew.kobilan@gmail.com" className="contact-method">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <div className="contact-info">
                <span>Email Us</span>
                <strong>matthew.kobilan@gmail.com</strong>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
              <Image src="/logo.png" alt="Southern Colorado Window Cleaning Logo" width={40} height={40} />
              <strong style={{color: "white"}}>Southern Colorado Window Cleaning</strong>
            </div>
            <div>
              Pueblo, Colorado &mdash; Call/Text: <a href="tel:7192971125" style={{color: "rgba(255,255,255,0.8)"}}>719.297.1125</a>
            </div>
            <div>
              &copy; {new Date().getFullYear()} Southern Colorado Window Cleaning. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
