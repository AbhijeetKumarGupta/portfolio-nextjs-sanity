import styles from "./section-header.module.css";

type Props = {
  label?: string;
  title: string;
  titleAs?: "h2" | "h3";
  variant?: "section" | "compact";
  className?: string;
};

export function SectionHeader({
  label,
  title,
  titleAs = "h2",
  variant = "section",
  className,
}: Props) {
  const Heading = titleAs === "h3" ? "h3" : "h2";

  return (
    <header
      className={[
        styles.root,
        variant === "compact" ? styles.compact : styles.section,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className={[styles.cluster, !label ? styles.clusterTitleOnly : ""]
          .filter(Boolean)
          .join(" ")}
      >
        {label ? <p className={styles.overline}>{label}</p> : null}
        <Heading className={styles.title}>{title}</Heading>
      </div>
    </header>
  );
}
