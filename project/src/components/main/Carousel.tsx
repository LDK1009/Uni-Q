"use client";

import { styled } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

const images = [
  "/img/main-banner1.png",
  "/img/main-banner1.png",
  "/img/main-banner1.png",
];

const Carousel = () => {
  return (
    <div>
      <Swiper
        direction="horizontal" // 수직 방향
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        style={{ height: "375px", width: "100%", backgroundColor:"red" }} // 원하는 크기로 조정
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image src={src} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;

const Image = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
