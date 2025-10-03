import { config } from "./config.js";

const generateLoginURL = () => {
  const baseURL = new URL("https://accounts.google.com/o/oauth2/v2/auth");

  baseURL.searchParams.append("client_id", config.CLIENT_ID);
  baseURL.searchParams.append("scope", config.SCOPE);
  baseURL.searchParams.append("redirect_uri", config.REDIRECT_URL);
  baseURL.searchParams.append("response_type", "token");

  return baseURL.href;
};

export default generateLoginURL;
