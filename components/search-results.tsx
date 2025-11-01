import { Term } from "@/app/types/terms";
import styles from "./search-results.module.css";
import { TermResult } from "@/components/term-result";

const SearchResults = ({ results, onSelectTerm }: { results: Term[], onSelectTerm: (prefLabel: string, source: string) => void }) => {
  return (
    <div>
      <div className={styles.filterBar}>Resultaten: {results.length}</div>
      <div>
        {results.map((result: Term, idx: number) => {
          return <TermResult term={result} key={`${result.uri}-${idx}`} onSelectTerm={onSelectTerm} />;
        })}
      </div>
    </div>
  );
};

export { SearchResults };
