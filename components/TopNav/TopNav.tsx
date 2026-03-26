"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import type { SocialLinks } from "@/lib/types/portfolio";
import { GithubIcon, LinkedInIcon, navLinks } from "@/helper";

import styles from "./top-nav.module.css";

type Props = {
  logoUrl: string;
  links: SocialLinks;
};

export function TopNav({ logoUrl, links }: Props) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={`shell ${styles.inner}`}>
        <a href="#home" className={styles.logoWrap} onClick={close}>
          {logoUrl ? (
            <Image
              src={logoUrl}
              alt=""
              width={48}
              height={48}
              className={styles.logo}
              priority
            />
          ) : (
            <span className={styles.logoFallback} aria-hidden>
              ◆
            </span>
          )}
        </a>

        <nav className={styles.desktopNav} aria-label="Primary">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className={styles.navLink}>
              {label}
            </a>
          ))}
        </nav>

        <div className={styles.social}>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className={styles.iconBtn}
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className={styles.iconBtn}
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
        </div>

        <button
          type="button"
          className={styles.menuBtn}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.srOnly}>Menu</span>
          <span className={styles.burger} data-open={open} />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={styles.mobilePanel}
        data-open={open}
        aria-hidden={!open}
      >
        <nav className={styles.mobileNav} aria-label="Mobile">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={styles.mobileLink}
              onClick={close}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className={styles.mobileSocial}>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
