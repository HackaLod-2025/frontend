import { Term } from "@/app/types/terms";
import styles from "./search-results.module.css";
import { TermResult } from "@/components/term-result";

const SearchResults = ({ results }: { results: Term[] }) => {
  return (
    <div>
      <div className={styles.filterBar}>Resultaten</div>
      <div>
        {results.map((result: Term, idx: number) => {
          return <TermResult term={result} key={`${result.uri}-${idx}`} />;
        })}
      </div>
    </div>
  );
};

export { SearchResults };
