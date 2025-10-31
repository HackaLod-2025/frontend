import {
  getSolidDataset,
  getStringNoLocale,
  getThing,
  getThingAll,
  getUrlAll,
} from "@inrupt/solid-client";
import { FOAF } from "@inrupt/vocab-common-rdf";

export type Profile = {
  webId: string;
  givenName: string | null;
  storage: string[];
};

export async function getProfile(
  webId: string,
  fetch: typeof window.fetch,
): Promise<Profile> {
  const dataset = await getSolidDataset(webId, { fetch });
  const thing = getThing(dataset, webId);
  if (!thing) {
    throw new Error("Profile Thing not found");
  }
  // Get all storage URLs from the profile Thing
  const storage = getUrlAll(thing, "http://www.w3.org/ns/pim/space#storage");
  const profileStorage = storage.length > 0 ? storage[0] : undefined;

  if (!profileStorage) {
    return {
      webId,
      givenName: null,
      storage: [],
    };
  }

  const profileDataset = await getSolidDataset(`${profileStorage}/profile`, {
    fetch,
  });
  const profileThings = getThingAll(profileDataset);
  let givenName: string | null = null;
  profileThings.forEach((thing) => {
    const name = getStringNoLocale(thing, FOAF.givenname);
    if (name && !givenName) {
      givenName = name;
    }
  });

  return {
    webId,
    givenName,
    storage,
  };
}
