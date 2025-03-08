"use client";

import { getCurrentUserEmail, signIn } from "@/service/auth";

const page = () => {
  async function handleSignIn() {
    const { error } = await signIn();

    if (error) {
      alert("오류 발생");
    }
  }
  
  async function testFunc(){
    const {data} = await getCurrentUserEmail();
    console.log(data);
  }

  testFunc();
  return (
    <div>
      <button onClick={() => handleSignIn()}>카카오 로그인</button>
    </div>
  );
};

export default page;
