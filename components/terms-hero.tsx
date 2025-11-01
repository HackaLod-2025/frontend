import styles from "./terms-hero.module.css";

const TermsHero = ({ title }: { title: string }) => {
  return (
    <div className={styles.termsHero}>
      <h1 className={styles.heading}>{title}</h1>
    </div>
  );
};

export { TermsHero };
