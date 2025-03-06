import { supabase } from "@/lib/supabaseClient";
import { AnswerType } from "@/types/Answer";

////////// GET 질문 아이디에 해당하는 모든 답변 가져오기
export async function getAnswers(question_id: number) {
  const response = await supabase.from("answers").select("*").eq("question_id", question_id);

  return response;
}

////////// POST 질문 아이디에 해당하는 답변 추가하기
export async function postAnswer(answer: AnswerType) {
  const response = await supabase.from("answers").insert([answer]).select();

  return response;
}