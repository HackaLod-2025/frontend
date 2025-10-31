"use client";

import { useEffect, useState } from "react";
import { getDefaultSession } from "@inrupt/solid-client-authn-browser";
import { completeLogin } from "../auth/authentication";
import {
  addInteger,
  addStringNoLocale,
  createSolidDataset,
  createThing,
  getSolidDataset,
  getStringNoLocale,
  getThing,
  getThingAll,
  getUrlAll,
  saveSolidDatasetAt,
  setThing,
  SolidDataset,
} from "@inrupt/solid-client";
import { FOAF } from "@inrupt/vocab-common-rdf";

export default function Callback() {
  const [webId, setWebId] = useState<string | null>(null);
  const [loginComplete, setLoginComplete] = useState(false);
  const session = getDefaultSession();

  const saveHackalod2025Data = async () => {
    const storageId = await getPodStorageId();

    if (!storageId) {
      console.error("Could not retrieve Pod storage ID");
      return;
    }

    let dummyDataset: SolidDataset = createSolidDataset();
    let teamThing = createThing({ name: "team" });
    teamThing = addStringNoLocale(
      teamThing,
      "http://schema.org/name",
      "MeKluppie",
    );
    teamThing = addInteger(teamThing, "http://schema.org/numberOfMembers", 6);
    dummyDataset = setThing(dummyDataset, teamThing);

    await saveSolidDatasetAt(`${storageId[0]}/dummydataset`, dummyDataset, {
      fetch: session.fetch,
    });
  };

  const getProfileData = async () => {
    const storageId = await getPodStorageId();

    if (!storageId) {
      console.error("Could not retrieve Pod storage ID");
      return;
    }

    const profile = await getSolidDataset(`${storageId[0]}/profile`, {
      fetch: session.fetch,
    });
    const profileThings = getThingAll(profile);
    profileThings.forEach((thing) => {
      const name = getStringNoLocale(thing, FOAF.givenname);
      console.log("Given Name:", name);
    });
  };

  const getPodStorageId = async () => {
    if (!webId) {
      console.error("WebID is not set");
      return;
    }
    // Fetch the profile document
    const profileDataset = await getSolidDataset(webId, {
      fetch: session.fetch,
    });
    // Get the profile Thing
    const profileThing = getThing(profileDataset, webId);
    if (!profileThing) {
      console.error("Profile Thing not found");
      return;
    }
    // Get all storage URLs
    const storageUrls = getUrlAll(
      profileThing,
      "http://www.w3.org/ns/pim/space#storage",
    );
    console.log("Pod storage URLs:", storageUrls);
    return storageUrls;
  };

  useEffect(() => {
    completeLogin().then(() => {
      const session = getDefaultSession();
      if (session.info.isLoggedIn) {
        setWebId(session.info.webId ?? null);
      }
      setLoginComplete(true);
    });
  }, []);

  let content;
  if (!loginComplete) {
    content = <pre>Logging in...</pre>;
  } else if (!webId) {
    content = <pre>Login failed or cancelled.</pre>;
  } else {
    content = (
      <>
        <pre>WebID: {webId}</pre>

        <button
          className="block mt-6 rounded-full bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors"
          onClick={saveHackalod2025Data}
        >
          Initialise Dummy Dataset
        </button>
        <button
          className="block mt-6 rounded-full bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors"
          onClick={getProfileData}
        >
          Get Profile Data
        </button>
        <button
          className="block mt-6 rounded-full bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors"
          onClick={getPodStorageId}
        >
          Get Pod Storage ID
        </button>
      </>
    );
  }

  return (
    <div>
      <h1>Solid Identity</h1>
      {content}
    </div>
  );
}
