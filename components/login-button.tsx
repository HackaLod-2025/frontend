"use client";

import styles from "./login-button.module.css";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";


const LoginButton = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  return <button onClick={() => router.push('/login')} className={styles.loginButton}>{children}</button>;
};

export { LoginButton };
