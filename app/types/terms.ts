export interface Term {
  uri: string;
  prefLabel: string;
  scopeNote: string;
  source: string;
}

export interface TermsResult {
  terms: Term[];
}
