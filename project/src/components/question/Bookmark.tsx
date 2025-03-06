import { styled, Typography } from "@mui/material";
import React from "react";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import { mixinFlex } from "@/styles/mixins";

interface PropsType {
  link: string;
  imgSrc: string;
  title: string;
  description: string;
}

const Bookmark = ({ link, imgSrc, title, description }: PropsType) => {
  return (
    <Container href={link} target="_blank">
      <ContentContainer>
        <Image src={imgSrc ? imgSrc : "/img/reference-image.png"} alt="" width={100} height={100} />
        <IconTextWrap>
          <InsertLinkOutlinedIcon />
          <Typography variant="body1">{title ? title : "참고자료"}</Typography>
          <Typography variant="body1">{description}</Typography>
        </IconTextWrap>
      </ContentContainer>
    </Container>
  );
};

export default Bookmark;

const Container = styled("a")`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0px 2px 3px ${({ theme }) => theme.palette.gray[50]};

  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 14px;
  line-height: 150%;
  background-color: ${({ theme }) => theme.palette.gray[0]};
`;

const ContentContainer = styled("div")`
  ${mixinFlex("row")};
  column-gap: 8px;
  justify-content:start;

  margin: 12px;
`;

const Image = styled("img")`
  width: 100px;
  height: 100px;
  border-radius: 8px;
`;

const IconTextWrap = styled("div")`
  ${mixinFlex("column")};
  align-items: start;
  row-gap: 4px;
  & svg {
    color: ${({ theme }) => theme.palette.primary.main};
    transform: rotateZ(-30deg);
  }

  display: -webkit-box;
  -webkit-line-clamp: 3; // 3줄 이상이면 ellipsis 적용
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;
