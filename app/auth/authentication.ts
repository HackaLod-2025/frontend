import {
  getDefaultSession,
  handleIncomingRedirect,
  login,
} from "@inrupt/solid-client-authn-browser";

async function startLogin() {
  if (!getDefaultSession().info.isLoggedIn) {
    await login({
      oidcIssuer: "https://login.inrupt.com",
      redirectUrl: new URL("/callback", window.location.href).toString(),
      clientName: "My Private Life",
    });
  }
}

async function completeLogin() {
  await handleIncomingRedirect({
    restorePreviousSession: true,
  });
}

export { startLogin, completeLogin };
