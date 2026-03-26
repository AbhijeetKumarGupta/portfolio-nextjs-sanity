import Image from "next/image";

import { SectionHeader } from "@/components/SectionHeader/SectionHeader";
import type { CertificationItem } from "@/lib/types/portfolio";

import styles from "./certifications-section.module.css";

type Props = {
  items: CertificationItem[];
};

export function CertificationsSection({ items }: Props) {
  return (
    <section id="certificates" className={`section ${styles.wrap}`}>
      <div className="shell">
        <SectionHeader label="Achievement" title="Certifications" />
        <div className={styles.grid}>
          {items?.map?.((item, index) => (
            <article
              key={`${index}-${item.certificateName}`}
              className={`card ${styles.card}`}
            >
              <a
                href={item.instituteLink}
                target="_blank"
                rel="noreferrer"
                className={styles.institute}
                aria-label="Institute"
              >
                {item.instituteLogoUrl ? (
                  <Image
                    src={item.instituteLogoUrl}
                    alt=""
                    width={48}
                    height={48}
                  />
                ) : null}
              </a>
              <div className={styles.details}>
                <a
                  href={item.certificateHref}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.certLink}
                >
                  <h3 className={styles.certName}>{item.certificateName}</h3>
                </a>
                <p className={styles.skillLine}>
                  Key skill · <span>{item.skillName}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
