import styles from "./term-result.module.css";

import { Inter } from "next/font/google";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dataset } from "@/app/types/datasets";

const inter = Inter({ weight: "400", subsets: ["latin"] });

const DatasetResult = ({
  dataset,
  onSelectTerm,
}: {
  dataset: Dataset;
  onSelectTerm: (prefLabel: string, source: string) => void;
}) => {
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
    onSelectTerm(dataset.title, dataset.publisher);
  };

  return (
    <div className={styles.termResultContainer}>
      <div className={styles.termResultHeader}>
        <div className={styles.termResultTitle}>
          <h1 className={styles.title}>{dataset.title}</h1>
          <span className={styles.tag}>{dataset.publisher}</span>
        </div>
        <div className={styles.actions}>
          <Button
            className={`${styles.button} ${selected ? styles.buttonSelected : null}`}
            onClick={handleSelect}
          >
            <Check />
          </Button>
          <Button className={styles.button}>
            <X />
          </Button>
        </div>
      </div>
      <p className={`${styles.description} ${inter.className}`}>
        {dataset.description}
      </p>
    </div>
  );
};

export { DatasetResult };
