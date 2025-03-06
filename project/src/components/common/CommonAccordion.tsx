"use client";
import { Accordion, AccordionDetails, AccordionSummary, styled, Typography } from "@mui/material";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { Dispatch, SetStateAction } from "react";

interface PropsType {
  isOpen?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  title?: string;
  children: React.ReactNode;
}

const CommonAccordion = ({ isOpen, setIsOpen, title, children }: PropsType) => {
  return (
    <>
      {/* 다른 컴포넌트의 상태를 상속받아 사용하는가? */}
      {isOpen !== undefined && setIsOpen !== undefined ? (
        <Container expanded={isOpen} onClick={() => setIsOpen((prev) => !prev)}>
          <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />} aria-controls="panel1-content" id="panel1-header">
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              {title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>{children}</AccordionDetails>
        </Container>
      ) : (
        <Container>
          <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />} aria-controls="panel1-content" id="panel1-header">
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              {title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>{children}</AccordionDetails>
        </Container>
      )}
    </>
  );
};

export default CommonAccordion;

const Container = styled(Accordion)`
  width: 100%;
  border-radius: 8px;
  box-shadow: none !important;
  background-color: ${({ theme }) => theme.palette.gray[25]};
  &::before {
    display: none;
  }
`;
