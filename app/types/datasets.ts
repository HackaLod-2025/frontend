export interface Dataset {
  title: string;
  description: string;
  publisher: string;
}

export interface DatasetResult {
  datasets: Dataset[];
}
