import { supabase } from "@/lib/supabaseClient";
import { Question } from "@/types/Question";

////////// id를 통해 질문 1개 가져오기
export async function getQuestionById(id: number) {
  const response = await supabase.from("questions").select("*").eq("id", id).single();

  return response;
}

////////// 질문 1개 삽입하기
export async function postQuestion(question: Question) {
  const response = await supabase.from("questions").insert([question]).select().single();

  return response;
}

////////// 질문 여러개 삽입하기
export async function postQuestions(questions: Question[]) {
  const response = await supabase.from("questions").insert(questions).select();

  return response;
}
