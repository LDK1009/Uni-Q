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
  
  // 대량 데이터 예시
  const data = 
    [
      {
        college: "공과대학",
        major: "컴퓨터공학과",
        category: "전공기초지식",
        question: "객체 지향 프로그래밍의 기본 개념을 설명해주세요.",
        gpt_answer: "객체 지향 프로그래밍(OOP)은 데이터를 객체라는 단위로 묶어 처리하는 프로그래밍 패러다임입니다. 주요 개념으로는 추상화, 캡슐화, 상속, 다형성이 있으며, 이를 통해 코드의 재사용성과 유지보수성을 높일 수 있습니다.",
        tags: ["객체 지향", "프로그래밍", "OOP", "컴퓨터공학", "소프트웨어 개발"],
        reference_links: ["https://blog.naver.com/PostView.nhn?blogId=dev_tips&logNo=2345678901"]
      },
      {
        college: "공과대학",
        major: "컴퓨터공학과",
        category: "전공기초지식",
        question: "데이터베이스 정규화의 목적과 과정에 대해 설명해주세요.",
        gpt_answer: "데이터베이스 정규화는 데이터 중복을 최소화하고 무결성을 유지하기 위해 데이터베이스 구조를 체계적으로 조직하는 과정입니다. 주요 단계로 1NF, 2NF, 3NF 등이 있으며, 각 단계에서 특정 규칙을 만족하도록 테이블을 분해합니다.",
        tags: ["데이터베이스", "정규화", "1NF", "2NF", "3NF"],
        reference_links: ["https://blog.naver.com/PostView.nhn?blogId=database_master&logNo=3456789012"]
      },
      {
        college: "공과대학",
        major: "컴퓨터공학과",
        category: "전공기초지식",
        question: "스택과 큐의 차이점과 활용 사례를 설명해주세요.",
        gpt_answer: "스택은 후입선출(LIFO) 구조로, 마지막에 들어간 데이터가 먼저 나오는 구조입니다. 반면, 큐는 선입선출(FIFO) 구조로, 먼저 들어간 데이터가 먼저 나옵니다. 스택은 함수 호출 시의 스택 메모리 관리에, 큐는 프로세스 스케줄링 등에 활용됩니다.",
        tags: ["스택", "큐", "데이터 구조", "LIFO", "FIFO"],
        reference_links: ["https://blog.naver.com/PostView.nhn?blogId=algorithm_expert&logNo=4567890123"]
      },
      

    
]
  

  return (
    <div>
      <button onClick={() => postQuestions(data)}>데이터 삽입</button>
    </div>
  );
};

export default page;
