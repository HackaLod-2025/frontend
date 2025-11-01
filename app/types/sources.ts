export interface RecommendedSource {
  source: string;
  description: string;
  url: string;
}

export interface RecommendedSourcesResult {
  sources: RecommendedSource[];
}
