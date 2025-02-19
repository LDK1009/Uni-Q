"use client";

import { useSidebarStore } from "@/store/SidebarStore";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useRouter } from "next/navigation";
import styled from "styled-components";

// 기존 Sidebar 컴포넌트는 유지하고, 중복된 선언을 제거합니다.
const Sidebar = () => {
  const { isOpen, setIsOpen, items } = useSidebarStore();
  const router = useRouter();

  return (
    <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
      <SidebarContainer>
        <List>
          {items.map((item) => (
            <StyledListItem key={item.name} onClick={() => {
              router.push(item.router)
              setIsOpen(false);
            }}>
              <ListItemText primary={item.name} />
            </StyledListItem>
          ))}
        </List>
      </SidebarContainer>
    </Drawer>
  );
};

export default Sidebar;

// 스타일 컴포넌트 정의
const SidebarContainer = styled.div`
  width: 250px; // 사이드바 너비
  background-color: #dad9f5; // 배경색
  padding: 20px; // 패딩
`;

const StyledListItem = styled(ListItem)`
  &:hover {
    background-color: blue; // 호버 시 배경색
    color: white;
    cursor: pointer;
  }
`;
