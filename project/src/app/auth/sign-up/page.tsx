"use client";

import { signUp } from "@/service/auth";

const page = () => {
  const email = "m3088787@naver.com";
  const password = "au95ju04!!";

  return (
    <div>
      <button onClick={() => signUp({ email, password })}>회원가입</button>
    </div>
  );
};

export default page;
