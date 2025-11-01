import styles from "./search-results.module.css";
import { Dataset } from "@/app/types/datasets";
import { DatasetResult } from "@/components/dataset-result";

const SearchResultsDataset = ({
  results,
  resultsLoading,
  onSelectTerm,
}: {
  results: Dataset[];
  resultsLoading: boolean;
  onSelectTerm: (prefLabel: string, source: string) => void;
}) => {
  return (
    <div>
      {resultsLoading ? (
        <div className={styles.loading}>Bezig met laden...</div>
      ) : (
        <>
          <div className={styles.filterBar}>Resultaten: {results.length}</div>
          <div>
            {results.map((result: Dataset, idx: number) => {
              return (
                <DatasetResult
                  dataset={result}
                  key={`${result.publisher}-${idx}`}
                  onSelectTerm={onSelectTerm}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export { SearchResultsDataset };
