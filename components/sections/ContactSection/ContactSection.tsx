import Image from "next/image";

import { SectionHeader } from "@/components/SectionHeader/SectionHeader";
import type { ContactInfo } from "@/lib/types/portfolio";
import { LinkedInIcon, Mail, MapPin, Phone } from "@/helper";

import styles from "./contact-section.module.css";

type Props = {
  backgroundUrl: string;
  contact: ContactInfo;
  linkedinUrl: string;
};

export function ContactSection({ backgroundUrl, contact, linkedinUrl }: Props) {
  return (
    <section id="contact" className={`section ${styles.section}`}>
      {backgroundUrl ? (
        <Image
          className={styles.bg}
          src={backgroundUrl}
          fill
          priority
          alt="contact background"
          aria-hidden
        />
      ) : null}
      <div className={styles.overlay} aria-hidden />
      <div className={`shell ${styles.inner}`}>
        <SectionHeader label="Say hello" title="Contact" />
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <MapPin />
            </div>
            <div>
              <p className={styles.label}>Address</p>
              <p className={styles.value}>{contact.address || "—"}</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <Phone />
            </div>
            <div>
              <p className={styles.label}>Phone</p>
              <p className={styles.value}>
                {contact.phone ? (
                  <a href={`tel:${contact.phone.replace(/\s+/g, "")}`}>
                    {contact.phone}
                  </a>
                ) : (
                  "—"
                )}
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <Mail />
            </div>
            <div>
              <p className={styles.label}>Email</p>
              <p className={styles.value}>
                {contact.email ? (
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                ) : (
                  "—"
                )}
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <LinkedInIcon />
            </div>
            <div>
              <p className={styles.label}>LinkedIn</p>
              <p className={styles.value}>
                <a href={linkedinUrl} target="_blank" rel="noreferrer">
                  Profile
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
