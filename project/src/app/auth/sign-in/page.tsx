"use client";

import { signIn } from "@/service/auth";

const page = () => {
  const email = "m3088787@gmail.com";
  const password = "au95ju04!!";

  return (
    <div>
      <button onClick={() => signIn({ email, password })}>로그인</button>
    </div>
  );
};

export default page;
