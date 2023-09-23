import type { AuthOptions } from "next-auth";

export const options: AuthOptions = {
  pages: {
    signIn: "/sign-out",
    signOut: "/sign-out"
  },
  providers: [
    {
      id: "trackmania",
      name: "Trackmania",
      type: "oauth",
      wellKnown: "https://api.trackmania.com/.well-known/openid-configuration",
      profile(profile) {
        return profile;
      }
    }
  ]
};
