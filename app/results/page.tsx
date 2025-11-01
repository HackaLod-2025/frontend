"use client";

import { AccountNavigation } from "@/components/account-navigation";
import { MasonryWrapper } from "@/components/masonry";

export default function ResultsPage() {
  const items = [
    {
      id: '1',
      title: "Resultaat 1",
      category: "Categorie A",
      image: "https://placehold.co/600x400/png"
    },
    {
      id: '2',
      title: "Resultaat 2",
      category: "Categorie A",
      image: "https://placehold.co/600x400/png"
    }
  ]
  return (
    <>
      <AccountNavigation />
      <MasonryWrapper items={items} />
    </>
  );
}
