import { mixinFlex } from "@/styles/mixins";
import { styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import Bookmark from "./Bookmark";
import { getAllReferences } from "@/service/table/reference_links";
import { ReferenceLinkType } from "@/types/ReferenceLink";

interface PropsType {
  question_id: number;
}

type OgDatasType = {
  link: string;
  title: string;
  description: string;
  image: string;
};

const BookmarkList = ({ question_id }: PropsType) => {
  const [ogDatas, setOgDatas] = useState<OgDatasType[]>([]);
  const [links, setLinks] = useState<ReferenceLinkType[]>([]);

  // useEffect
  useEffect(() => {
    async function fetchLinks(question_id: number) {
      const { data } = await getAllReferences(question_id);
      if (data) {
        setLinks(data);
      }
    }

    fetchLinks(question_id);
  }, [question_id]);

  useEffect(() => {
    console.log(links);
    const getOgData = async (url: string) => {
      const response = await fetch(`/api/og?url=${encodeURIComponent(url)}`);
      const data = await response.json();
      return data;
    };

    const referenceLinksOgDatas = links.map(async (el) => {
      const ogData = await getOgData(el.link);

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
  }, [links]);

  return (
    <Container>
      {ogDatas.map((el, idx) => (
        <Bookmark key={idx} link={el.link} imgSrc={el.image} title={el.title} description={el.description} />
      ))}
    </Container>
  );
};

export default BookmarkList;

const Container = styled("div")`
  ${mixinFlex("column")};
  flex-wrap: wrap;
  width: 100%;
  row-gap: 16px;
`;
