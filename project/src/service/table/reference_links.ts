import { supabase } from "@/lib/supabaseClient";
import { ReferenceLinkType } from "@/types/ReferenceLink";

////////// GET 질문 아이디에 해당하는 하나의 질문
export async function getAllReferences(question_id: number) {
  const response = await supabase.from("reference_links").select("*").eq("question_id", question_id);

  return response;
}


////////// POST 참고자료 1개 삽입하기
export async function postReference(arg: ReferenceLinkType) {
  const response = await supabase.from("reference_links").insert(arg);

  return response;
}
