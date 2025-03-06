"use client";

import { getCurrentUserUID } from "@/service/auth";
import { postQuestions } from "@/service/table/questions";

const page = () => {
  async function printUid() {
    const { data: uid, error } = await getCurrentUserUID();
    if (error) {
      console.log("오류");
    } else {
      console.log(uid);
    }
  }

  printUid();

  const data = [
    {
      college: "공과대학",
      major: "컴퓨터공학과",
      category: "전공기초지식",
      question: "가비지 컬렉션의 개념과 그 작동 방식에 대해 설명해주세요.",
      gpt_answer:
        "가비지 컬렉션은 프로그래밍 언어에서 더 이상 사용되지 않는 메모리를 자동으로 회수하는 기능입니다. 이를 통해 메모리 누수를 방지하고, 개발자가 메모리 관리를 직접 하지 않아도 되도록 합니다.",
      tags: ["가비지 컬렉션", "메모리 관리", "컴퓨터공학"],
      owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
    },
    {
      college: "공과대학",
      major: "컴퓨터공학과",
      category: "전공기초지식",
      question: "동기식 및 비동기식 통신의 차이점에 대해 설명해주세요.",
      gpt_answer:
        "동기식 통신은 송수신 장치의 클럭 신호를 동기화하여 데이터를 전송하는 방식이며, 비동기식 통신은 각 데이터 비트에 시작 및 종료 비트를 추가하여 독립적으로 전송하는 방식입니다.",
      tags: ["동기식 통신", "비동기식 통신", "컴퓨터공학"],
      owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
    },
    {
      college: "공과대학",
      major: "컴퓨터공학과",
      category: "전공기초지식",
      question: "소켓 프로그래밍이란 무엇이며, 어떻게 동작하나요?",
      gpt_answer:
        "소켓 프로그래밍은 네트워크 상에서 데이터 통신을 위해 소켓을 사용하여 프로세스 간의 통신을 구현하는 방법입니다. 클라이언트와 서버가 각각 소켓을 통해 데이터를 송수신합니다.",
      tags: ["소켓 프로그래밍", "네트워크", "컴퓨터공학"],
      owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
    },
  ];

  return (
    <div>
      <button onClick={() => postQuestions(data)}>데이터 삽입</button>
    </div>
  );
};

export default page;
