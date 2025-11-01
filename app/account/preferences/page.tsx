"use client";

import styles from "./page.module.css";
import { Button } from "@/components/ui/button";
import { AccountNavigation } from "@/components/account-navigation";
import { useState } from "react";

import { Inter } from 'next/font/google';
import { useRouter } from "next/navigation";

const inter = Inter({ weight: '200', subsets: ['latin'] });

export default function AccountPage() {
  const [collection, setCollection] = useState(false);
  const router = useRouter();

  const createCollection = () => {
    setCollection(true);
  };

  return (
    <>
      <AccountNavigation />
      <div className={styles.accountPage}>
        {!collection ? (
          <div className={styles.accountPageInner}>
            <h1 className={styles.heading}>Er is nog niets te zien</h1>
            <Button onClick={createCollection} className={styles.button}>
              Maak je eerste set aan voorkeuren
            </Button>
          </div>
        ) : null}

        {collection ? (
          <form onSubmit={() => router.push('/account/termen')}>
            <h3 className={inter.className}>Geef je collectie een naam</h3>
            <input type="text" placeholder="Naam van je collectie" className={styles.input} />
            <span className={styles.hint}>Bijvoorbeeld “Literatuur”</span>
          </form>
        ) : null}
      </div>
    </>
  );
}
