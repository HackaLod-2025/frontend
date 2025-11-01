import { FOAF } from "@inrupt/vocab-common-rdf";
import {
  buildThing,
  createSolidDataset,
  setThing,
  saveSolidDatasetAt,
} from "@inrupt/solid-client";

export async function saveTermsToPod(terms: { prefLabel: string; source: string }[], podUrl: string, fetch: typeof window.fetch) {
  let dataset = createSolidDataset();
  terms.forEach((term, idx) => {
    const thing = buildThing({ name: `term-${idx}` })
      .addStringNoLocale(FOAF.name, term.prefLabel)
      .addUrl(FOAF.isPrimaryTopicOf, term.source)
      .build();
    dataset = setThing(dataset, thing);
  });
  return await saveSolidDatasetAt(podUrl, dataset, { fetch });
}

