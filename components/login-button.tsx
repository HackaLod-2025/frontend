import styles from "./login-button.module.css";
import { ReactNode } from "react";

const LoginButton = ({ children }: { children: ReactNode }) => {
  return <button className={styles.loginButton}>{children}</button>;
};

export { LoginButton };
