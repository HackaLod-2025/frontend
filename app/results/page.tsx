"use client";

import { AccountNavigation } from "@/components/account-navigation";
import { MasonryWrapper } from "@/components/masonry";
import styles from './page.module.css';

export default function ResultsPage() {
  const items = Array.from({ length: 100 }, (_, i) => {
    const height = Math.floor(Math.random() * (800 - 400 + 1)) + 400;
    return {
      id: (i + 1).toString(),
      title: `Resultaat ${i + 1}`,
      category: `Categorie ${String.fromCharCode(65 + (i % 3))}`,
      image: `https://placehold.co/600x${height}/png`
    };
  });

  return (
    <>
      <AccountNavigation />
      <MasonryWrapper items={items} className={styles.masonry} />
    </>
  );
}
