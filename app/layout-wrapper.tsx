"use client";
import { usePathname } from "next/navigation";
import { MainMenu } from "@/components/main-menu";
import { LoginButton } from "@/components/login-button";
import { Footer } from "@/components/Footer";
import { Disclaimer } from "@/components/disclaimer";
import Link from "next/link";
import Image from "next/image";
import styles from "./layout.module.css";

export default function LayoutWrapper({
  children,
  menuItems,
}: {
  children: React.ReactNode;
  menuItems: any[];
}) {
  const pathname = usePathname();
  const isBlankTemplate =
    pathname === "/login" ||
    pathname === "/account/preferences" ||
    pathname === "/results" ||
    pathname === "/account/termen";

  return (
    <div className={styles.pageLayout}>
      {!isBlankTemplate && (
        <div className={styles.mainMenuWrapper}>
          <Link href={"/"}>
            <Image
              src="/erfgoed-paspoort.svg"
              alt="Erfgoed Paspoort"
              width={120}
              height={60}
            />
          </Link>
          <MainMenu items={menuItems} />
          <LoginButton>Login</LoginButton>
        </div>
      )}
      {children}

      {!isBlankTemplate && (
        <>
          <Footer className={styles.fullBleed} />
          <Disclaimer className={styles.fullBleed} />
        </>
      )}
    </div>
  );
}
