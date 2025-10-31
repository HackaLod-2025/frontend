"use client";

import { InfoRow } from "@/components/info-row";
import { HeroRow } from "@/components/hero-row";
import { DigitalHeritageRow } from "@/components/digital-heritage";
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <HeroRow onCtaClick={() => console.log("CTA clicked")} />
      <InfoRow description="Met Jouw Erfgoedpaspoort kun je op een unieke manier kennismaken met het rijke culturele erfgoed in jouw omgeving. Verzamel herinneringen, ontdek verhalen en bouw je eigen digitale collectie op van bijzondere plekken en objecten die ons verleden vertellen." />
      <DigitalHeritageRow />
      <InfoRow
        eyebrow="Voor erfgoedinstellingen"
        heading={
          <>
            Versterk uw <span className={styles.infoRowGradientOne}>digitale dienstverlening</span>
          </>
        }
        description="Jouw erfgoedpaspoort is een digitaal platform dat erfgoedinstellingen helpt om bezoekers een persoonlijke erfgoedervaring te bieden. Het stelt intstellingen in staat om bezoekersgegevens veilig te beheren en gepersonaliseerde diensten aan te bieden"
      />
    </>
  );
}
