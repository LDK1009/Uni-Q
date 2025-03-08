"use client";

import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Paper, styled } from "@mui/material";
import { SearchOutlined, CottageOutlined, PersonOutlineOutlined } from "@mui/icons-material";
import { mixinFlex } from "@/styles/mixins";
import Link from "next/link";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container elevation={3}>
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction component={Link} href="/" label="홈" value="recents" icon={<CottageOutlined />}/>
        <BottomNavigationAction component={Link} href="/question/major" label="검색" value="favorites" icon={<SearchOutlined />} />
        <BottomNavigationAction component={Link} href="/my-page" label="마이페이지" value="nearby" icon={<PersonOutlineOutlined />} />
      </BottomNavigation>
    </Container>
  );
}

const Container = styled(Paper)`
  width: 100%;
  position: fixed;
  left: 0px;
  bottom: 0px;
  & .MuiBottomNavigation-root {
    width: 100%;
    ${mixinFlex("row")};
    justify-content: space-between;
  }
`;
