"use client";

import { mixinFlex } from "@/styles/mixins";
import { Question } from "@/types/Question";
import { breakByDot } from "@/utils/textFormat";
import { AccordionDetails, Accordion, styled, Typography, AccordionSummary, TextField } from "@mui/material";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { useEffect, useState } from "react";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";

const QuestionItem = ({ itemData }: { itemData: Question }) => {
  const { id, major, category, question, gpt_answer, tags, reference_links } = itemData;
  // 입력값 관련 상태
  const [inputText, setInputText] = useState("");

  // UI 열림/닫힘 관련 상태
  const [isAnswerOpen, setIsAnswerOpen] = useState(false);
  const [isGptAccordionOpen, setIsGptAccordionOpen] = useState(false);
  const [isAnotherAnswerAccordionOpen, setIsAnotherAnswerAccordionOpen] = useState(false);
  const [isReferenceAccordionOpen, setIsReferenceAccordionOpen] = useState(false);

  type OgDatasType = {
    link: string;
    title: string;
    description: string;
    image: string;
  };

  const [ogDatas, setOgDatas] = useState<OgDatasType[]>([]);

  useEffect(() => {
    const getOgData = async (url: string) => {
      const response = await fetch(`/api/og?url=${encodeURIComponent(url)}`);
      const data = await response.json();
      return data;
    };

    const referenceLinksOgDatas = reference_links.map(async (el) => {
      const ogData = await getOgData(el);

      return { link: el, ...ogData };
    });

    // 비동기 작업을 병렬적으로 실행(배열을 순회하며 비동기 작업을 실시하여 link 프로퍼티에 프로미스 객체가 담긴 배열이 생성된다. 이를 병렬적으로 처리하기 위해 promise.all()을 사용한다.)
    Promise.all(referenceLinksOgDatas)
      .then((results) => {
        setOgDatas(results); // 데이터를 상태로 저장
      })
      .catch((error) => {
        console.error("Open Graph 데이터 가져오기 실패:", error);
      });
  }, [reference_links]);

  return (
    <Container>
      {/* 헤더 */}
      <HeaderContainer>
        <HeaderWraper>
          <QuestionId>면접 질문 #{id}</QuestionId>
          <BookmarkIcon onClick={()=>alert("준비중인 기능입니다!")}/>
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
          <SubmitButton>등록</SubmitButton>
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
        <GptAnswerAccordion expanded={isGptAccordionOpen} onClick={() => setIsGptAccordionOpen((prev) => !prev)}>
          <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />} aria-controls="panel1-content" id="panel1-header">
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              GPT-4o
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {breakByDot(gpt_answer).map((el, idx) => {
              return <div key={idx}>{el}</div>;
            })}
          </AccordionDetails>
        </GptAnswerAccordion>

        {/* 다른 지원자 답변 아코디언 */}
        <AnotherAnswerAccordion
          expanded={isAnotherAnswerAccordionOpen}
          onClick={() => setIsAnotherAnswerAccordionOpen((prev) => !prev)}
        >
          <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />} aria-controls="panel1-content" id="panel1-header">
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              다른 지원자 답변
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {breakByDot(gpt_answer).map((el, idx) => {
              return <div key={idx}>{el}</div>;
            })}
          </AccordionDetails>
        </AnotherAnswerAccordion>

        {/* 참고자료 아코디언 */}
        <ReferenceAccordion
          expanded={isReferenceAccordionOpen}
          onClick={() => setIsReferenceAccordionOpen((prev) => !prev)}
        >
          <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />} aria-controls="panel1-content" id="panel1-header">
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              참고자료
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* 북마크 */}
            <ReferenceLinksContainer>
              {ogDatas.map((el, index) => (
                <ReferenceLinkContainer key={index} href={el.link} target="_blank">
                  <ReferenceImage
                    src={el.image ? el.image : "/img/reference-image.png"}
                    alt=""
                    width={100}
                    height={100}
                  />
                  <ReferenceLinkIconTextWrap>
                    <InsertLinkOutlinedIcon />
                    {el.title}
                    {el.description}
                  </ReferenceLinkIconTextWrap>
                </ReferenceLinkContainer>
              ))}
              <GptAnswerButton>참고자료 추가하기</GptAnswerButton>
            </ReferenceLinksContainer>
          </AccordionDetails>
        </ReferenceAccordion>
      </AccordionWrapper>
    </Container>
  );
};

export default QuestionItem;

const Container = styled("div")`
  ${mixinFlex("column")};
  align-items: start;
  padding: 24px;
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
  column-gap: 8px;
`;

const Tag = styled("a")`
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

const GptAnswerAccordion = styled(Accordion)`
  width: 100%;
  border-radius: 8px;
  box-shadow: none !important;
  background-color: ${({ theme }) => theme.palette.gray[25]};
  &::before {
    display: none;
  }
`;

const AnotherAnswerAccordion = styled(GptAnswerAccordion)``;

const ReferenceAccordion = styled(AnotherAnswerAccordion)``;

const ReferenceLinksContainer = styled("div")`
  ${mixinFlex("column")};
  flex-wrap: wrap;
  width: 100%;
  row-gap: 16px;
`;

const ReferenceLinkContainer = styled("a")`
  ${mixinFlex("row")};
  column-gap: 8px;
  flex: 1;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0px 2px 3px ${({ theme }) => theme.palette.gray[50]};
  font-size: 14px;
  color: black;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  line-height: 150%;
  background-color: ${({ theme }) => theme.palette.gray[0]};
`;

const ReferenceImage = styled("img")`
  width: 100px;
  height: 100px;
  border-radius: 8px;
`;

const ReferenceLinkIconTextWrap = styled("div")`
  ${mixinFlex("column")}
  align-items:start;
  row-gap: 4px;
  & svg {
    color: ${({ theme }) => theme.palette.primary.main};
    transform: rotateZ(-30deg);
  }
`;
