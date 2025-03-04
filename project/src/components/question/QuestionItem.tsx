"use client";

import { mixinFlex } from "@/styles/mixins";
import { Question } from "@/types/Question";
import { breakByDot } from "@/utils/textFormat";
import { AccordionDetails, Accordion, styled, Typography, AccordionSummary } from "@mui/material";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { useEffect, useState } from "react";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";

const QuestionItem = ({ itemData }: { itemData: Question }) => {
  const { id, major, category, question, gpt_answer, tags, reference_links } = itemData;
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);

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
          <BookmarkIcon />
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
          <Tag key={index}>#{el}</Tag>
        ))}
      </TagWrap>

      {/* 버튼 */}
      <ButtonWraper>
        <AnswerButton>답변하기 (60초)</AnswerButton>
        <GptAnswerButton onClick={() => setIsAccordionOpen((prev) => !prev)}>
          {isAccordionOpen ? "GPT 모범답안 닫기" : "GPT 모범답안 보기"}
        </GptAnswerButton>
      </ButtonWraper>

      {/* 아코디언 */}
      <GptAnswerAccordion expanded={isAccordionOpen} onClick={() => setIsAccordionOpen((prev) => !prev)}>
        <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />} aria-controls="panel1-content" id="panel1-header">
          <Typography component="span" sx={{ fontWeight: "bold" }}>
            GPT 모범답안
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {breakByDot(gpt_answer).map((el, idx) => {
            return <div key={idx}>{el}</div>;
          })}
        </AccordionDetails>
      </GptAnswerAccordion>

      {/* 레퍼런스 링크 */}
      <ReferenceLinksContainer>
        {ogDatas.map((el, index) => (
          <ReferenceLinkContainer key={index} href={el.link} target="_blank">
            <ReferenceImage src={el.image} alt="" width={100} height={100} />
            <ReferenceLinkIconTextWrap>
              <InsertLinkOutlinedIcon />
              {el.title}
              {el.description}
            </ReferenceLinkIconTextWrap>
          </ReferenceLinkContainer>
        ))}
      </ReferenceLinksContainer>
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

const Tag = styled("div")`
  background-color: #dbeafe;
  color: ${({ theme }) => theme.palette.primary.main};
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  line-height: 120%;
`;

const ButtonWraper = styled("div")`
  ${mixinFlex("column")};
  width: 100%;
  row-gap: 8px;
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

const GptAnswerButton = styled(AnswerButton)`
  background-color: white;
  color: ${({ theme }) => theme.palette.primary.main};
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
`;

const GptAnswerAccordion = styled(Accordion)`
  width: 100%;
  border-radius: 8px;
  box-shadow: none !important;
  &::before {
    display: none;
  }
`;

const ReferenceLinksContainer = styled("div")`
  ${mixinFlex("row")};
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
  box-shadow: 0px 2px 3px rgba(33, 150, 243, 0.3);
  font-size: 14px;
  color: black;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  line-height: 150%;
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
