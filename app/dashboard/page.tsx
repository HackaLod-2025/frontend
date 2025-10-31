"use client";

import { useEffect, useState } from "react";
import { getDefaultSession, handleIncomingRedirect } from "@inrupt/solid-client-authn-browser";
import { getProfile, Profile } from "../auth/profile";

export default function DashboardPage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [sessionReady, setSessionReady] = useState(false);
  const session = getDefaultSession();

  // Restore session on mount
  useEffect(() => {
    async function restoreSession() {
      await handleIncomingRedirect({ restorePreviousSession: true });
      setSessionReady(true);
    }
    restoreSession();
  }, []);

  useEffect(() => {
    async function fetchProfile() {
      setLoading(true);
      if (!sessionReady) return;
      if (!session.info.isLoggedIn || !session.info.webId) {
        setError("Not logged in or WebID missing");
        setLoading(false);
        return;
      }
      try {
        const prof = await getProfile(session.info.webId, session.fetch);
        setProfile(prof);
        setError(null);
      } catch (e: any) {
        setError(e.message || "Failed to load profile");
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, [sessionReady, session.info.isLoggedIn, session.info.webId]);

  if (loading) {
    return <div>Loading profile...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!profile) {
    return <div>No profile found.</div>;
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <pre>WebID: {profile.webId}</pre>
      <pre>Given Name: {profile.givenName !== null ? profile.givenName : "(not set)"}</pre>
    </div>
  );
}
