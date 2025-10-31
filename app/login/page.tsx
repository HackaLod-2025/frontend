"use client";

import { startLogin } from "../auth/authentication";
import styles from './page.module.css';
import { Button } from "@/components/ui/button";
import { Inter } from 'next/font/google';

const inter = Inter({ weight: '700', subsets: ['latin'] });

export default function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginPanel}>
        <h1 className={`${styles.heading} ${inter.className}`}>Verbind je erfgoedpaspoort</h1>
        <Button className={styles.loginButton} onClick={startLogin}>Verbind met mijn pod</Button>
      </div>
    </div>
  );
}

