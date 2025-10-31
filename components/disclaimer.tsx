import styles from "./disclaimer.module.css";

const Disclaimer = ({ className }: { className?: string }) => {
  return (
    <footer className={`${styles.disclaimer} ${className ?? ""}`}>
      <div className={styles.disclaimerInner}>
        <p>© MeKluppie {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export { Disclaimer };
