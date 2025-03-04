"use client";

import { styled, Typography } from "@mui/material";
import AccordionByCollege from "./AccordionByCollege";
import {
  ComputerOutlined,
  MonitorHeartOutlined,
  AccountBalanceOutlined,
  SettingsOutlined,
  TimelineOutlined,
  PsychologyOutlined,
  ScienceOutlined,
  SchoolOutlined,
  GrassOutlined,
  WavesOutlined,
} from "@mui/icons-material";
import { mixinFlex } from "@/styles/mixins";

const MainContainer = () => {
  const colleges = [
    { college: "인문대학", majors: ["철학과", "역사학과", "문학과", "언어학과", "사회학과", "심리학과", "문예창작학과"], Icon: <AccountBalanceOutlined /> },
    { college: "사회과학대학", majors: ["정치학과", "외교학과",  "사회과학과", "행정학과", "국제학과", "심리학과","법학과", "경찰행정학과", "사회복지학과",], Icon: <PsychologyOutlined /> },
    { college: "경상대학", majors: ["경영학과", "경제학과", "회계학과", "금융공학과", "부동산학과", "무역학과"], Icon: <TimelineOutlined /> },
    { college: "교육대학", majors: ["교육학과", "국어교육과","영어교육과","수학교육과","물리교육과","화학교육과", "생물교육과", "지구과학교육과","체육교육과", "사회교육과","특수교육과", ], Icon: <SchoolOutlined /> },
    { college: "의과대학", majors: ["의학과", "간호학과", "수의학과", "약학과", "치의학과"], Icon: <MonitorHeartOutlined /> },
    { college: "자연과학과대학", majors: ["물리학과", "화학과", "생물학과", "수학과", "지구과학과", "천문학과"], Icon: <ScienceOutlined /> },
    { college: "공과대학", majors: ["기계공학과", "전기공학과", "전자공학과", "컴퓨터공학과", "화학공학과", "토목공학과", "항공우주공학과", "산업공학과", "자동차공학과"], Icon: <SettingsOutlined />,},
    { college: "정보통신대학", majors: ["정보통신공학과", "소프트웨어공학과", "정보보호학과", "빅데이터학과", "인공지능학과"], Icon: <ComputerOutlined /> },
    { college: "농업대학", majors: ["식물학과", "축산학과", "원예학과", "산림학과", "농업경제학과", "농업생명과학과", "식품공학과"], Icon: <GrassOutlined /> },
    { college: "해양과학과대학", majors: ["항해학과", "해양학과", "해양공학과", "해양경찰학과", "해양환경학과"], Icon: <WavesOutlined /> },
  ];
  

  return (
    <div>
      <Typography variant="h3" color="primary" align="center" sx={{ fontWeight: "bold" }}>
        ALLIN
      </Typography>
      <AccordionByCollegeContainer>
        {colleges.map((el, idx) => (
          <AccordionByCollege key={idx} title={el.college} majors={el.majors} Icon={el.Icon} />
        ))}
      </AccordionByCollegeContainer>
    </div>
  );
};

export default MainContainer;

const AccordionByCollegeContainer = styled("div")`
  ${mixinFlex("row")};
  align-items: start;
  width: 100%;
  flex-wrap: wrap;
`;
