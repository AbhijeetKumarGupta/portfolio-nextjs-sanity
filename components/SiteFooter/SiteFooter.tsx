import Image from "next/image";

import type { SocialLinks } from "@/lib/types/portfolio";

import styles from "./site-footer.module.css";

type Props = {
  logoUrl: string;
  links: SocialLinks;
};

export function SiteFooter({ logoUrl, links }: Props) {
  return (
    <footer className={styles.footer}>
      <div className={`shell ${styles.inner}`}>
        <a href="#home" className={styles.logoBtn} aria-label="Back to top">
          {logoUrl ? (
            <Image
              src={logoUrl}
              alt=""
              width={40}
              height={40}
              className={styles.logo}
            />
          ) : (
            <span className={styles.logoFallback}>◆</span>
          )}
        </a>
        <div className={styles.links}>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span className={styles.dot} aria-hidden />
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <p className={styles.note}>
          © 2026 Abhijeet Kumar Gupta. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
