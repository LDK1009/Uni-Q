"use client";

import { useAuthStore } from "@/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "./Header";
import { styled } from "@mui/material";
import { mixinFlex } from "@/styles/mixins";
import AccountInformation from "./AccountInformation";
import MenuList from "./MenuList";
import { InfoOutlined } from "@mui/icons-material";
import ButtonGroup from "./ButtonGroup";

const MyPageContainer = () => {
  // Store
  const { user } = useAuthStore();

  // Hooks
  const router = useRouter();

  useEffect(() => {
    if (!user.isSignIn) {
      router.push("/auth/sign-in");
    }
  }, [user.isSignIn, router]); // user 상태가 변경될 때만 실행됨

  if (!user.isSignIn) return null; // 리다이렉트 시 빈 화면 표시

  // PropsData
  const AccountInformationProps = [{ title: "이메일", value: user.email }];
  const MenuListProps = [
    {
      category: "메뉴 카테고리1",
      menus: [
        { title: "메뉴1", icon: <InfoOutlined />, onClick: () => {} },
        { title: "메뉴2", icon: <InfoOutlined />, onClick: () => {} },
        { title: "메뉴3", icon: <InfoOutlined />, onClick: () => {} },
      ],
    },
    {
      category: "메뉴 카테고리2",
      menus: [
        { title: "메뉴1", icon: <InfoOutlined />, onClick: () => {} },
        { title: "메뉴2", icon: <InfoOutlined />, onClick: () => {} },
        { title: "메뉴3", icon: <InfoOutlined />, onClick: () => {} },
      ],
    },
  ];

  return (
    <Container>
      <Header nickname={user.email} imgSrc="/img/logo-192.png" />
      <AccountInformation items={AccountInformationProps} />
      <MenuList datas={MenuListProps} />
      <ButtonGroup />
    </Container>
  );
};

export default MyPageContainer;

const Container = styled("div")`
  ${mixinFlex("column")};
  align-items: start;
  justify-content: start;
  padding: 48px 24px;
  row-gap: 40px;
`;
