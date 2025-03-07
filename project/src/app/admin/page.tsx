"use client";

import { postQuestions } from "@/service/table/questions";
import axios from "axios";

const page = () => {
  // const data = [
  //   {
  //     college: "자연과학대학",
  //     major: "수학과",
  //     category: "전공기초지식",
  //     question: "수학에서 함수의 정의와 예시를 설명해 주세요.",
  //     gpt_answer:
  //       "함수는 한 집합의 원소를 다른 집합의 원소에 대응시키는 규칙입니다. 예를 들어, f(x) = x^2는 입력값 x에 대해 그 제곱값을 출력하는 함수입니다.",
  //     tags: ["함수", "수학", "정의", "예시", "입력값"],
  //     owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
  //   },
  //   {
  //     college: "자연과학대학",
  //     major: "수학과",
  //     category: "전공기초지식",
  //     question: "미분과 적분의 차이점에 대해 설명해 주세요.",
  //     gpt_answer:
  //       "미분은 함수의 변화율을 구하는 것이고, 적분은 함수의 면적을 구하는 것입니다. 미분은 함수의 기울기를 나타내고, 적분은 함수 아래의 영역을 나타냅니다.",
  //     tags: ["미분", "적분", "차이점", "수학", "기울기"],
  //     owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
  //   },
  //   {
  //     college: "자연과학대학",
  //     major: "수학과",
  //     category: "전공기초지식",
  //     question: "행렬의 정의와 예시를 들어 설명해 주세요.",
  //     gpt_answer:
  //       "행렬은 수나 기호를 직사각형 배열로 배열한 것으로, 주로 선형 방정식을 풀거나, 선형 변환을 나타내는 데 사용됩니다. 예를 들어, 2x2 행렬 A = [[1, 2], [3, 4]]가 있습니다.",
  //     tags: ["행렬", "수학", "정의", "예시", "선형 방정식"],
  //     owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
  //   },
  //   {
  //     college: "자연과학대학",
  //     major: "수학과",
  //     category: "전공기초지식",
  //     question: "복소수의 정의와 예시를 들어 설명해 주세요.",
  //     gpt_answer:
  //       "복소수는 실수부와 허수부로 구성된 수로, 일반적으로 a + bi로 표현됩니다. 여기서 a는 실수부, b는 허수부이며, i는 허수 단위입니다. 예를 들어, 3 + 4i는 복소수입니다.",
  //     tags: ["복소수", "실수", "허수", "수학", "정의"],
  //     owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
  //   },
  //   {
  //     college: "자연과학대학",
  //     major: "수학과",
  //     category: "전공기초지식",
  //     question: "확률 이론에서 확률의 정의를 설명해 주세요.",
  //     gpt_answer:
  //       "확률은 특정 사건이 발생할 가능성을 수치로 나타내는 것으로, 0과 1 사이의 값을 가집니다. 확률은 사건의 수를 가능한 전체 사건의 수로 나눈 값으로 계산됩니다.",
  //     tags: ["확률", "수학", "이론", "사건", "가능성"],
  //     owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
  //   },
  //   {
  //     college: "자연과학대학",
  //     major: "수학과",
  //     category: "전공기초지식",
  //     question: "통계학에서 표본과 모집단의 차이를 설명해 주세요.",
  //     gpt_answer:
  //       "모집단은 연구에서 다루는 전체 집단을 의미하며, 표본은 그 모집단에서 일부를 뽑은 것을 의미합니다. 표본을 통해 모집단에 대한 추론을 할 수 있습니다.",
  //     tags: ["통계학", "표본", "모집단", "차이", "연구"],
  //     owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
  //   },
  //   {
  //     college: "자연과학대학",
  //     major: "수학과",
  //     category: "전공기초지식",
  //     question: "수학에서 '극한'의 개념을 설명해 주세요.",
  //     gpt_answer:
  //       "극한은 함수나 수열이 특정 값에 가까워지는 과정을 의미합니다. 예를 들어, x가 무한대로 갈 때, f(x)가 특정 값에 가까워지면, 그 값을 극한이라고 합니다.",
  //     tags: ["극한", "수학", "수열", "함수", "개념"],
  //     owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
  //   },
  //   {
  //     college: "자연과학대학",
  //     major: "수학과",
  //     category: "전공기초지식",
  //     question: "수학에서 '미분 방정식'이란 무엇인가요?",
  //     gpt_answer:
  //       "미분 방정식은 함수와 그 함수의 도함수(미분 값) 사이의 관계를 나타내는 방정식입니다. 물리학, 생명과학 등 다양한 분야에서 현상을 모델링하는 데 사용됩니다.",
  //     tags: ["미분 방정식", "수학", "함수", "도함수", "모델링"],
  //     owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
  //   },
  //   {
  //     college: "자연과학대학",
  //     major: "수학과",
  //     category: "전공기초지식",
  //     question: "수학에서 '부분 집합'의 개념을 설명해 주세요.",
  //     gpt_answer:
  //       "부분 집합은 집합 A의 모든 원소가 집합 B에도 포함되어 있을 때, A를 B의 부분 집합이라고 합니다. 예를 들어, {1, 2}는 {1, 2, 3}의 부분 집합입니다.",
  //     tags: ["부분 집합", "수학", "집합", "원소", "개념"],
  //     owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
  //   },
  //   {
  //     college: "자연과학대학",
  //     major: "수학과",
  //     category: "전공기초지식",
  //     question: "수학에서 '군'의 정의를 설명해 주세요.",
  //     gpt_answer:
  //       "군은 집합과 이 집합에서 정의된 연산이 특정 성질을 만족할 때, 이 집합을 군이라고 합니다. 군의 기본 성질은 항등원, 역원, 결합법칙, 연산의 닫힘입니다.",
  //     tags: ["군", "수학", "정의", "연산", "성질"],
  //     owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
  //   },
  // ];

  const handleGptResponse = async () => {
    for (let index = 0; index < 10; index++) {
      console.log(`${index}번째 작업 시작`);

      const response = await axios.post("http://localhost:3000/api/gpt", { major: "역사학과", college : "인문대학" });
      const postData = JSON.parse(response.data); // GPT API 호출
      const { error } = await postQuestions(postData);

      if (!error) {
        console.log(`${index}번째 작업 결과 : 성공`);
      } else {
        console.error(`${index}번째 작업 결과 : 실패 > ${error}`);
      }
    }

    alert("작업 끝");

    // try
    // const response = await axios.post("http://localhost:3000/api/gpt", { major: "수학과" });
    // const postData = JSON.parse(response.data); // GPT API 호출
    // await postQuestions(postData);

    // const result = confirm("데이터를 추가하시겠습니까? Y/N");
    //   if (result) {
    //     console.log("확인 누름")
    //     await postQuestions(postData);
    //   } else {
    //     console.log("취소 누름")
    //     return;
    //   }
    //  catch (error) {
    //   console.error("Error fetching GPT response:", error);
    // }
  };

  return (
    <div>
      {/* <button onClick={() => postQuestions(data)}>데이터 삽입</button> */}
      <button onClick={() => handleGptResponse()}>자동 데이터 삽입</button>
    </div>
  );
};

export default page;
