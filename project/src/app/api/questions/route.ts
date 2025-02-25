import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";
import { Question } from "../../../types/Question";

export async function GET() {
  const { data, error } = await supabase.from("questions").select("*");
  
  if (error) {
    const response = NextResponse.json(null, { status: 500 });
    response.headers.set("X-Error-Message", error.message);
    return response;
  }

  return NextResponse.json(data, { status: 200 });
}

export async function POST(request: Request) {
  const newQuestion: Question = await request.json();
  const { error } = await supabase.from("questions").insert([newQuestion]);

  if (error) {
    const response = NextResponse.json(null, { status: 500 });
    response.headers.set("X-Error-Message", error.message);
    return response;
  }

  return NextResponse.json(null, { status: 201 });
}

export async function PUT(request: Request) {
  const updatedQuestion: Question = await request.json();
  const { data, error } = await supabase.from("questions").update(updatedQuestion).eq("id", updatedQuestion.id);

  if (error) {
    const response = NextResponse.json(null, { status: 500 });
    response.headers.set("X-Error-Message", error.message);
    return response;
  }

  return NextResponse.json(data || null, { status: 200 });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  const { error } = await supabase.from("questions").delete().eq("id", id);

  if (error) {
    const response = NextResponse.json(null, { status: 500 });
    response.headers.set("X-Error-Message", error.message);
    return response;
  }

  return NextResponse.json(null, { status: 200 });
}
