"use client";

import { AccountNavigation } from "@/components/account-navigation";
import { TermsHero } from "@/components/terms-hero";
import { TermsSearch } from "@/components/term-search";
import { useState } from "react";
import { getDefaultSession } from "@inrupt/solid-client-authn-browser";
import { RecommendedSourcesResult } from "@/app/types/sources";
import { FinishTermSelection } from "@/components/finish-term-selection";
import { DatasetResult } from "@/app/types/datasets";
import { SearchResultsDataset } from "@/components/search-results-dataset";

export default function DatasetPage() {
  const [sourcesData, setSourcesData] =
    useState<RecommendedSourcesResult | null>(null);
  const [searchData, setSearchData] = useState<DatasetResult | null>(null);
  const [sessionReady, setSessionReady] = useState(false);
  const [loading, setLoading] = useState(true);
  const [resultsLoading, setResultsLoading] = useState(false);
  const [selectedTerms, setSelectedTerms] = useState<
    { prefLabel: string; source: string }[]
  >([]);
  const session = getDefaultSession();

  const loadData = async () => {
    const datasetResponse = await session.fetch(
      "http://localhost:8080/api/dataset/recommend",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userQuery: 'kerken' }),
      },
    );
    const datasetData = await datasetResponse.json();
    setSearchData(datasetData);
    setResultsLoading(false);
  }

  const handleSearch = async (value: string) => {
    setSessionReady(true);
    setResultsLoading(true);

    if (!value || value.trim() === "") {
      alert("Voer een geldige zoekterm in.");
      return;
    }

    if (!sessionReady) {
      alert("Sessie wordt hersteld, probeer het zo opnieuw.");
      return;
    }

    // Uncomment and adjust the following if you have session context
    if (!session.info.isLoggedIn) {
      alert("Je moet ingelogd zijn om termen te zoeken.");
      return;
    }

    try {
      const datasetResponse = await session.fetch(
        "http://localhost:8080/api/dataset/recommend",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userQuery: value }),
        },
      );
      const datasetData = await datasetResponse.json();
      setSearchData(datasetData);
      setResultsLoading(false);
    } catch (error) {
      alert("Er is een fout opgetreden bij het zoeken.");
      setSearchData(null);
      setResultsLoading(false);
    }
  };

  const handleSelectDataset = (prefLabel: string, source: string) => {
    setSelectedTerms((prev) => {
      // Prevent duplicates
      if (prev.some((t) => t.prefLabel === prefLabel && t.source === source))
        return prev;
      return [...prev, { prefLabel, source }];
    });
  };

  return (
    <>
      <AccountNavigation />
      <TermsHero title="Mijn datasets" />
      <TermsSearch searchCallback={handleSearch} />
      {searchData ? (
        <SearchResultsDataset
          resultsLoading={resultsLoading}
          results={searchData.datasets}
          onSelectTerm={handleSelectDataset}
        />
      ) : null}
      {selectedTerms.length > 0 && <FinishTermSelection />}
    </>
  );
}
