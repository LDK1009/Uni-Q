import { supabase } from "@/lib/supabaseClient";

////////// 회원가입
type SignUpParamType = {
  email: string;
  password: string;
};

export async function signUp({ email, password }: SignUpParamType) {
  const response = await supabase.auth.signUp({
    email,
    password,
  });

  return response;
}

////////// 로그인
type SignInParamType = {
  email: string;
  password: string;
};

export async function signIn({ email, password }: SignInParamType) {
  const response = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return response;
}

////////// 현재 로그인한 유저 정보 가져오기
export async function getCurrentUserUID() {
  const { data, error } = await supabase.auth.getUser();

  const response = {
    data: data.user?.id,
    error,
  };

  return response;
}
