import QuestionList from "@/components/question/QuestionList";
import { getQuestionByMajor } from "@/service/table/questions";

type PropsType = Promise<{ major : string; }>


const page = async ({ params }:  { params: PropsType }) => {
  const parameters = await params;
  const major = decodeURIComponent(parameters.major);
  const { data } = await getQuestionByMajor(major);

  return (
    <div>
      <QuestionList data={data as []}/>
      {/* {data?.map((el, idx) => (
        <div key={idx}>
          <QuestionItem itemData={el} />
          <Divider />
        </div>
      ))} */}
    </div>
  );
};

export default page;
