import Image from "next/image";

import { SectionHeader } from "@/components/SectionHeader/SectionHeader";

import styles from "./about-section.module.css";

type Props = {
  imageUrl: string;
  bio: string;
};

export function AboutSection({ imageUrl, bio }: Props) {
  const paragraphs = bio?.split?.(/\n+/)?.filter?.(Boolean);

  return (
    <section id="about" className={`section ${styles.wrap}`}>
      <div
        className={`shell ${styles.grid} ${!imageUrl ? styles.gridSingle : ""}`}
      >
        {imageUrl ? (
          <figure className={styles.figure}>
            <Image
              src={imageUrl}
              alt=""
              width={640}
              height={800}
              sizes="(max-width: 900px) 100vw, 22rem"
              priority
            />
          </figure>
        ) : null}
        <div className={styles.copy}>
          <SectionHeader label="Profile" title="About me" />
          {paragraphs.length > 0 ? (
            paragraphs.map((p, i) => (
              <p key={`${i}-${p.slice(0, 32)}`} className={styles.body}>
                {p}
              </p>
            ))
          ) : (
            <p className={`${styles.body} muted`}>Bio will appear here.</p>
          )}
        </div>
      </div>
    </section>
  );
}
