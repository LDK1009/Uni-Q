import QuestionItem from "@/components/question/QuestionItem";
import { getQuestionById } from "@/service/table/questions";
import { Metadata } from "next";

interface QuestionPageProps {
  params: {
    id: number;
  };
}

// 동적 메타데이터 설정
export async function generateMetadata({ params }: QuestionPageProps): Promise<Metadata> {
  const { id } = params;
  const { data } = await getQuestionById(Number(id));

  return {
    title: data?.question ? `면접 질문: ${data.question} | 올인` : "ALLIN | 대학교 학과별 면접 질문 플랫폼",
    description: data?.gpt_answer || "수시 & 편입 & 전과 학과별 면접을 위한 맞춤형 질문 카드 제공! AI 기반 모범 답변과 카카오톡 알림으로 효과적인 면접 준비를 시작하세요.",
    openGraph: {
      title: data?.question || "ALLIN | 대학교 학과별 면접 질문 플랫폼",
      description: data?.gpt_answer || "수시 & 편입 & 전과 학과별 면접을 위한 맞춤형 질문 카드 제공! AI 기반 모범 답변과 카카오톡 알림으로 효과적인 면접 준비를 시작하세요.",
      url: `/question/${id}`,
      images: data?.reference_links?.[0] ? [{ url: data.reference_links[0], width: 1200, height: 630 }] : [],
    },
  };
}

export default async function QuestionPage({ params }: QuestionPageProps) {
  const { id } = params;

  const { data } = await getQuestionById(Number(id));

  return (
    <>
      <QuestionItem itemData={data} />
    </>
  );
}
