import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
  const { major, college } = await request.json();

  const gptApi = axios.create({
    baseURL: "https://api.openai.com/v1",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
  });

  try {
    const response = await gptApi.post("/chat/completions", {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `답변형식: {id?: number; college: string; major: string; category: string; question: string; gpt_answer: string; tags: string[]; created_at?: string; owner_id?: string;}`,
        },
        {
          role: "system",
          content: `답변 예시: [{ "college": ${college}, "major": ${major}, "category": "전공기초지식", "question": "수학에서 '지수'의 개념을 설명해 주세요.", "gpt_answer": "지수는 동일한 수를 반복적으로 곱한 횟수를 나타내는 수학적 기호입니다. 예를 들어, 2^3은 2를 세 번 곱한 값을 의미하며, 그 값은 8입니다.", "tags": ["지수", "수학", "기호", "곱셈", "개념"], "owner_id": "a4632837-1a0d-4cb1-835f-dd3a1f78740b" }, { college: "자연과학대학", major: "수학과", category: "전공기초지식", question: "수학에서 '지수'의 개념을 설명해 주세요.", gpt_answer: "지수는 동일한 수를 반복적으로 곱한 횟수를 나타내는 수학적 기호입니다. 예를 들어, 2^3은 2를 세 번 곱한 값을 의미하며, 그 값은 8입니다.", tags: ["지수", "수학", "기호", "곱셈", "개념"], owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b" }, { college: "자연과학대학", major: "수학과", category: "전공기초지식", question: "수학에서 '지수'의 개념을 설명해 주세요.", gpt_answer: "지수는 동일한 수를 반복적으로 곱한 횟수를 나타내는 수학적 기호입니다. 예를 들어, 2^3은 2를 세 번 곱한 값을 의미하며, 그 값은 8입니다.", tags: ["지수", "수학", "기호", "곱셈", "개념"], owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b" }, ...]`,
        },
        {
          role: "system",
          content: ` 주의사항: 1. 답변 데이터 JSON에서 category, owner_id는 각각 "전공기초지식", "a4632837-1a0d-4cb1-835f-dd3a1f78740b"로 항시 고정한다. 2. 제공된 답변 예시 양식을 지켜야한다(JSON 형식) 3. 이전 질문과 절대 중복되지 않아야한다. 4. 배열 내 답변 개수는 항상 10개 이상을 유지해야한다. 5. 질문은 ${major} 전공기초지식과 관련이 있어야한다.`,
        },
        { role: "user", content: `시스템 프롬프트를 확인하고 답변 예시처럼 ${major} 질문 10개 생성해줘` },
      ], // 올바른 형식
    });

    return NextResponse.json(response.data.choices[0].message.content, { status: 200 });
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    return NextResponse.json({ error: "Failed to fetch response from OpenAI" }, { status: 500 });
  }
}
