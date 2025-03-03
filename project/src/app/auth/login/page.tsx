"use client";

// import api from "@/lib/apiClient";
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceRoleKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

const page = () => {
  async function signIn() {
    // const response = await api.post(`auth/sign-in`, {
    //     email : "m3088787@gmail.com",
    //     password : "au95ju04!!",
    // });
    // console.log(response)
    // 반환 타입을 명시적으로 정의
    const { data, error } = await supabase.auth.signInWithPassword({
      email : "m3088787@gmail.com",
      password : "au95ju04!!",
    });


    console.log("==========================")

    console.log("data", data);
    console.log("error", error);

  }

  return (
    <div>
      <button onClick={()=>signIn()}>로그인</button>
    </div>
  );
};

export default page;
