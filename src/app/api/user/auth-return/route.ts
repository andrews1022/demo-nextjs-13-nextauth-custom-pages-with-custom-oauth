import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  console.log("request headers: ", request.headers);

  const code = request.nextUrl.searchParams.get("code") || "";

  const url = "https://api.trackmania.com/api/access_token";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      grant_type: "authorization_code",
      client_id: process.env.TM_OAUTH_CLIENT_ID,
      client_secret: process.env.TM_OAUTH_SECRET_ID,
      code: code,
      redirect_uri: "http://localhost:3000/api/user/auth-return"
    })
  });

  if (!res.ok) {
    const text = await res.text(); // get the response body for more information

    throw new Error(`
      Failed to fetch data
      Status: ${res.status}
      Response: ${text}
    `);
  }

  const data = await res.json();
  console.log("data: ", data);
  // return NextResponse.json(data);

  return NextResponse.redirect(new URL("/profile", request.url));
};
