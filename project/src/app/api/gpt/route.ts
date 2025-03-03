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
      messages: [
        { role: "user", content: questionContent },
        { role: "system", content: "답변형식: { 'answer': string, 'links': string[], 'keywords': string[] }. Provide each item in the given object format. + Example response: { \"answer\": \"System messages are an important tool for guiding the model's responses. They define rules on how the model should respond.\", \"links\": [\"https://platform.openai.com/docs/guides/chat\", \"https://platform.openai.com/docs/guides/chat/completions\", \"https://platform.openai.com/docs/api-reference/chat/completions\"], \"keywords\": [\"system message\", \"API\", \"response format\"] }" }
      ], // 시스템 메시지 추가
    });

    return NextResponse.json(response.data.choices[0].message.content, { status: 200 });
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    return NextResponse.json({ error: "Failed to fetch response from OpenAI" }, { status: 500 });
  }
}
