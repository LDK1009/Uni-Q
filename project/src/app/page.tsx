// import QuestionList from "@/components/QuestionList";
// import api from "@/lib/apiClient";
// import TestBox from "@/components/TestBox";
import TestBox from "@/components/TestBox";

export default async function Home() {
  // const response = await api.get("questions");
  // const questions = response.data;

  return (
    <div>
      <TestBox />
      {/* <QuestionList questions={questions} /> */}
    </div>
  );
}
