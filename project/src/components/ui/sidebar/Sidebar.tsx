"use client";

import { useSidebarStore } from "@/store/SidebarStore";
import { Drawer } from "@mui/material";
import styled from "styled-components";
import SidebarItem from "./SidebarItem";

// 기존 Sidebar 컴포넌트는 유지하고, 중복된 선언을 제거합니다.
const Sidebar = () => {
  const { isOpen, setIsOpen, items } = useSidebarStore();
  const category = Object.keys(items);

  const RenderSidebarItems = category.map((item) => <SidebarItem key={item} title={item} />);

  return (
    <div>
      <Container anchor="bottom" open={isOpen} onClose={() => setIsOpen(false)}>
        <div>{RenderSidebarItems}</div>
      </Container>
    </div>
  );
};

export default Sidebar;

// 스타일 컴포넌트 정의
const Container = styled(Drawer)`
  & .MuiPaper-root {
    border-top-left-radius: 20px !important;
    border-top-right-radius: 20px !important;
    overflow: hidden !important;
    overflow: hidden; // 보더가 밖으로 보이지 않게
    box-shadow: none; // 그림자 제거
    border: none; // 보더 제거
  }
`;
