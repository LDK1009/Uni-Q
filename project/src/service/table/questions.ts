import { supabase } from "@/lib/supabaseClient";
import { Question } from "@/types/Question";

////////// GET 질문 아이디에 해당하는 하나의 질문
export async function getQuestionById(id: number) {
  const response = await supabase.from("questions").select("*").eq("id", id).single();
  
  return response;
}

////////// GET 전공에 해당하는 모든 질문
export async function getQuestionByMajor(major: string) {
  console.log(major)
  const response = await supabase.from("questions").select("*").eq("major", major);

  if (!response.error) {
    console.log("성공", response.data);
  } else {
    console.log("실패");
  }

  return response;
}

////////// 질문 1개 삽입하기
export async function postQuestion(question: Question) {
  const response = await supabase.from("questions").insert([question]).select().single();

  return response;
}

////////// 질문 여러개 삽입하기
export async function postQuestions(questions: Question[]) {
  const response = await supabase.from("questions").insert(questions);
  if (!response.error) {
    alert("성공");
  } else {
    alert("실패");
  }
  return response;
}
