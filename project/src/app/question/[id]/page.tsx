import QuestionItem from "@/components/QuestionItem";
import { getQuestionById } from "@/service/table/questions";

interface QuestionPageProps {
  params: {
    id: string;
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
