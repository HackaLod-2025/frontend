"use client";

import { useEffect, useState } from "react";
import { getDefaultSession } from "@inrupt/solid-client-authn-browser";
import { completeLogin } from "../auth/authentication";
import { useRouter } from "next/navigation";

export default function Callback() {
  const [webId, setWebId] = useState<string | null>(null);
  const [loginComplete, setLoginComplete] = useState(false);
  const router = useRouter();

  useEffect(() => {
    completeLogin().then(() => {
      const session = getDefaultSession();
      if (session.info.isLoggedIn) {
        setWebId(session.info.webId ?? null);
        // Redirect to profile page after login
        router.replace("/account");
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
    content = <pre>Redirecting to profile...</pre>;
  }

  return (
    <div>
      <h1>Solid Identity</h1>
      {content}
    </div>
  );
}
