"use client";

import React, { useState } from "react";
import styled from "styled-components";

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}

const FlipCard: React.FC<FlipCardProps> = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <CardContainer onClick={handleClick}>
      <CardInner $isFlipped={isFlipped}>
        <CardFront>
          {frontContent}
          <div>클릭해서 뒤집기</div>
        </CardFront>
        <CardBack>{backContent}</CardBack>
      </CardInner>
    </CardContainer>
  );
};

export default FlipCard;

const CardContainer = styled.div`
  width: 300px;
  height: 200px;
  perspective: 1000px;
  cursor: pointer;
`;

const CardInner = styled.div<{ $isFlipped: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${(props) => (props.$isFlipped ? "rotateY(-180deg)" : "rotateY(0)")};
`;

const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardFront = styled(CardSide)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #00b388;
  color: white;
`;

const CardBack = styled(CardSide)`
  background-color: #ffffff;
  color: #333333;
  border: 3px solid #00b388;
  transform: rotateY(180deg);
`;
