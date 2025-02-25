import styled from "styled-components";
import CardContainer from "./CardContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const MainContainer = () => {
  return (
    <div>
      <StyledSwiper
        direction="vertical" // 수직 방향으로 설정
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide>
          <CardContainer />
        </SwiperSlide>
      </StyledSwiper>
    </div>
  );
};

export default MainContainer;

const StyledSwiper = styled(Swiper)`
    height: 100vh;
`
