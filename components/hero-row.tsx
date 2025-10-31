"use client";

import { Button } from "@/components/ui/button";
import styles from './hero-row.module.css';

const HeroRow = ({
  title = (
    <>
      Welkom bij jouw <span className={styles.heroTitleGradient}>erfgoedpaspoort</span>
    </>
  ),
  description = "Ontdek en bewaar je cultureel erfgoed",
  ctaLabel = "Ontdek meer",
  onCtaClick = () => {},
  Illustration = DefaultIllustration,
}) => {
  return (
    <section aria-label="Hero" className={styles.heroRow}>
      <div className={`${styles.heroRowInner} ${styles.featureOne}`}>
        <article className={styles.heroArticle}>
          <h1 className={styles.heroTitle}>
            {title}
          </h1>
          <p className={styles.heroDescription}>
            {description}
          </p>
          <div className="mt-6">
            <Button className={styles.ctaButton} onClick={onCtaClick}>
              {ctaLabel}
            </Button>
          </div>

          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-white shadow-inner"
          />
        </article>

        <aside className={styles.heroAside}>
          <Illustration />
        </aside>
      </div>
    </section>
  );
};

function DefaultIllustration() {
  return (
    <div className="relative h-full w-full aspect-[16/11] md:aspect-[16/9]">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/40 via-emerald-600/30 to-emerald-900/40" />
      <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_70%_40%,black,transparent_60%)] bg-emerald-300/30" />
      <div className="absolute inset-0 ring-1 ring-white/5" />
    </div>
  );
}

export { HeroRow };
