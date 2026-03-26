import Image from "next/image";

import { SectionHeader } from "@/components/SectionHeader/SectionHeader";
import type { SkillItem } from "@/lib/types/portfolio";

import styles from "./skills-section.module.css";

type Props = {
  backgroundUrl: string;
  skills: SkillItem[];
};

export function SkillsSection({ backgroundUrl, skills }: Props) {
  return (
    <section id="skills" className={`section ${styles.section}`}>
      {backgroundUrl ? (
        <div
          className={styles.bg}
          style={{ backgroundImage: `url(${backgroundUrl})` }}
          aria-hidden
        />
      ) : null}
      <div className={styles.overlay} aria-hidden />
      <div className={`shell ${styles.inner}`}>
        <SectionHeader title="Skills" />
        <div className={styles.grid}>
          {skills?.map?.((skill) => (
            <div key={skill.skillName} className={styles.skill}>
              <a
                href={skill.skillDetailsLink}
                target="_blank"
                rel="noreferrer"
                aria-label={`${skill.skillName} details`}
              >
                {skill.logoUrl ? (
                  <Image
                    src={skill.logoUrl}
                    alt=""
                    width={48}
                    height={48}
                    className={styles.skillIcon}
                  />
                ) : null}
                <p className={styles.skillName}>{skill.skillName}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
