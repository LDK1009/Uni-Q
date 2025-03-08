"use client";

import { Accordion, AccordionDetails, AccordionSummary, styled, Typography } from "@mui/material";
import React from "react";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { mixinFlex } from "@/styles/mixins";
import Link from "next/link";

type AccordionByCollegeType = {
  title: string;
  majors: string[];
  Icon: React.ReactElement;
};

const AccordionByCollege = ({ title, majors, Icon }: AccordionByCollegeType) => {
  return (
    <Container>
      <CollegeAccordion>
        <Summary expandIcon={<ExpandMoreOutlinedIcon />} aria-controls="panel1-content" id="panel1-header">
          <SummaryIconTextWrapper>
            {Icon}
            <Typography variant="body2">{title}</Typography>
          </SummaryIconTextWrapper>
        </Summary>
        <Detail>
          {majors.map((el, idx) => (
            <DetailBox key={idx} href={`/question/major/${el}`}>
              {Icon}
              {el}
            </DetailBox>
          ))}
        </Detail>
      </CollegeAccordion>
    </Container>
  );
};

export default AccordionByCollege;

const Container = styled("div")`
  ${mixinFlex("column")};
  flex: 1;
  flex-basis: 150px;
  height: auto;
`;
const CollegeAccordion = styled(Accordion)`
  width: 100%;
  border-radius: 8px;
  box-shadow: none !important;
  &::before {
    display: none;
  }
  & svg {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

const Summary = styled(AccordionSummary)``;

const SummaryIconTextWrapper = styled("div")`
  ${mixinFlex("row")}
  column-gap:8px;
`;

const Detail = styled(AccordionDetails)`
  ${mixinFlex("column")};
  align-items: start;
  justify-content: start;
  row-gap: 8px;
  margin-left: 16px;
`;

const DetailBox = styled(Link)`
  ${mixinFlex("row")}
  width:100%;
  justify-content: start;
  column-gap: 8px;
  font-size: 14px;
  text-decoration: none;
  color: black;
  & svg {
    width: 16px;
    height: 16px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.gray[0]};
    & svg {
      color: ${({ theme }) => theme.palette.gray[0]};
    }
  }
`;
