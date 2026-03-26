import Image from "next/image";
import styles from "./home-hero.module.css";

type Props = {
  name: string;
  headline: string;
  backgroundUrl: string;
};

export function HomeHero({ name, headline, backgroundUrl }: Props) {
  return (
    <section id="home" className={styles.hero}>
      <Image
        className={styles.bg}
        src={backgroundUrl}
        fill
        priority
        alt="hero background"
        style={backgroundUrl ? {} : { background: "var(--bg-surface)" }}
      />
      <div className={styles.overlay} />
      <div className={styles.grid}>
        <div>
          <p className={styles.kicker}>Hello</p>
          <h1 className={styles.title}>
            <span>I&apos;m {name}</span>
          </h1>
          <p className={styles.sub}>
            <strong>{headline}</strong>
          </p>
          <div className={styles.actions}>
            <a href="#projects" className={styles.primaryBtn}>
              View work
            </a>
            <a href="#contact" className={styles.ghostBtn}>
              Get in touch
            </a>
          </div>
        </div>
        <aside className={styles.sideCard} aria-label="Highlights">
          <p className={styles.statLabel}>What I Do</p>
          <p className={styles.statValue}>End-to-End Product Development</p>
          <div className={styles.statDivider} />
          <p className={styles.statLabel}>Core Stack</p>
          <p className={styles.statValue}>
            Next.js · React · Java · Node.js <br />
            SQL · MongoDB
          </p>
        </aside>
      </div>
    </section>
  );
}
