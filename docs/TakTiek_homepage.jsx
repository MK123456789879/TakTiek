import { useState } from 'react';

export default function TakTiekHomepage() {
  return (
    <div className="taktiek-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');

        .taktiek-root {
          /* Design tokens — exact uit logo SVG */
          --tt-teal: #05A7A7;
          --tt-coral: #F25F4E;
          --tt-lime: #A8C734;
          --tt-purple: #623D92;
          --tt-cream: #FDFBF5;
          --tt-ink: #1F1B2E;
          --tt-ink-soft: #5A5468;
          --tt-ink-muted: #8B8696;
          --tt-border: rgba(31, 27, 46, 0.08);
          --tt-surface: #FFFFFF;

          --font-display: 'Fredoka', system-ui, sans-serif;
          --font-body: 'Inter', system-ui, sans-serif;

          font-family: var(--font-body);
          color: var(--tt-ink);
          background: var(--tt-cream);
          min-height: 100vh;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }
        .taktiek-root * { box-sizing: border-box; }

        /* ---------- Nav ---------- */
        .tt-nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(253, 251, 245, 0.92);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--tt-border);
        }
        .tt-nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 18px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .tt-logo-svg { height: 38px; width: auto; display: block; }

        .tt-nav-links {
          display: flex;
          gap: 32px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .tt-nav-links a {
          color: var(--tt-ink-soft);
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          transition: color 0.2s;
        }
        .tt-nav-links a:hover { color: var(--tt-purple); }

        .tt-nav-cta {
          background: var(--tt-coral);
          color: white;
          padding: 10px 22px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          transition: transform 0.15s, box-shadow 0.15s;
          box-shadow: 0 2px 0 rgba(0,0,0,0.05);
        }
        .tt-nav-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(242, 95, 78, 0.3);
        }

        /* ---------- Hero ---------- */
        .tt-hero {
          max-width: 1200px;
          margin: 0 auto;
          padding: 96px 32px 80px;
          position: relative;
        }
        .tt-hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 64px;
          align-items: center;
        }
        .tt-eyebrow {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--tt-teal);
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .tt-eyebrow::before {
          content: '';
          width: 24px;
          height: 2px;
          background: var(--tt-teal);
          border-radius: 2px;
        }
        .tt-hero h1 {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: clamp(40px, 5.2vw, 64px);
          line-height: 1.05;
          letter-spacing: -0.025em;
          margin: 0 0 24px;
          color: var(--tt-ink);
        }
        .tt-hero h1 .accent {
          color: var(--tt-purple);
          font-weight: 700;
        }
        .tt-hero-sub {
          font-size: 18px;
          line-height: 1.6;
          color: var(--tt-ink-soft);
          margin: 0 0 36px;
          max-width: 520px;
        }
        .tt-hero-ctas {
          display: flex;
          gap: 20px;
          align-items: center;
          flex-wrap: wrap;
        }
        .tt-btn-primary {
          background: var(--tt-coral);
          color: white;
          padding: 16px 30px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.15s;
          box-shadow: 0 6px 20px rgba(242, 95, 78, 0.28);
        }
        .tt-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(242, 95, 78, 0.4);
        }
        .tt-btn-secondary {
          color: var(--tt-ink);
          padding: 16px 4px;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          border-bottom: 2px solid var(--tt-ink);
          transition: color 0.2s, border-color 0.2s;
        }
        .tt-btn-secondary:hover {
          color: var(--tt-purple);
          border-color: var(--tt-purple);
        }

        /* Hero composition */
        .tt-hero-art {
          position: relative;
          height: 460px;
        }
        .tt-shape {
          position: absolute;
          border-radius: 50%;
          transition: transform 0.6s cubic-bezier(.2,.8,.2,1);
        }
        .tt-shape-1 {
          width: 220px; height: 220px;
          background: var(--tt-teal);
          top: 10px; right: 60px;
        }
        .tt-shape-2 {
          width: 130px; height: 130px;
          background: var(--tt-lime);
          bottom: 60px; right: 220px;
        }
        .tt-shape-3 {
          width: 80px; height: 80px;
          background: var(--tt-coral);
          top: 220px; right: 10px;
        }
        .tt-shape-4 {
          width: 58px; height: 58px;
          background: var(--tt-purple);
          bottom: 40px; right: 80px;
        }
        .tt-hero-card {
          position: absolute;
          background: white;
          border-radius: 20px;
          padding: 18px 22px;
          box-shadow: 0 20px 50px rgba(31, 27, 46, 0.12);
          font-family: var(--font-display);
          font-weight: 500;
          font-size: 16px;
          z-index: 2;
        }
        .tt-hero-card-1 {
          top: 100px; left: 20px;
          color: var(--tt-teal);
          transform: rotate(-3deg);
        }
        .tt-hero-card-2 {
          bottom: 110px; left: 110px;
          color: var(--tt-purple);
          transform: rotate(4deg);
        }
        .tt-hero-card-3 {
          top: 250px; left: 180px;
          color: var(--tt-coral);
          transform: rotate(-2deg);
        }

        /* ---------- Generic section ---------- */
        .tt-section-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .tt-section-header {
          max-width: 680px;
          margin: 0 auto 64px;
          text-align: center;
        }
        .tt-section-header h2 {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: clamp(32px, 4vw, 48px);
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 14px 0 16px;
          color: var(--tt-ink);
        }
        .tt-section-header p {
          font-size: 17px;
          color: var(--tt-ink-soft);
          margin: 0;
        }
        .tt-eyebrow-center {
          justify-content: center;
        }

        /* ---------- Pillars ---------- */
        .tt-pillars {
          background: white;
          padding: 110px 32px;
        }
        .tt-pillar-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .tt-pillar {
          padding: 36px 28px;
          border-radius: 24px;
          background: var(--tt-cream);
          border: 1px solid var(--tt-border);
          transition: transform 0.25s, box-shadow 0.25s;
          position: relative;
        }
        .tt-pillar:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(31, 27, 46, 0.08);
        }
        .tt-pillar-num {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.08em;
          margin-bottom: 24px;
          display: inline-block;
          padding: 4px 10px;
          border-radius: 999px;
          color: white;
        }
        .tt-pillar-1 .tt-pillar-num { background: var(--tt-teal); }
        .tt-pillar-2 .tt-pillar-num { background: var(--tt-coral); }
        .tt-pillar-3 .tt-pillar-num { background: var(--tt-lime); color: var(--tt-ink); }
        .tt-pillar-4 .tt-pillar-num { background: var(--tt-purple); }

        .tt-pillar h3 {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 22px;
          margin: 0 0 12px;
          color: var(--tt-ink);
          letter-spacing: -0.01em;
        }
        .tt-pillar p {
          font-size: 14.5px;
          color: var(--tt-ink-soft);
          margin: 0;
          line-height: 1.6;
        }

        /* ---------- Practical strip ---------- */
        .tt-practical {
          background: var(--tt-cream);
          padding: 80px 32px;
        }
        .tt-practical-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          max-width: 1100px;
          margin: 0 auto;
          padding: 52px;
          background: white;
          border-radius: 32px;
          border: 1px solid var(--tt-border);
        }
        .tt-practical-item { text-align: center; }
        .tt-practical-label {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--tt-ink-muted);
          margin-bottom: 10px;
        }
        .tt-practical-value {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 22px;
          color: var(--tt-ink);
          line-height: 1.2;
          letter-spacing: -0.01em;
        }

        /* ---------- Trust section — privacy als ontwerpprincipe ---------- */
        .tt-trust {
          background: white;
          padding: 110px 32px;
        }
        .tt-trust-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          align-items: start;
          max-width: 1200px;
          margin: 0 auto;
        }
        .tt-trust-left h2 {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: clamp(32px, 3.6vw, 42px);
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 14px 0 20px;
          color: var(--tt-ink);
        }
        .tt-trust-left p {
          font-size: 17px;
          color: var(--tt-ink-soft);
          margin: 0 0 24px;
          line-height: 1.65;
        }
        .tt-trust-link {
          font-weight: 600;
          color: var(--tt-purple);
          text-decoration: none;
          border-bottom: 2px solid var(--tt-purple);
          padding-bottom: 2px;
        }

        .tt-trust-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .tt-trust-item {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 20px;
          padding: 24px 0;
          border-top: 1px solid var(--tt-border);
        }
        .tt-trust-item:last-child {
          border-bottom: 1px solid var(--tt-border);
        }
        .tt-trust-marker {
          width: 36px;
          height: 36px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .tt-trust-item:nth-child(1) .tt-trust-marker { background: var(--tt-teal); }
        .tt-trust-item:nth-child(2) .tt-trust-marker { background: var(--tt-coral); }
        .tt-trust-item:nth-child(3) .tt-trust-marker { background: var(--tt-lime); }
        .tt-trust-item:nth-child(4) .tt-trust-marker { background: var(--tt-purple); }
        .tt-trust-marker svg {
          width: 18px;
          height: 18px;
          stroke: white;
          stroke-width: 2.5;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .tt-trust-item:nth-child(3) .tt-trust-marker svg { stroke: var(--tt-ink); }

        .tt-trust-item h4 {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 18px;
          margin: 0 0 6px;
          color: var(--tt-ink);
          letter-spacing: -0.01em;
        }
        .tt-trust-item p {
          font-size: 14.5px;
          color: var(--tt-ink-soft);
          margin: 0;
          line-height: 1.55;
        }

        /* ---------- CTA block ---------- */
        .tt-cta {
          padding: 110px 32px;
          background: var(--tt-cream);
        }
        .tt-cta-card {
          max-width: 900px;
          margin: 0 auto;
          background: var(--tt-purple);
          border-radius: 32px;
          padding: 80px 48px;
          text-align: center;
          color: white;
          position: relative;
          overflow: hidden;
        }
        .tt-cta-blob-1 {
          position: absolute;
          width: 220px; height: 220px;
          background: var(--tt-lime);
          border-radius: 50%;
          top: -70px; right: -50px;
        }
        .tt-cta-blob-2 {
          position: absolute;
          width: 130px; height: 130px;
          background: var(--tt-coral);
          border-radius: 50%;
          bottom: -30px; left: -20px;
        }
        .tt-cta-content {
          position: relative;
          z-index: 1;
        }
        .tt-cta h2 {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: clamp(32px, 4vw, 44px);
          margin: 0 0 16px;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }
        .tt-cta p {
          font-size: 17px;
          opacity: 0.92;
          margin: 0 auto 36px;
          max-width: 480px;
          line-height: 1.55;
        }
        .tt-cta-btn {
          background: white;
          color: var(--tt-purple);
          padding: 16px 32px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 16px;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.15s;
        }
        .tt-cta-btn:hover { transform: translateY(-2px); }

        /* ---------- Footer ---------- */
        .tt-footer {
          background: var(--tt-ink);
          color: rgba(255,255,255,0.7);
          padding: 64px 32px 40px;
        }
        .tt-footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 48px;
        }
        .tt-footer-logo {
          height: 36px;
          width: auto;
          /* logo invert via filter zou kunnen, maar logo heeft kleuren — laat staan */
          margin-bottom: 16px;
          background: white;
          padding: 8px 12px;
          border-radius: 12px;
          display: inline-block;
        }
        .tt-footer-logo svg { height: 28px; width: auto; display: block; }

        .tt-footer h4 {
          font-family: var(--font-display);
          font-weight: 600;
          color: white;
          font-size: 16px;
          margin: 0 0 16px;
          letter-spacing: -0.005em;
        }
        .tt-footer a {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-size: 14.5px;
          display: block;
          padding: 5px 0;
          transition: color 0.2s;
        }
        .tt-footer a:hover { color: white; }
        .tt-footer-tagline {
          font-size: 14.5px;
          line-height: 1.6;
          max-width: 320px;
        }
        .tt-footer-bottom {
          max-width: 1200px;
          margin: 0 auto;
          padding-top: 28px;
          border-top: 1px solid rgba(255,255,255,0.1);
          font-size: 13px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          color: rgba(255,255,255,0.5);
        }

        /* ---------- Responsive ---------- */
        @media (max-width: 980px) {
          .tt-hero-grid { grid-template-columns: 1fr; gap: 24px; }
          .tt-hero-art { height: 300px; }
          .tt-pillar-grid { grid-template-columns: repeat(2, 1fr); }
          .tt-practical-grid { grid-template-columns: repeat(2, 1fr); gap: 28px; padding: 36px; }
          .tt-nav-links { display: none; }
          .tt-trust-grid { grid-template-columns: 1fr; gap: 40px; }
          .tt-footer-inner { grid-template-columns: 1fr 1fr; gap: 32px; }
        }
        @media (max-width: 560px) {
          .tt-pillar-grid { grid-template-columns: 1fr; }
          .tt-hero { padding: 56px 24px 40px; }
          .tt-footer-inner { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* SVG defs — logo */}
      <svg width="0" height="0" style={{position: 'absolute'}} aria-hidden="true">
        <defs>
          <symbol id="taktiek-logo" viewBox="0 0 922.6 236.84">
            <polygon fill="#05A7A7" points="152.64 225.92 88.65 236.84 67.53 80.68 8.76 93.66 0 35.3 175.26 0 183.43 54.14 127.81 66.62 152.64 225.92"/>
            <polygon fill="#A8C734" points="475.16 196.57 435.59 226.86 371.39 174.25 377.79 227.12 325.4 231.48 314.96 137.79 303.6 36.57 353.1 25.58 363.59 115.16 392.25 57.27 439.37 65.1 398.56 135.75 475.16 196.57"/>
            <polygon fill="#623D92" points="562.94 222.82 503.58 224.45 499.24 74.33 453.39 79.26 449.16 25.46 600.38 7.42 601.39 62.51 553.61 68.13 562.94 222.82"/>
            <path fill="#A8C734" d="M887.32,140.01c-4.68-7.19-12.64-9.08-19.8-4.32-8.17,5.43-10.32,17.28-4.64,25.54,2.72,3.95,7.32,5.94,11.43,6.21,9.77.65,11.83-9.82,18.43-4.67l.22,9,29.64,32.05-42.96,27.92-42.94-53.31-4.49,45.43-51.24-6.56,10.63-88.5,12.01-99.07,49.6,1.17-9.97,85.21,36.75-36.5c6.37,4.74,12.12,5.15,17.58-.12,3.88.71,7.36,3.37,9.15,6.85,1.07,2.09-.96,4.1-2.88,5.6l15.66,14.84-26.01,21.61-.64,11.29c-.96.55-4.39,1.36-5.51.34Z"/>
            <path fill="#F25F4E" d="M160.19,189.13c-3.39-20.11,5.37-39.16,21.85-50.44,18.81-12.87,43.06-14.48,66.02-9.2.71-5.1.24-10.45-2.58-15.09-3.92-5.43-10.08-7.98-16.8-8.65-12.21-1.28-23.98.97-36.38,4.73l-7.2-37.18c18.17-6.8,37.15-9.55,56.39-7.32,27.53,3.35,52.79,18.43,57.17,46.85l1.51,18.1.17,93.4-53.68.28v-16.32c-15.92,14.91-37.67,20.99-58.34,13.99-15.02-5.09-25.42-17.04-28.14-33.16ZM224.5,188.29c9.85-.87,19.26-5.87,22.24-15.07l.78-13.96c-11.38-2.94-23.06-3.37-32.81,2.75-6.3,3.96-9.57,11.79-6.53,18.5,2.76,6.08,9.3,8.41,16.32,7.78Z"/>
            <path fill="#F25F4E" d="M747.59,173.1l17.14-8.63,12.83,33.6c-13.1,10.89-28.98,18.4-46.33,19.74-25.31,1.95-47.94-10.16-59.87-32.51-14.26-26.72-14.56-59.42.09-86.07,9.79-17.81,26.3-30.16,46.06-33.42,22.68-3.74,43.56,7.09,53.74,27.5,6.55,13.12,8.21,27.59,7.06,42.42l-67,27.16c5.52,14.24,24.6,16.1,36.28,10.22ZM739.94,121.82c-1.01-6.3-2.35-10.2-5.15-14.08-4.11-4.87-10.28-6.23-16.08-3.57-10.91,5.02-15.1,20.02-13.48,32.16l34.7-14.51Z"/>
            <polygon fill="#05A7A7" points="651.47 122.82 637.45 218.42 584.21 209.6 606.15 82.37 655.91 91.09 651.47 122.82"/>
            <path fill="#05A7A7" d="M614.67,64.99c-6.65-11.46-3.36-25.54,6.39-34.1,11.74-10.31,29.56-7.71,38.75,4.27,9.64,12.56,6.71,30.32-6.63,39.15-12.59,8.34-30.23,4.96-38.52-9.32Z"/>
          </symbol>
        </defs>
      </svg>

      {/* Nav */}
      <nav className="tt-nav">
        <div className="tt-nav-inner">
          <a href="#" aria-label="TakTiek home">
            <svg className="tt-logo-svg" viewBox="0 0 922.6 236.84"><use href="#taktiek-logo"/></svg>
          </a>
          <ul className="tt-nav-links">
            <li><a href="#about">Over TakTiek</a></li>
            <li><a href="#team">Het team</a></li>
            <li><a href="#approach">Onze aanpak</a></li>
            <li><a href="#trust">Vertrouwen</a></li>
            <li><a href="#faq">Vragen</a></li>
          </ul>
          <a href="#signup" className="tt-nav-cta">Aanmelden</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="tt-hero">
        <div className="tt-hero-grid">
          <div>
            <div className="tt-eyebrow">Peergroup Weert · Vrijdagmiddag</div>
            <h1>
              Een plek voor kinderen die <span className="accent">anders denken</span>
            </h1>
            <p className="tt-hero-sub">
              Een wekelijkse peergroup voor (vermoedelijk) meer- en hoogbegaafde kinderen van 5 tot 12 jaar in Weert en Nederweert. Geen extra schoolwerk. Wel ruimte voor ideeën, samenwerking en plezier.
            </p>
            <div className="tt-hero-ctas">
              <a href="#signup" className="tt-btn-primary">Meld je kind aan</a>
              <a href="#approach" className="tt-btn-secondary">Lees hoe wij werken →</a>
            </div>
          </div>

          <div className="tt-hero-art" aria-hidden="true">
            <div className="tt-shape tt-shape-1"></div>
            <div className="tt-shape tt-shape-2"></div>
            <div className="tt-shape tt-shape-3"></div>
            <div className="tt-shape tt-shape-4"></div>
            <div className="tt-hero-card tt-hero-card-1">"Mag ik dit ook proberen?"</div>
            <div className="tt-hero-card tt-hero-card-2">"Kijk eens wat ik bedacht!"</div>
            <div className="tt-hero-card tt-hero-card-3">"Zullen we het samen doen?"</div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="tt-pillars" id="about">
        <div className="tt-section-inner">
          <div className="tt-section-header">
            <div className="tt-eyebrow tt-eyebrow-center" style={{color: 'var(--tt-coral)'}}>Wat we belangrijk vinden</div>
            <h2>Verbinding boven prestatie</h2>
            <p>Contact met ontwikkelingsgelijken is minstens zo belangrijk als cognitieve uitdaging.</p>
          </div>

          <div className="tt-pillar-grid">
            <div className="tt-pillar tt-pillar-1">
              <span className="tt-pillar-num">01</span>
              <h3>Ontmoeten</h3>
              <p>Kinderen leren kinderen kennen die op een vergelijkbare manier in de wereld staan.</p>
            </div>
            <div className="tt-pillar tt-pillar-2">
              <span className="tt-pillar-num">02</span>
              <h3>Samen denken</h3>
              <p>Geen frontale lessen. We werken aan opdrachten waarbij overleg en verschillende perspectieven nodig zijn.</p>
            </div>
            <div className="tt-pillar tt-pillar-3">
              <span className="tt-pillar-num">03</span>
              <h3>Ruimte voor jezelf</h3>
              <p>Wie even rust nodig heeft, mag dat nemen. Zelfregulatie is welkom, geen probleem.</p>
            </div>
            <div className="tt-pillar tt-pillar-4">
              <span className="tt-pillar-num">04</span>
              <h3>Bouwen aan vaardigheden</h3>
              <p>Door samen spellen te maken ontdekken kinderen hoe ze problemen aanpakken en doorzetten.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Practical strip */}
      <section className="tt-practical">
        <div className="tt-practical-grid">
          <div className="tt-practical-item">
            <div className="tt-practical-label">Voor wie</div>
            <div className="tt-practical-value">5 – 12 jaar</div>
          </div>
          <div className="tt-practical-item">
            <div className="tt-practical-label">Wanneer</div>
            <div className="tt-practical-value">Vrijdagmiddag</div>
          </div>
          <div className="tt-practical-item">
            <div className="tt-practical-label">Waar</div>
            <div className="tt-practical-value">Keenterhart Weert</div>
          </div>
          <div className="tt-practical-item">
            <div className="tt-practical-label">Groep</div>
            <div className="tt-practical-value">Max. 12 kinderen</div>
          </div>
        </div>
      </section>

      {/* Trust / Privacy as design principle */}
      <section className="tt-trust" id="trust">
        <div className="tt-trust-grid">
          <div className="tt-trust-left">
            <div className="tt-eyebrow">Hoe we met gegevens omgaan</div>
            <h2>Aanmelden voelt klein, maar er staat veel op het spel</h2>
            <p>
              Als ouder van een meer- of hoogbegaafd kind heb je waarschijnlijk al vaak gevoelige informatie moeten delen — met scholen, met zorgverleners, met instanties. Dat is niet altijd zorgvuldig gegaan.
            </p>
            <p>
              Bij TakTiek werkt het anders. We vragen alleen wat we echt nodig hebben. Bijzonderheden over je kind blijven bij de begeleiders van die sessie, niet bij de hele groep. Je kunt op elk moment je gegevens inzien, wijzigen of verwijderen — direct, zonder ons te hoeven mailen.
            </p>
            <p>
              <a href="#" className="tt-trust-link">Lees onze privacyverklaring →</a>
            </p>
          </div>

          <ul className="tt-trust-list">
            <li className="tt-trust-item">
              <div className="tt-trust-marker">
                <svg viewBox="0 0 24 24"><path d="M5 12l5 5L20 7"/></svg>
              </div>
              <div>
                <h4>Geen onnodige vragen</h4>
                <p>We vragen geen geboortedatum, geen BSN, geen diagnose, geen schoolnaam. Alleen wat we nodig hebben om je kind goed te begeleiden.</p>
              </div>
            </li>
            <li className="tt-trust-item">
              <div className="tt-trust-marker">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v6M12 16v.5"/></svg>
              </div>
              <div>
                <h4>Bij elk veld staat waarom</h4>
                <p>Geen mysterieuze formuliervelden. Bij elke vraag staat waarom we het vragen en wie de informatie te zien krijgt.</p>
              </div>
            </li>
            <li className="tt-trust-item">
              <div className="tt-trust-marker">
                <svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h10"/></svg>
              </div>
              <div>
                <h4>Gevoelige info gescheiden bewaard</h4>
                <p>Bijzonderheden over gezondheid of gevoeligheden zien alleen de begeleiders die op die sessie aanwezig zijn. Niet de hele groep, niet de community.</p>
              </div>
            </li>
            <li className="tt-trust-item">
              <div className="tt-trust-marker">
                <svg viewBox="0 0 24 24"><path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M6 6v14a2 2 0 002 2h8a2 2 0 002-2V6"/></svg>
              </div>
              <div>
                <h4>Verwijderen is een knop</h4>
                <p>Wil je stoppen? In je persoonlijke omgeving zit een knop "aanmelding intrekken". Klikken is genoeg. Geen e-mailverkeer, geen wachttijd.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="tt-cta" id="signup">
        <div className="tt-cta-card">
          <div className="tt-cta-blob-1"></div>
          <div className="tt-cta-blob-2"></div>
          <div className="tt-cta-content">
            <h2>Klaar om je kind aan te melden?</h2>
            <p>Er zijn een beperkt aantal plekken per ronde. Aanmelden kost je vijf minuten.</p>
            <a href="#" className="tt-cta-btn">Aanmeldformulier openen →</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="tt-footer">
        <div className="tt-footer-inner">
          <div>
            <span className="tt-footer-logo">
              <svg viewBox="0 0 922.6 236.84"><use href="#taktiek-logo"/></svg>
            </span>
            <p className="tt-footer-tagline">
              Wekelijkse peergroup voor (vermoedelijk) meer- en hoogbegaafde kinderen in Weert en Nederweert.
            </p>
          </div>
          <div>
            <h4>Site</h4>
            <a href="#about">Over TakTiek</a>
            <a href="#team">Het team</a>
            <a href="#approach">Onze aanpak</a>
            <a href="#faq">Vragen</a>
          </div>
          <div>
            <h4>Privacy</h4>
            <a href="#trust">Hoe we omgaan met gegevens</a>
            <a href="#">Privacyverklaring</a>
            <a href="#">Cookieverklaring</a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="mailto:peergrouptaktiek@gmail.com">peergrouptaktiek@gmail.com</a>
            <a href="https://www.facebook.com/groups/taktiek" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>
        <div className="tt-footer-bottom">
          <div>© 2026 TakTiek</div>
          <div>Voortgekomen uit HB Ouders Weert / Nederweert</div>
        </div>
      </footer>
    </div>
  );
}
