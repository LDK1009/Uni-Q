"use client";

import { useModalStore } from "@/store";
import { mixinFlex } from "@/styles/mixins";
import { Fade, Modal, styled } from "@mui/material";
import React from "react";

const CommonModal = () => {
  const { isModalOpen, setIsModalOpen } = useModalStore();

  return (
    <Conatiner
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ContentContainer in={isModalOpen}>
        <div>hi</div>
      </ContentContainer>
    </Conatiner>
  );
};

export default CommonModal;

const Conatiner = styled(Modal)``;

const ContentContainer = styled(Fade)`
  ${mixinFlex("column")};
  width: 300px;
  height: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 8px;
  border: 1px solid black;
`;
