"use client";

import { mixinFlex } from "@/styles/mixins";
import { Question } from "@/types/Question";
import { breakByDot } from "@/utils/textFormat";
import { Link, styled, TextField } from "@mui/material";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { useEffect, useState } from "react";
import { getCurrentUserUID } from "@/service/auth";
import { getAnswers, postAnswer } from "@/service/table/answers";
import { AnswerType } from "@/types/Answer";
import CommonAccordion from "../common/CommonAccordion";
import BookmarkList from "./BookmarkList";
import AnotherAnswer from "./AnotherAnswer";
import { postReference } from "@/service/table/reference_links";

const QuestionItem = ({ itemData }: { itemData: Question }) => {
  const { id, major, category, question, gpt_answer, tags } = itemData;
  // 입력값 관련 상태
  const [inputText, setInputText] = useState("");
  const [referenceInputText, setReferenceInputText] = useState("");

  // UI 열림/닫힘 관련 상태
  const [isAnswerOpen, setIsAnswerOpen] = useState(false);
  const [isGptAccordionOpen, setIsGptAccordionOpen] = useState(false);
  const [isReferenceInputOpen, setIsReferenceInputOpen] = useState(false);

  // 데이터 관련 상태
  const [anoterAnswers, setAnoterAnswers] = useState<AnswerType[]>();

  async function handleSubmit() {
    const question_id = id;
    const { data: user_id } = await getCurrentUserUID();

    if (question_id && user_id && inputText) {
      const submitData = {
        question_id,
        user_id,
        answer: inputText,
      };

      const { error } = await postAnswer(submitData);

      if (!error) {
        alert("성공");
        setInputText("");
      } else {
        alert("실패");
      }
    }
  }

  async function handleSubmitBookmark(link: string) {
    const question_id = id;
    const { data: user_id } = await getCurrentUserUID();

    if (question_id && user_id && link) {
      const postData = {
        question_id,
        user_id,
        link,
      };

      const { error } = await postReference(postData);

      if (!error) {
        alert("성공");
        setReferenceInputText("");
        setIsReferenceInputOpen((prev)=>!prev);
      } else {
        alert("실패");
      }
    }
  }

  useEffect(() => {
    async function fetchAnotherAnswers() {
      const question_id = id;
      if (question_id) {
        const { data, error } = await getAnswers(question_id);
        if (data && !error) {
          setAnoterAnswers(data);
        } else {
          alert("실패");
        }
      }
    }
    fetchAnotherAnswers();
  }, [id]);

  return (
    <Container>
      {/* 헤더 */}
      <HeaderContainer>
        <HeaderWraper>
          <QuestionId>면접 질문 #{id}</QuestionId>
          <BookmarkIcon onClick={() => alert("준비중인 기능입니다!")} />
        </HeaderWraper>
        <Broadcast>
          {major} | {category}
        </Broadcast>
      </HeaderContainer>

      {/* 질문 */}
      <QuestionText>Q. {question}</QuestionText>

      {/* 태그 */}
      <TagWrap>
        {tags.map((el, index) => (
          <Tag key={index} href={`https://www.google.com/search?q=${el}`} target="_blank">
            #{el}
          </Tag>
        ))}
      </TagWrap>

      {/* 답변 입력 */}
      {isAnswerOpen && (
        <AnswerInpurtWrap>
          <AnswerInput
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            label="답변"
            variant="outlined"
            multiline
            minRows={3}
            maxRows={10}
          />
          <SubmitButton onClick={handleSubmit}>등록</SubmitButton>
        </AnswerInpurtWrap>
      )}
      {/* 버튼 그룹 */}
      <ButtonWraper>
        {/* 답변하기 버튼 */}
        <AnswerButton onClick={() => setIsAnswerOpen((prev) => !prev)}>
          {isAnswerOpen ? "답변 취소" : "답변하기"}
        </AnswerButton>
        {/* 모범 답변 버튼 */}

        <GptAnswerButton onClick={() => setIsGptAccordionOpen((prev) => !prev)}>
          {isGptAccordionOpen ? "모범답안 닫기" : "모범답안 보기"}
        </GptAnswerButton>
      </ButtonWraper>

      {/* 아코디언 그룹 */}
      <AccordionWrapper>
        {/* GPT 아코디언 */}
        <CommonAccordion title="GPT-4o" isOpen={isGptAccordionOpen} setIsOpen={setIsGptAccordionOpen}>
          {breakByDot(gpt_answer).map((el, idx) => {
            return <div key={idx}>{el}</div>;
          })}
        </CommonAccordion>

        {/* 다른 지원자 답변 아코디언 */}
        <CommonAccordion title="다른 지원자 답변">
          <AnotherAnswersContainer>
            {anoterAnswers?.map((el, idx) => (
              <AnotherAnswer key={idx} user_id={el.user_id} answer={el.answer} />
            ))}
          </AnotherAnswersContainer>
        </CommonAccordion>

        {/* 참고자료 아코디언 */}
        <CommonAccordion title="참고자료">
          {/* 북마크 */}
          {id && <BookmarkList question_id={id} />}
          {/* 참고자료 추가 */}
          <AddBookmarkWrap>
            {isReferenceInputOpen && (
              <AddBookmarkInputWrap>
                <ReferenceInput
                  value={referenceInputText}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => setReferenceInputText(e.target.value)}
                  label="참고자료 링크"
                  placeholder="https://example.com/"
                  variant="outlined"
                />
                <SubmitButton onClick={() => handleSubmitBookmark(referenceInputText)}>등록</SubmitButton>
              </AddBookmarkInputWrap>
            )}
            <AddBookmarkButton
              onClick={(e) => {
                e.stopPropagation();
                setIsReferenceInputOpen((prev) => !prev);
              }}
            >
              {isReferenceInputOpen ? "취소" : "참고자료 추가하기"}
            </AddBookmarkButton>
          </AddBookmarkWrap>
        </CommonAccordion>
      </AccordionWrapper>
    </Container>
  );
};

