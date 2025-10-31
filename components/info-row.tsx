import { Separator } from "@/components/ui/separator";
import styles from "./info-row.module.css";

import { Inter } from "next/font/google";
import { useIsMobile } from "@/hooks/use-mobile";
import { ReactNode } from "react";

const inter = Inter({ variable: "--font-inter", weight: '300', subsets: ["latin"] });

interface InfoRowProps {
  eyebrow?: string;
  heading?: ReactNode;
  description: string;
}

const InfoRow = ({
  eyebrow = "Hoe het werkt",
  heading = (
    <>
      Jouw digitale{" "}
      <span className={styles.aboutHeadingGradient}>erfgoedervaring</span>
    </>
  ),
  description,
}: InfoRowProps) => {
  const isMobile = useIsMobile();
  return (
    <section className={styles.aboutHome}>
      <div className={styles.aboutOne}>
        <h3 className={`${inter.className}`}>{eyebrow}</h3>
        <h1 className={styles.aboutHeading}>{heading}</h1>
      </div>
      <Separator className={styles.aboutSeparator} orientation={isMobile ? 'horizontal' : 'vertical'} />
      <div className={styles.aboutTwo}>
        <p className={`${inter.variable}`}>{description}</p>
      </div>
    </section>
  );
};

export { InfoRow };
