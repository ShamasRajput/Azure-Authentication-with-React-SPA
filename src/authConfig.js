// src/authConfig.js
export const msalConfig = {
  auth: {
    clientId: process.env.REACT_APP_MS_CLIENT_ID,
    authority: process.env.REACT_APP_MS_AUTHORITY,
    redirectUri: process.env.REACT_APP_MS_REDIRECT_URI,
  },
};

export const loginRequest = {
  scopes: ["User.Read"],
};
