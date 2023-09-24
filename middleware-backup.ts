// import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// export { default } from "next-auth/middleware";

export { default } from "next-auth/middleware";

// export const config = { matcher: ["/profile"] };

export const middleware = async (request: NextRequest) => {
  console.log("middleware ran!");

  //   // console.log("code: ", request.nextUrl.searchParams.get("code"));
  //   // console.log("state: ", request.nextUrl.searchParams.get("state"));

  //   const code = request.nextUrl.searchParams.get("code");

  //   if (code) {
  //     const url = "https://api.trackmania.com/api/access_token";
  //     const res = await fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({
  //         grant_type: "authorization_code",
  //         client_id: process.env.TM_OAUTH_CLIENT_ID,
  //         client_secret: process.env.TM_OAUTH_SECRET_ID,
  //         code: code,
  //         redirect_uri: "http://localhost:3000/profile"
  //       })
  //     });

  //     if (!res.ok) {
  //       const text = await res.text(); // get the response body for more information

  //       throw new Error(`
  //         Failed to fetch data
  //         Status: ${res.status}
  //         Response: ${text}
  //       `);
  //     }

  //     // console.log("data: ", data);

  //     // return res.json();

  //     // const data = await res.json();
  //     // return NextResponse.json(data);

  //     return NextResponse.redirect(new URL("/", request.url));
  //   }
};
