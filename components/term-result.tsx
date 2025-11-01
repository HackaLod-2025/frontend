import { Term } from "@/app/types/terms";
import styles from "./term-result.module.css";

import { Inter } from "next/font/google";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const inter = Inter({ weight: "400", subsets: ["latin"] });

const TermResult = ({ term }: { term: Term }) => {
  return (
    <div className={styles.termResultContainer}>
      <div className={styles.termResultHeader}>
        <div className={styles.termResultTitle}>
          <h1 className={styles.title}>{term.prefLabel}</h1>
          <span className={styles.tag}>{term.source}</span>
        </div>
        <div className={styles.actions}>
          <Button className={styles.button}><Check /></Button>
          <Button className={styles.button}><X /></Button>
        </div>
      </div>
      <p className={`${styles.description} ${inter.className}`}>
        {term.scopeNote}
      </p>
    </div>
  );
};

export { TermResult };