export default QuestionItem;

const Container = styled("div")`
  ${mixinFlex("column")};
  align-items: start;
  padding: 24px;
  box-sizing:border-box;
  border-radius: 8px;
  row-gap: 24px;
`;

const HeaderContainer = styled("div")`
  ${mixinFlex("column")};
  width: 100%;
  align-items: start;
  row-gap: 4px;
`;

const HeaderWraper = styled("div")`
  ${mixinFlex("row")};
  width: 100%;
  justify-content: space-between;
`;
const QuestionId = styled("div")`
  font-size: 14px;
  line-height: 150%;
  color: gray;
`;

const BookmarkIcon = styled(BookmarkBorderOutlinedIcon)`
  color: gray;
`;
const QuestionText = styled("div")`
  font-size: 18px;
  line-height: 150%;
  font-weight: bold;
`;

const Broadcast = styled("div")`
  font-size: 12px;
  line-height: 150%;
  color: gray;
`;

const TagWrap = styled("div")`
  ${mixinFlex("row")};
  justify-content:start;
  column-gap: 8px;
  row-gap:4px;
  flex-wrap:wrap;
`;

const Tag = styled(Link)`
  background-color: #dbeafe;
  color: ${({ theme }) => theme.palette.primary.main};
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  line-height: 120%;
  color: ${({ theme }) => theme.palette.primary.main};
  text-decoration: none;
`;

const ButtonWraper = styled("div")`
  ${mixinFlex("column")};
  width: 100%;
  row-gap: 8px;
`;

const AnswerInpurtWrap = styled("div")`
  ${mixinFlex("row")};
  align-items: end;
  width: 100%;
  column-gap: 8px;
`;

const AnswerInput = styled(TextField)`
  flex: 4;
`;

const AnswerButton = styled("button")`
  width: 100%;
  height: auto;
  font-size: 14px;
  line-height: 150%;
  border: 1px solid white;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: white;
  border-radius: 8px;
  padding: 12px 0px;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

const SubmitButton = styled(AnswerButton)`
  width: auto;
  flex: 1;
  background-color: ${({ theme }) => theme.palette.primary.dark};
`;

const GptAnswerButton = styled(AnswerButton)`
  background-color: white;
  color: ${({ theme }) => theme.palette.primary.main};
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
`;

const AccordionWrapper = styled("div")`
  ${mixinFlex("column")}
  width:100%;
  row-gap: 8px;
`;

const ReferenceInput = styled(TextField)`
  flex: 4;
`;

const AnotherAnswersContainer = styled("div")`
  ${mixinFlex("column")}
  align-items:start;
  justify-content: start;
  row-gap: 24px;
`;

const AddBookmarkWrap = styled("div")`
  ${mixinFlex("column")};
  margin-top:32px;
  width: 100%;
  row-gap: 8px;
`;

const AddBookmarkInputWrap = styled("div")`
  ${mixinFlex("row")};
  width: 100%;
  column-gap: 8px;
`;
const AddBookmarkButton = styled(GptAnswerButton)``;
