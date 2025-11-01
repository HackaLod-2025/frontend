import {
  getDefaultSession,
  handleIncomingRedirect,
  login,
} from "@inrupt/solid-client-authn-browser";

async function startLogin() {
  if (!getDefaultSession().info.isLoggedIn) {
    await login({
      oidcIssuer: "https://solidcommunity.net",
      redirectUrl: new URL("/callback", window.location.href).toString(),
      clientName: "Erfgoed Paspoort",
      tokenType: 'DPoP',
    });
  }
}

async function completeLogin() {
  await handleIncomingRedirect({
    restorePreviousSession: true,
  });
}

export { startLogin, completeLogin };
