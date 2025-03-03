import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) return NextResponse.json({ error: "URL is required" }, { status: 400 });

  try {
    const response = await fetch(url);
    const html = await response.text();

    // OG 데이터를 정규 표현식으로 추출
    const ogTitle = html.match(/<meta property="og:title" content="(.*?)"/)?.[1] || "";
    const ogImage = html.match(/<meta property="og:image" content="(.*?)"/)?.[1] || "";
    const ogDescription = html.match(/<meta property="og:description" content="(.*?)"/)?.[1] || "";

    return NextResponse.json({ title: ogTitle, image: ogImage, description: ogDescription });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch OG data" }, { status: 500 });
  }
}
