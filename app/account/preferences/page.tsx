"use client";

import styles from "./page.module.css";
import { Button } from "@/components/ui/button";
import { AccountNavigation } from "@/components/account-navigation";

export default function AccountPage() {
  return (
    <>
      <AccountNavigation />
      <div className={styles.accountPage}>
        <div className={styles.accountPageInner}>
          <h1 className={styles.heading}>Er is nog niets te zien</h1>
          <Button className={styles.button}>
            Maak je eerste set aan voorkeuren
          </Button>
        </div>
      </div>
    </>
  );
}
