import Image from "next/image";

import { SectionHeader } from "@/components/SectionHeader/SectionHeader";
import type { ExperienceItem } from "@/lib/types/portfolio";

import styles from "./experience-section.module.css";

type Props = {
  items: ExperienceItem[];
};

export function ExperienceSection({ items }: Props) {
  return (
    <section id="experience" className={`section ${styles.wrap}`}>
      <div className="shell">
        <SectionHeader label="Career" title="Experience" />
        <div className={styles.grid}>
          {items?.map?.((item) => (
            <article
              key={`${item.companyName}-${item.year}`}
              className={`card ${styles.card}`}
            >
              <div className={styles.logoRow}>
                {item.companyLogoUrl ? (
                  <Image
                    src={item.companyLogoUrl}
                    alt=""
                    width={48}
                    height={48}
                    className={styles.logo}
                  />
                ) : null}
                <h3 className={styles.company}>
                  {item.companyLink ? (
                    <a href={item.companyLink} target="_blank" rel="noreferrer">
                      {item.companyName}
                    </a>
                  ) : (
                    item.companyName
                  )}
                </h3>
              </div>
              <span className={styles.badge}>{item.role}</span>
              <p className={styles.desc}>{item.companyDescription}</p>
              <div className={styles.meta}>
                <span>
                  <strong>Duration</strong> · {item.workingDuration}
                </span>
                <span>
                  <strong>Year</strong> · {item.year}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
