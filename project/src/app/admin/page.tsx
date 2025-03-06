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
      major: "건축공학과",
      category: "전공기초지식",
      question: "건축공학에서 '구조설계'의 주요 요소는 무엇인가요?",
      gpt_answer: "구조설계는 건축물의 안전성, 하중 분석, 재료의 선택과 효율적인 구조 배치 등을 고려하여 건축물의 내구성과 안정성을 확보하는 과정입니다.",
      tags: ["구조설계", "하중 분석", "재료 선택", "내구성", "안정성"],
      owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
    },
    {
      college: "공과대학",
      major: "건축공학과",
      category: "전공기초지식",
      question: "건축공학에서 '환경 친화적 건축'의 의미는 무엇인가요?",
      gpt_answer: "환경 친화적 건축은 에너지 효율, 자원 절약, 재활용 가능한 재료 사용 등을 통해 자연 환경에 미치는 영향을 최소화하는 건축 방식입니다.",
      tags: ["환경 친화적 건축", "에너지 효율", "자원 절약", "재활용", "건축"],
      owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
    },
    {
      college: "공과대학",
      major: "건축공학과",
      category: "전공기초지식",
      question: "건축공학에서 '기계설비'란 무엇인가요?",
      gpt_answer: "기계설비는 건축물 내에서 에너지 효율적인 난방, 냉방, 환기 및 전력 공급을 위한 시스템을 설계하고 설치하는 공학적 작업입니다.",
      tags: ["기계설비", "난방", "냉방", "환기", "전력 공급"],
      owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
    },
    {
      college: "공과대학",
      major: "건축공학과",
      category: "전공기초지식",
      question: "건축공학에서 '내화설계'의 중요성은 무엇인가요?",
      gpt_answer: "내화설계는 건축물의 화재에 대한 저항력을 강화하여 화재 발생 시 인명 및 재산 피해를 최소화하는 중요한 설계 요소입니다.",
      tags: ["내화설계", "화재", "저항력", "인명 피해", "재산 피해"],
      owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
    },
    {
      college: "공과대학",
      major: "건축공학과",
      category: "전공기초지식",
      question: "건축공학에서 '건축 재료'의 선택 기준은 무엇인가요?",
      gpt_answer: "건축 재료는 내구성, 환경 적합성, 비용, 기능성 등을 기준으로 선택되며, 건축물의 목적과 구조적 요구를 만족해야 합니다.",
      tags: ["건축 재료", "내구성", "환경 적합성", "비용", "기능성"],
      owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
    },
    {
      college: "공과대학",
      major: "건축공학과",
      category: "전공기초지식",
      question: "건축공학에서 '스마트 빌딩'이란 무엇인가요?",
      gpt_answer: "스마트 빌딩은 IoT 기술을 이용하여 에너지 효율, 안전성 및 거주자의 편의를 최적화하는 건축물을 의미합니다.",
      tags: ["스마트 빌딩", "IoT", "에너지 효율", "안전성", "편의성"],
      owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
    },
    {
      college: "공과대학",
      major: "건축공학과",
      category: "전공기초지식",
      question: "건축공학에서 '건축법규'의 역할은 무엇인가요?",
      gpt_answer: "건축법규는 건축물의 안전, 환경, 공공의 이익을 보호하기 위한 법적 기준을 제시하며, 건축물이 법적 요구 사항을 충족하도록 합니다.",
      tags: ["건축법규", "안전", "환경", "공공 이익", "법적 기준"],
      owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
    },
    {
      college: "공과대학",
      major: "건축공학과",
      category: "전공기초지식",
      question: "건축공학에서 '기후 변화 대응 건축'의 중요성은 무엇인가요?",
      gpt_answer: "기후 변화 대응 건축은 자연재해를 최소화하고 에너지 소비를 줄여 지속 가능한 환경을 만드는 데 중요한 역할을 합니다.",
      tags: ["기후 변화", "에너지 소비", "지속 가능한 환경", "자연재해", "대응 건축"],
      owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
    },
    {
      college: "공과대학",
      major: "건축공학과",
      category: "전공기초지식",
      question: "건축공학에서 '지속 가능한 건축'이란 무엇인가요?",
      gpt_answer: "지속 가능한 건축은 환경 영향을 최소화하며, 에너지 효율적인 설계와 자원 재활용을 통해 장기적인 사용 가능성을 고려한 건축 방식입니다.",
      tags: ["지속 가능한 건축", "환경 영향", "에너지 효율", "자원 재활용", "장기적인 사용 가능성"],
      owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
    },
    {
      college: "공과대학",
      major: "건축공학과",
      category: "전공기초지식",
      question: "건축공학에서 '건축 구조물의 진동 분석'은 왜 중요한가요?",
      gpt_answer: "건축 구조물의 진동 분석은 구조물의 내진 성능을 평가하고, 진동이 발생했을 때의 안전성을 확보하는 중요한 과정입니다.",
      tags: ["진동 분석", "내진 성능", "안전성", "구조물", "건축"],
      owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
    }
  ];

  
  return (
    <div>
      <button onClick={() => postQuestions(data)}>데이터 삽입</button>
    </div>
  );
};

export default page;
