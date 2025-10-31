import styles from "./footer.module.css";

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={`${styles.mainFooter} ${className ?? ""}`}>
      <div className={styles.mainFooterInner}>
        <p>© 2024 Erfgoed Paspoort. All rights reserved.</p>
      </div>
    </footer>
  );
};

export { Footer };
