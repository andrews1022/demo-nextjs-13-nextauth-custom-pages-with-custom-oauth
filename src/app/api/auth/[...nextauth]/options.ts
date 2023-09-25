import type { NextAuthOptions } from "next-auth";

export const options: NextAuthOptions = {
  pages: {
    signIn: "/sign-in",
    signOut: "/sign-out"
  },
  providers: [
    {
      id: "trackmania",
      name: "Trackmania",
      type: "oauth",
      wellKnown: "https://api.trackmania.com/.well-known/openid-configuration",
      authorization: {
        params: {
          response_type: "code",
          client_id: process.env.TM_OAUTH_CLIENT_ID,
          scope: "write_favorite",
          // scope: "clubs read_favorite write_favorite",
          // scope: "openid",
          redirect_uri: "http://localhost:3000/api/user/auth-return"
        },
        url: "https://api.trackmania.com/oauth/authorize"
      },
      // idToken: true,
      // checks: ["state"],
      profile(profile, tokens) {
        console.log("profile: ", profile);
        console.log("tokens: ", tokens);

        return {
          ...profile,
          ...tokens
        };
      },
      clientId: process.env.TM_OAUTH_CLIENT_ID,
      clientSecret: process.env.TM_OAUTH_SECRET_ID,
      issuer: "https://api.trackmania.com/",
      token: {
        url: "https://api.trackmania.com/api/access_token"
      },
      userinfo: {
        url: "https://api.trackmania.com/api/user"
      }
    }
  ],
  session: {
    strategy: "jwt"
  }
};
