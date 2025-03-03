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
  const data = [
    {
      major: "컴퓨터공학과",
      category: "학과 관심도",
      question: "컴퓨터 공학에 대해 아는 대로 말씀해주세요.",
      gpt_answer:
        "컴퓨터 공학은 컴퓨터 시스템과 소프트웨어의 설계 및 개발을 다루는 학문입니다. 하드웨어와 소프트웨어의 상호작용을 이해하고, 다양한 기술을 이용하여 효율적인 문제 해결 방법을 제시하는 것이 핵심입니다.",
      tags: ["컴퓨터", "IT", "소프트웨어", "기술", "하드웨어"],
      reference_links: ["https://en.wikipedia.org/wiki/Computer_science"],
      owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
    },
    {
      major: "컴퓨터공학과",
      category: "전공 기초 지식",
      question: "버블 정렬의 과정을 설명해주세요.",
      gpt_answer:
        "버블 정렬은 인접한 두 값을 비교하여 큰 값을 뒤로 보내는 정렬 알고리즘입니다. 리스트를 처음부터 끝까지 반복하며, 각 인접한 요소를 비교하고 교환하여 가장 큰 값이 뒤로 이동하는 과정을 반복합니다.",
      tags: ["알고리즘", "정렬", "버블정렬", "컴퓨터공학"],
      reference_links: ["https://en.wikipedia.org/wiki/Bubble_sort"],
      owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
    },
    {
      major: "컴퓨터공학과",
      category: "자기주장",
      question: "21세기 컴퓨터의 미래에 대한 자신의 생각을 말씀해주세요.",
      gpt_answer:
        "21세기에는 컴퓨터가 더욱 지능화되고, 인간의 삶을 보다 효율적이고 편리하게 만드는 다양한 기술들이 발전할 것입니다. 특히 인공지능, 머신러닝, 자율주행차 등은 사회적 변화에 큰 영향을 미칠 것입니다.",
      tags: ["미래", "컴퓨터", "기술", "AI", "자동화"],
      reference_links: [
        "https://www.forbes.com/sites/forbestechcouncil/2020/02/14/the-future-of-computers-in-the-21st-century/",
      ],
      owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
    },
    {
      major: "컴퓨터공학과",
      category: "대학 생활",
      question: "입학 후 앞으로 학업계획을 말씀해주세요.",
      gpt_answer:
        "입학 후에는 기본적인 전공 과목을 충실히 이수하고, 알고리즘과 데이터 구조 등의 기초를 다진 후, 인공지능과 빅데이터 관련 심화 과목을 수강할 계획입니다. 또한, 실습 위주의 학습을 통해 실제 문제 해결 능력을 키우겠습니다.",
      tags: ["학업계획", "컴퓨터공학", "전공", "기초과목"],
      reference_links: ["https://www.coursera.org/courses?query=computer%20science"],
      owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
    },
    {
      major: "컴퓨터공학과",
      category: "미래 진로",
      question: "대학 졸업 후 자신의 모습에 대해 말씀해주세요.",
      gpt_answer:
        "대학 졸업 후에는 소프트웨어 개발 분야에서 일하면서 실력을 쌓고, 인공지능 및 머신러닝 분야에서 전문가가 되고 싶습니다. 이를 통해 기술 혁신을 이끌 수 있는 리더로 성장하고 싶습니다.",
      tags: ["미래진로", "소프트웨어", "개발자", "AI", "기술리더"],
      reference_links: [
        "https://www.careerbuilder.com/advice/5-steps-to-take-after-graduation-to-prepare-for-your-career",
      ],
      owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
    },
    {
      major: "컴퓨터공학과",
      category: "학과 관심도",
      question: "컴퓨터 공학에서 가장 중요한 기술은 무엇인가요?",
      gpt_answer:
        "컴퓨터 공학에서 중요한 기술은 알고리즘, 데이터베이스 관리, 네트워크, 그리고 소프트웨어 개발 기술입니다. 이 기술들은 다양한 산업에서 필수적인 요소로, 문제 해결 능력과 효율적인 시스템 구축에 필수적입니다.",
      tags: ["기술", "컴퓨터공학", "알고리즘", "소프트웨어", "데이터베이스"],
      reference_links: ["https://www.geeksforgeeks.org/fundamentals-of-computer-science/"],
      owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
    },
    {
      major: "컴퓨터공학과",
      category: "전공 기초 지식",
      question: "컴퓨터 네트워크의 기본적인 개념을 설명해주세요.",
      gpt_answer:
        "컴퓨터 네트워크는 여러 대의 컴퓨터가 서로 연결되어 데이터를 주고받을 수 있도록 하는 시스템입니다. 이를 통해 컴퓨터들은 인터넷과 같은 대규모 네트워크 상에서 정보를 공유하고 협력할 수 있습니다.",
      tags: ["네트워크", "컴퓨터", "인터넷", "기술"],
      reference_links: ["https://en.wikipedia.org/wiki/Computer_network"],
      owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
    },
    {
      major: "컴퓨터공학과",
      category: "자기주장",
      question: "기술 발전에 따라 인간의 일자리가 줄어든다는 주장에 대해 어떻게 생각하나요?",
      gpt_answer:
        "기술 발전이 일자리를 대체할 수 있지만, 새로운 기술과 산업 분야의 창출을 통해 다른 종류의 일자리가 생겨날 것입니다. 인간은 더 창의적이고 복잡한 문제를 해결하는 역할을 맡게 될 것입니다.",
      tags: ["기술", "일자리", "자동화", "인간"],
      reference_links: ["https://www.weforum.org/agenda/2018/05/robots-are-coming-and-they-are-taking-our-jobs/"],
      owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
    },
    {
      major: "컴퓨터공학과",
      category: "대학 생활",
      question: "대학 생활 중 가장 중요하게 생각하는 가치관은 무엇인가요?",
      gpt_answer:
        "대학 생활에서는 자기 주도적인 학습과 팀워크를 중요하게 생각합니다. 자율적으로 학습하고, 다양한 사람들과 협업을 통해 문제를 해결하는 경험이 가장 중요한 가치를 이룬다고 믿습니다.",
      tags: ["가치관", "대학생활", "자기주도", "협업"],
      reference_links: ["https://www.success.com/the-power-of-self-leadership/"],
      owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
    },
    {
      major: "컴퓨터공학과",
      category: "미래 진로",
      question: "컴퓨터공학 분야에서 가장 흥미롭고 발전 가능성이 큰 기술은 무엇인가요?",
      gpt_answer:
        "인공지능, 특히 딥러닝과 강화학습 기술이 가장 흥미롭고 발전 가능성이 큽니다. 이 기술들은 의료, 자율주행차, 로봇 공학 등 다양한 분야에 혁신적인 변화를 가져올 것입니다.",
      tags: ["인공지능", "딥러닝", "기술", "미래진로"],
      reference_links: ["https://www.sas.com/en_us/insights/analytics/deep-learning.html"],
      owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
    },
    {
      major: "컴퓨터공학과",
      category: "학과 관심도",
      question: "자신이 가장 관심 있는 컴퓨터공학의 세부 분야는 무엇인가요?",
      gpt_answer:
        "저는 인공지능과 빅데이터 분석에 가장 관심이 많습니다. 이러한 기술들이 사회와 산업에 미치는 영향이 매우 크다고 생각하고, 이 분야에서 많은 발전이 이루어질 것으로 기대됩니다.",
      tags: ["인공지능", "빅데이터", "컴퓨터공학", "기술"],
      reference_links: ["https://www.cio.com/article/329412/how-big-data-and-ai-are-driving-the-future-of-business"],
      owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
    },
    {
      major: "컴퓨터공학과",
      category: "전공 기초 지식",
      question: "클라우드 컴퓨팅이란 무엇인가요?",
      gpt_answer:
        "클라우드 컴퓨팅은 인터넷을 통해 서버, 스토리지, 데이터베이스, 네트워크 등 다양한 컴퓨팅 리소스를 제공하는 기술입니다. 이를 통해 사용자는 자신의 데이터를 원격 서버에 저장하고, 필요한 만큼의 컴퓨팅 자원을 쉽게 이용할 수 있습니다.",
      tags: ["클라우드", "컴퓨팅", "기술", "IT"],
      reference_links: ["https://en.wikipedia.org/wiki/Cloud_computing"],
      owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
    },
    {
      major: "컴퓨터공학과",
      category: "자기주장",
      question: "기술 발전에 따라 사회에서의 인간의 역할은 어떻게 변화할까요?",
      gpt_answer:
        "기술 발전은 인간의 역할을 변화시킬 것입니다. 단순 반복적인 작업은 자동화될 수 있지만, 인간은 더 창의적이고 전략적인 문제 해결을 맡게 될 것입니다. 기술과 협업하여 더 복잡한 문제를 해결하는 능력이 중요해질 것입니다.",
      tags: ["기술", "미래", "인간", "역할"],
      reference_links: [
        "https://www.forbes.com/sites/forbestechcouncil/2020/01/28/the-future-of-work-and-how-technology-will-change-human-roles/",
      ],
      owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
    },
    {
      major: "컴퓨터공학과",
      category: "대학 생활",
      question: "컴퓨터공학과 관련된 동아리 활동을 해본 적이 있나요?",
      gpt_answer:
        "저는 대학 동아리에서 소프트웨어 개발 동아리 활동을 하며 다양한 팀 프로젝트를 진행했습니다. 이를 통해 협업 능력을 키우고, 실질적인 개발 경험을 얻을 수 있었습니다.",
      tags: ["동아리", "협업", "대학생활", "소프트웨어"],
      reference_links: ["https://www.hackerearth.com/challenges/"],
      owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
    },
    {
      major: "컴퓨터공학과",
      category: "미래 진로",
      question: "자신의 미래 진로에 대해 어떻게 계획하고 있나요?",
      gpt_answer:
        "저는 소프트웨어 개발자로 시작하여, 점차 인공지능 분야로 나아갈 계획입니다. 이후에는 기술 리더로 성장하여 혁신적인 기술을 개발하고, 사회적 가치를 창출하는 일을 하고 싶습니다.",
      tags: ["미래진로", "소프트웨어", "AI", "기술리더"],
      reference_links: ["https://www.careerbuilder.com/advice/how-to-plan-your-career-for-success"],
      owner_id: "a4632837-1a0d-4cb1-835f-dd3a1f78740b",
    },
    {
      major: "컴퓨터공학과",
      category: "학과 관심도",
      question: "컴퓨터 공학을 선택한 이유가 무엇인가요?",
      gpt_answer:
        "어릴 때부터 기술과 컴퓨터에 대한 관심이 많았고, 컴퓨터 공학이 다양한 산업에서 활용되는 기술을 배우고 적용할 수 있어 매력적이라고 생각했습니다.",
      tags: ["컴퓨터공학", "기술", "소프트웨어", "IT"],
      reference_links: ["https://www.geeksforgeeks.org/why-choose-computer-science-engineering/"],
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
