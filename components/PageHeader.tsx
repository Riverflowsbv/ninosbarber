import styles from "./PageHeader.module.css";

export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className={styles.header}>
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.pole} aria-hidden="true" />
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className={styles.title}>{title}</h1>
        {intro && <p className={styles.intro}>{intro}</p>}
      </div>
    </header>
  );
}
