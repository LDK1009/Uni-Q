"use client";

import { useAuthStore } from "@/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const MyPageContainer = () => {
  const { user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!user.isSignIn) {
      router.push("/auth/sign-in");
    }
  }, [user.isSignIn, router]); // user 상태가 변경될 때만 실행됨

  if (!user.isSignIn) return null; // 리다이렉트 시 빈 화면 표시

  return <div>마이페이지임당</div>;
};

export default MyPageContainer;
