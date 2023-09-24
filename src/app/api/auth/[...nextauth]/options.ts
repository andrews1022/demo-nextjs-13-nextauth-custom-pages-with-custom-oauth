import type { AuthOptions } from "next-auth";

export const options: AuthOptions = {
  // callbacks: {
  //   async jwt({ account, token, user }) {
  //     // Persist the OAuth access_token and or the user id to the token right after signin
  //     console.log("jwt account: ", account);
  //     console.log("jwt token: ", token);
  //     console.log("jwt user: ", user);

  //     return {
  //       ...token,
  //       ...user
  //     };
  //   },
  //   async session({ newSession, session, token, trigger, user }) {
  //     console.log("session newSession: ", newSession);
  //     console.log("session session: ", session);
  //     console.log("session token: ", token);
  //     console.log("session trigger: ", trigger);
  //     console.log("session user: ", user);

  //     return {
  //       ...session
  //     };
  //   }
  // },
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
          // response_type: "code",
          // client_id: process.env.TM_OAUTH_CLIENT_ID,
          scope: "clubs read_favorite write_favorite",
          redirect_uri: "http://localhost:3000/api/user/auth-return"
        },
        url: "https://api.trackmania.com/oauth/authorize"
      },
      // idToken: true,
      // checks: ["state"],
      profile(profile) {
        console.log("profile: ", profile);

        return {
          ...profile
        };
      },
      clientId: process.env.TM_OAUTH_CLIENT_ID
      // clientSecret: process.env.TM_OAUTH_SECRET_ID,
      // profile(profile) {
      //   return {
      //     ...profile
      //   };
      // },
      // token: {
      // url: "https://api.trackmania.com/api/access_token"
      // async request(context) {
      //   console.log("token context: ", context);

      //   const code = context.params.code;

      //   const url = "https://api.trackmania.com/api/access_token";
      //   const resp = await fetch(url, {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json"
      //     },
      //     body: JSON.stringify({
      //       grant_type: "authorization_code",
      //       client_id: process.env.TM_OAUTH_CLIENT_ID,
      //       client_secret: process.env.TM_OAUTH_SECRET_ID,
      //       code: code,
      //       redirect_uri: "http://localhost:3000/api/user/auth-return"
      //     })
      //   });

      //   const data = await resp.json();

      //   return {
      //     tokens: data
      //   };
      // }
      // }
      // client: {
      //   client_id: process.env.TM_OAUTH_CLIENT_ID,
      //   client_secret: process.env.TM_OAUTH_SECRET_ID,
      //   grant_types: ["authorization_code"],
      //   id_token_signed_response_alg: "RS256",
      //   redirect_uris: ["http://localhost:3000/api/user/auth-return"],
      //   response_types: ["code"],
      //   token_endpoint_auth_method: "client_secret_basic"
      // },
      // userinfo: {
      // url: "https://api.trackmania.com/api/user"
      // async request(context) {
      //   console.log("userinfo context: ", context);

      //   const resp = await fetch("https://api.trackmania.com/api/user", {
      //     method: "GET",
      //     headers: {
      //       Authorization: `Bearer ${context.tokens.access_token}`
      //     }
      //   });
      //   const data = await resp.json();

      //   // return await makeUserinfoRequest(context)
      //   // const resp = await axios({
      //   //     method: 'GET',
      //   //     url: 'https://fcp.integ01.dev-franceconnect.fr/api/v1/userinfo?schema=openid',
      //   //     headers: {
      //   //         Authorization: `Bearer ${context.tokens.access_token}`,
      //   //     },
      //   // })
      //   // return resp.data
      //   return {
      //     tokens: data
      //   };
      // }
      // }
      // issuer: "https://api.trackmania.com/"
    }
  ],
  // secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt"
  }
};
