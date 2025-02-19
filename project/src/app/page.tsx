"use client";

import FlipCard from "@/components/FlipCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export default function Home() {
  const TD = [
    {
      frontContent: <h2>앞면 내용1</h2>,
      backContent: <h2>뒷면 내용1</h2>,
    },
    {
      frontContent: <h2>앞면 내용2</h2>,
      backContent: <h2>뒷면 내용2</h2>,
    },
    {
      frontContent: <h2>앞면 내용3</h2>,
      backContent: <h2>뒷면 내용3</h2>,
    },
    {
      frontContent: <h2>앞면 내용4</h2>,
      backContent: <h2>뒷면 내용4</h2>,
    },
    {
      frontContent: <h2>앞면 내용5</h2>,
      backContent: <h2>뒷면 내용5</h2>,
    },
    {
      frontContent: <h2>앞면 내용6</h2>,
      backContent: <h2>뒷면 내용6</h2>,
    },
    {
      frontContent: <h2>앞면 내용7</h2>,
      backContent: <h2>뒷면 내용7</h2>,
    },
    {
      frontContent: <h2>앞면 내용8</h2>,
      backContent: <h2>뒷면 내용8</h2>,
    },
  ];

  return (
    <Swiper spaceBetween={50} slidesPerView={1} touchEventsTarget="container">
      {TD.map((item, index) => (
        <SwiperSlide key={index}>
          <FlipCard frontContent={item.frontContent} backContent={item.backContent} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
