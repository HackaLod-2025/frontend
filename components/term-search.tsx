import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import styles from './terms-search.module.css';

import { Inter } from "next/font/google";
import { FormEvent, useRef } from "react";
import { useRouter } from "next/navigation";

const inter = Inter({ weight: '200', subsets: ['latin'] });

const TermsSearch = ({ searchCallback }: { searchCallback: (event: FormEvent) => void }) => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const searchTerms = (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const value = inputRef.current?.value;
    console.log(value);
    searchCallback(e);
  }

  return (
    <form onSubmit={searchTerms} className={styles.searchForm}>
      <Label className={`${styles.searchLabel} ${inter.className}`}>Wat vind je interessant?</Label>
      <div className={styles.searchInput}>
        <Input ref={inputRef} />
        <Button onSubmit={searchTerms}>Zoeken</Button>
      </div>
    </form>
  );
};

export { TermsSearch };
