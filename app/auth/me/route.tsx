import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const backendRes = await fetch(`${process.env.REDIRECT_URL}/auth/me`, {
    method: "GET",
    headers: {
      cookie: req.headers.get("cookie") || "",
    },
    credentials: "include",
  });

  const data = await backendRes.json();
  console.log("data fetched from backend", JSON.stringify(data));
  if (!backendRes.ok) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  return NextResponse.json({ user: data });
}
