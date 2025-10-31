import { Separator } from "@/components/ui/separator";
import styles from "./about-home.module.css";

import { Inter } from "next/font/google";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const AboutHome = () => {
  return (
    <section className={styles.aboutHome}>
      <div className={styles.aboutOne}>
        <h3 className={`${inter.variable}`}>Hoe het werkt</h3>
        <h1 className={styles.aboutHeading}>Jouw digitale</h1>
        <h1 className={`${styles.aboutHeading} ${styles.aboutHeadingGradient}`}>
          Erfgoedervaring
        </h1>
      </div>
      <Separator className={styles.aboutSeparator} orientation="vertical" />
      <div className={styles.aboutTwo}>
        <p className={`${inter.variable}`}>
          Met Jouw Erfgoedpaspoort kun je op een unieke manier kennismaken met
          het rijke culturele erfgoed in jouw omgeving. Verzamel herinneringen,
          ontdek verhalen en bouw je eigen digitale collectie op van bijzondere
          plekken en objecten die ons verleden vertellen.
        </p>
      </div>
    </section>
  );
};

export { AboutHome };
