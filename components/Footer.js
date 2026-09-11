import Link from 'next/link';
import { FaEnvelope, FaFolderOpen, FaGithub, FaLinkedinIn } from 'react-icons/fa6';

const footerLinks = [
  { href: 'https://www.linkedin.com', label: 'LinkedIn', icon: FaLinkedinIn },
  { href: 'https://github.com', label: 'GitHub', icon: FaGithub },
  { href: 'mailto:hello@example.com', label: 'Email', icon: FaEnvelope },
  { href: '/projects', label: 'Projects', icon: FaFolderOpen }
];

export default function Footer() {
  return (
    <>
      <section className="footer-cta-section" id="contact">
        <div className="footer-inner section-width">
          <h2>
            Let&apos;s design better
            <br />
            <span className="light-italic">digital experiences.</span>
          </h2>
          <p>
            Open to UX/UI roles where I can design, learn fast, and help make the product feel better.
          </p>
          <div className="footer-actions">
            {footerLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link key={link.label} href={link.href}>
                  <span className="footer-link-icon" aria-hidden="true"><link.icon /></span>
                  <span>{link.label}</span>
                </Link>
              ) : (
                <a key={link.label} href={link.href}>
                  <span className="footer-link-icon" aria-hidden="true"><link.icon /></span>
                  <span>{link.label}</span>
                </a>
              )
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-bottom-bar">
          <p className="footer-note">© 2026 Lesliee Cruz. Built with curiosity &amp; intention.</p>
        </div>
      </footer>
    </>
  );
}