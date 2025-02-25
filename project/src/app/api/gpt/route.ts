import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
  const { questionContent } = await request.json();

  const gptApi = axios.create({
    baseURL: "https://api.openai.com/v1",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    },
  });

  try {
    const response = await gptApi.post("/chat/completions", {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: questionContent }], // 올바른 형식
    });

    return NextResponse.json(response.data.choices[0].message.content, { status: 200 });
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    return NextResponse.json({ error: "Failed to fetch response from OpenAI" }, { status: 500 });
  }
}
