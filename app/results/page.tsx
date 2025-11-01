"use client";

import { AccountNavigation } from "@/components/account-navigation";
import dynamic from "next/dynamic";
import styles from './page.module.css';
import { getDefaultSession } from "@inrupt/solid-client-authn-browser";
import { useEffect, useState } from "react";

const MasonryWrapper = dynamic(() => import("@/components/masonry").then(mod => mod.MasonryWrapper), { ssr: false });

interface ImageItem {
  image: string;
  widgetLabel: string;
  widgetImage: string;
}

export default function ResultsPage() {
  const [images, setImages] = useState<ImageItem[] | null>(null);
  const session = getDefaultSession();

  const getImages = async () => {
    const data = await session.fetch('http://localhost:8080/api/datasets/images', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: 'amsterdam' })
    })
    const results = await data.json();
    setImages(results);
  }

  useEffect(() => {
    getImages();
  }, []);

  const items = images
    ? images.map((img: any, index: number) => ({
        id: (index + 1).toString(),
        title: img.widgetLabel,
        image: img.widgetImage.replace('/full/full/', '/full/250,/'),
        category: 'Afbeelding'
      }))
    : [];

  return (
    <>
      <AccountNavigation />
      <MasonryWrapper items={items} className={styles.masonry} />
    </>
  );
}
