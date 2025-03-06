"use client";
import { mixinFlex } from "@/styles/mixins";
import { styled, Typography } from "@mui/material";
import React from "react";

interface PropsType {
  user_id: string;
  answer: string;
}

const AnotherAnswer = ({ user_id, answer }: PropsType) => {
  return (
    <Container>
      <ImageIdWrap>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/logo-512.png" alt="" width={24} height={24} />
        <Typography variant="caption">{user_id}</Typography>
      </ImageIdWrap>
      <Typography variant="body1">{answer}</Typography>
    </Container>
  );
};

export default AnotherAnswer;

const Container = styled("div")`
  ${mixinFlex("column")};
  align-items: start;
  justify-content: start;
  row-gap: 8px;
`;

const ImageIdWrap = styled("div")`
  ${mixinFlex("row")};
  column-gap: 8px;
`;
