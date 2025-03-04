import QuestionItem from "@/components/question/QuestionItem";
import { getQuestionByMajor } from "@/service/table/questions";
import { Divider } from "@mui/material";

interface PagePropsType {
  params: {
    major: string;
  };
}

const page = async ({ params }: PagePropsType) => {
  const parameters = await params;
  const major = decodeURIComponent(parameters.major);
  const { data } = await getQuestionByMajor(major);

  return (
    <div>
      {data?.map((el, idx) => (
        <div key={idx}>
          <QuestionItem itemData={el} />
          <Divider />
        </div>
      ))}
    </div>
  );
};

export default page;
