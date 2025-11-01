import styles from "./pro-features.module.css";
import { ReactNode } from "react";

interface ProFeatureItemsProps {
  title: string;
  icon: ReactNode;
  description: string;
}

interface ProFeatureProps {
  title: string;
  items: ProFeatureItemsProps[];
}

const ProFeatures = ({ title, items }: ProFeatureProps) => {
  return (
    <div className={styles.proFeatureContainer}>
      <h2 className={styles.proFeatureTitle}>{title}</h2>

      <div className={styles.proFeatureGrid}>
        {items.map((item: ProFeatureItemsProps) => {
          return (
            <div key={item.title} className={styles.proFeatureCard}>
              {item.icon}
              {/*<img*/}
              {/*  src={item.icon}*/}
              {/*  alt={`${item.title} icon`}*/}
              {/*  className={styles.proFeatureIcon}*/}
              {/*/>*/}
              <h3 className={styles.proFeatureTitle}>{item.title}</h3>
              <p className={styles.proFeatureDescription}>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { ProFeatures };
