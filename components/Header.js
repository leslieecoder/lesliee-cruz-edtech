"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

const navLinks = [
  { href: '#home', id: 'home', label: 'Home' },
  { href: '#projects', id: 'projects', label: 'Projects' },
  { href: '#about', id: 'about', label: 'About' },
  { href: '#skills', id: 'skills', label: 'Stack' },
  { href: '#contact', id: 'contact', label: 'Contact' }
];

const socialLinks = [
  { href: 'https://www.linkedin.com', label: 'LinkedIn', icon: FaLinkedinIn },
  { href: 'https://www.instagram.com', label: 'Instagram', icon: FaInstagram },
  { href: 'https://github.com', label: 'GitHub', icon: FaGithub }
];

export default function Header() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection(pathname.startsWith('/projects') ? 'projects' : 'home');
      return undefined;
    }

    const sectionIds = navLinks.map((link) => link.id);

    const updateActiveSection = () => {
      const currentHash = window.location.hash.replace('#', '');

      if (currentHash && sectionIds.includes(currentHash)) {
        setActiveSection(currentHash);
        return;
      }

      const scrollProbe = window.innerHeight * 0.32;
      let currentSection = 'home';

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);

        if (!section) {
          continue;
        }

        const rect = section.getBoundingClientRect();

        if (rect.top <= scrollProbe && rect.bottom >= scrollProbe) {
          currentSection = sectionId;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('hashchange', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('hashchange', updateActiveSection);
    };
  }, [pathname]);

  const getLinkHref = (href) => (pathname === '/' ? href : `/${href}`);

  return (
    <header className="site-header section-width">
      <Link className="brand" href={pathname === '/' ? '#home' : '/#home'} aria-label="Lesliee Cruz home">
        <img src="/assets/logo.png" alt="Lesliee Cruz logo" />
        <span className="brand-wordmark">
          <span className="brand-lesliee">Lesliee</span>{' '}
          <span className="brand-cruz">Cruz</span>
        </span>
      </Link>

      <nav className="site-nav" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            className={activeSection === link.id ? 'is-active' : undefined}
            href={getLinkHref(link.href)}
            onClick={() => setActiveSection(link.id)}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="social-links" aria-label="Social links">
        {socialLinks.map(({ href, label, icon: Icon }) => (
          <a key={label} href={href} aria-label={label}>
            <Icon aria-hidden="true" />
          </a>
        ))}
      </div>
    </header>
  );
}