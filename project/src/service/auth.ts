import { supabase } from "@/lib/supabaseClient";

////////// 로그인
export async function signIn() {
  const response = await supabase.auth.signInWithOAuth({
    provider: "kakao",
    options: {
      redirectTo: "http://localhost:3000/auth/sign-in/success",
    },
  });

  console.log(response);
  debugger;

  return response;
}

////////// 유저 로그인 여부 확인하기
export async function getCurrentUserIsSignIn() {
  const { error } = await supabase.auth.getUser();

  if (!error) {
    return true;
  } else {
    return false;
  }
}

////////// 현재 로그인한 유저정보 가져오기
export async function getCurrentUser() {
  const { data: userData, error } = await supabase.auth.getUser();

  const response = {
    data: {
      email: userData.user?.email as string,
      uid: userData.user?.id as string,
    },
    error,
  };

  return response;
}

////////// 현재 로그인한 유저 uid 가져오기
export async function getCurrentUserUID() {
  const { data, error } = await supabase.auth.getUser();

  const response = {
    data: data.user?.id,
    error,
  };

  return response;
}

////////// 현재 로그인한 유저 이메일 가져오기
export async function getCurrentUserEmail() {
  const { data, error } = await supabase.auth.getUser();

  const response = {
    data: data.user?.email,
    error,
  };

  return response;
}
