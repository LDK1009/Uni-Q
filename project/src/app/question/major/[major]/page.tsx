import QuestionList from "@/components/question/QuestionList";
import { getQuestionByMajor } from "@/service/table/questions";
import { Metadata } from "next";


export async function generateMetadata({ params }: { params: PropsType }): Promise<Metadata> {
  const parameters = await params;
  const major = decodeURIComponent(parameters.major);
  const { data } = await getQuestionByMajor(major);

  return {
    title: data?.[0]
      ? `Uni-Q | ${data?.[0].major} > ${data?.[0].category} | 대학교 학과별 면접 질문 플랫폼`
      : "Uni-Q | 대학교 학과별 면접 질문 플랫폼",
    description: data?.[0]
      ? `Uni-Q | ${data?.[0].major} > ${data?.[0].category} | 수시 & 편입 & 전과 학과별 면접을 위한 맞춤형 질문 카드 제공! AI 기반 모범 답변과 카카오톡 알림으로 효과적인 면접 준비를 시작하세요.`
      : "",
    openGraph: {
      title: data?.[0]
        ? `Uni-Q | ${data?.[0].major} > ${data?.[0].category} | 대학교 학과별 면접 질문 플랫폼`
        : "Uni-Q | 대학교 학과별 면접 질문 플랫폼",
      description: data?.[0]
        ? `Uni-Q | ${data?.[0].major} > ${data?.[0].category} | 수시 & 편입 & 전과 학과별 면접을 위한 맞춤형 질문 카드 제공! AI 기반 모범 답변과 카카오톡 알림으로 효과적인 면접 준비를 시작하세요.`
        : "",
      url: `https://uni-q.site/question/major/${major}`,
      images: [{ url: "https://uni-q.site/img/logo-512.png", width: 1200, height: 630 }],
    },
  };
}

type PropsType = Promise<{ major: string }>;

const page = async ({ params }: { params: PropsType }) => {
  const parameters = await params;
  const major = decodeURIComponent(parameters.major);
  const { data } = await getQuestionByMajor(major);
  console.log(data);
  return (
    <div>
      <QuestionList data={data as []} />
    </div>
  );
};

export default page;
