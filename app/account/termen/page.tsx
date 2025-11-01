"use client";

import { AccountNavigation } from "@/components/account-navigation";
import { TermsHero } from "@/components/terms-hero";
import { TermsSearch } from "@/components/term-search";
import { useEffect, useState } from "react";
import { SearchResults } from "@/components/search-results";
import { TermsResult } from "@/app/types/terms";
import { getDefaultSession } from "@inrupt/solid-client-authn-browser";
import { RecommendedSourcesResult } from "@/app/types/sources";
import { saveTermsToPod } from "../termen/solid-schema";
import { FinishTermSelection } from "@/components/finish-term-selection";

export default function TermenPage() {
  const [sourcesData, setSourcesData] =
    useState<RecommendedSourcesResult | null>(null);
  const [searchData, setSearchData] = useState<TermsResult | null>(null);
  const [sessionReady, setSessionReady] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedTerms, setSelectedTerms] = useState<
    { prefLabel: string; source: string }[]
  >([]);
  const session = getDefaultSession(); // Uncomment and adjust if you have a session context

  useEffect(() => {
    async function restoreSession() {
      await import("@inrupt/solid-client-authn-browser").then(
        ({ handleIncomingRedirect }) =>
          handleIncomingRedirect({ restorePreviousSession: true }),
      );
      setSessionReady(true);
      setLoading(false);
    }
    restoreSession();
  }, []);

  const handleSearch = async (value: string) => {
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
      const sourcesResponse = await session.fetch(
        "http://localhost:8080/api/sources/recommend",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userQuery: value }),
        },
      );
      const sourcesData = await sourcesResponse.json();
      setSourcesData(sourcesData);

      const sourcesArray: string[] = Array.isArray(sourcesData.sources)
        ? sourcesData.sources.map((source: any) => String(source.url))
        : [];

      const response = await session.fetch(
        "http://localhost:8080/api/terms/recommend",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sources: sourcesArray,
            query: value,
            languages: ["en"],
          }),
        },
      );
      const data = await response.json();
      setSearchData(data);
    } catch (error) {
      alert("Er is een fout opgetreden bij het zoeken.");
      setSearchData(null);
    }
  };

  const handleSelectTerm = (prefLabel: string, source: string) => {
    setSelectedTerms((prev) => {
      // Prevent duplicates
      if (prev.some((t) => t.prefLabel === prefLabel && t.source === source))
        return prev;
      return [...prev, { prefLabel, source }];
    });
  };

  const saveSelectedTerms = async () => {
    try {
      if (!session.info.webId) {
        alert("Geen WebID gevonden in sessie.");
        return;
      }
      // Example: save to a 'terms' folder in the user's pod
      const podBase = session.info.webId.replace(/\/profile.*$/, "");
      const podUrl = `${podBase}public/terms-${Date.now()}.ttl`;
      await saveTermsToPod(selectedTerms, podUrl, session.fetch);
      alert("Termen succesvol opgeslagen in Solid Pod!");
    } catch (e) {
      alert("Fout bij opslaan naar Solid Pod");
    }
  };

  if (loading) {
    return <div>Sessie wordt hersteld...</div>;
  }

  return (
    <>
      <AccountNavigation />
      <TermsHero title="Mijn termen" />
      <TermsSearch searchCallback={handleSearch} />
      {searchData ? (
        <SearchResults
          results={searchData.terms}
          onSelectTerm={handleSelectTerm}
        />
      ) : null}
      {selectedTerms.length > 0 && (
        <FinishTermSelection />
      )}
    </>
  );
}
