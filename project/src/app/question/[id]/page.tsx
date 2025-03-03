import QuestionItem from "@/components/QuestionItem";
import api from "@/lib/apiClient";

interface QuestionPageProps {
  params: {
    id: string;
  };
}

export default async function QuestionPage({ params }: QuestionPageProps) {
  const { id } = params;

  const response = await api.get(`questions?id=${id}`);
  const data = response.data;

  return (
    <>
      <QuestionItem question={data} />
    </>
  );
}
