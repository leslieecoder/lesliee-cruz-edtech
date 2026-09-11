'use client';

import { useEffect, useState } from 'react';

const roles = ['UX/UI Designer', 'Product Designer', 'Front-End Designer'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setIsFading(true);

      window.setTimeout(() => {
        setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
        setIsFading(false);
      }, 380);
    }, 2800);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="hero section-width" id="home">
      <div className="hero-decor hero-decor-left bubble">
        <img src="/assets/hero-figure.png" alt="" aria-hidden="true" />
      </div>
      <div className="hero-decor hero-decor-right bubble">
        <img src="/assets/hero-figure.png" alt="" aria-hidden="true" />
      </div>
      <img className="hero-star hero-star-top-left" src="/assets/hreo-figure-2.png" alt="" aria-hidden="true" />
      <img className="hero-star hero-star-top-right" src="/assets/hreo-figure-2.png" alt="" aria-hidden="true" />
      <img className="hero-star hero-star-bottom-left" src="/assets/hreo-figure-2.png" alt="" aria-hidden="true" />
      <img className="hero-star hero-star-bottom-right" src="/assets/hreo-figure-2.png" alt="" aria-hidden="true" />

      <div className="hero-avatar-wrap">
        <div className="hero-avatar-ring hero-avatar-flip" aria-label="Portrait avatar of Lesliee Cruz">
          <div className="hero-avatar-card">
            <div className="hero-avatar-face hero-avatar-front">
              <img className="hero-avatar" src="/assets/avatar-3.png" alt="Portrait avatar of Lesliee Cruz" />
            </div>
            <div className="hero-avatar-face hero-avatar-back" aria-hidden="true">
              <img className="hero-avatar" src="/assets/avatar-1.png" alt="Coding avatar of Lesliee Cruz" />
            </div>
          </div>
        </div>
      </div>
      <h1>
        <span className="hero-intro"></span> <span className="script script-bright">I'm Lesliee</span>
        <br />
        <span className={`gradient-text role-cycle${isFading ? ' is-fading' : ''}`}>{roles[roleIndex]}</span>
      </h1>
      <p className="hero-copy">
        I design thoughtful web and mobile experiences that feel clear, useful, and a little delightful.
      </p>
      <div className="hero-actions">
        <a className="button button-primary" href="#projects">View UX Case Studies</a>
        <a className="button button-secondary" href="#contact">Contact Me</a>
      </div>
    </section>
  );
}