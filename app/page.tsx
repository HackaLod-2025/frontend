"use client";

import { AboutHome } from "@/components/about-home";
import { HeroRow } from "@/components/hero-row";
import DigitalHeritageRow from "@/components/digital-heritage";

export default function Home() {
  return (
    <>
      <HeroRow onCtaClick={() => console.log('CTA clicked')} />
      <AboutHome />
      <DigitalHeritageRow />
    </>
  );
}
