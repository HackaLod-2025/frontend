"use client";

import styles from './finish-term-selection.module.css';
import { Button } from "./ui/button";

import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";

const inter = Inter({ weight: '400', subsets: ['latin'] });

const FinishTermSelection = () => {
  const router = useRouter();

  const gotoResults = () => {
    router.push('/results');
  }

  return (
    <div className={styles.finishTermSelection}>
      <h1 className={`${styles.title} ${inter.className}`}>Klaar met selecteren?</h1>
      <Button variant={'secondary'} className={styles.button} onClick={gotoResults}>Naar mijn persoonlijke erfgoedpagina</Button>
    </div>
  )
}

export { FinishTermSelection }
