"use client";

import { Question } from "@/types/Question";
import QuestionItem from "./QuestionItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // 기본 스타일 적용

const QuestionList = ({ data }: { data: Question[] }) => {
  return (
    <div>
      <Swiper spaceBetween={50} slidesPerView={1}>
        {data?.map((el, idx) => (
          <SwiperSlide key={idx}>
            <QuestionItem itemData={el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default QuestionList;
