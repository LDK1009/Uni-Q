"use client";

import { useSidebarStore } from "@/store/SidebarStore";

export default function SidebarButton() {
  const { isOpen, setIsOpen } = useSidebarStore();

  return (
    <button onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? "닫기" : "열기"}
    </button>
  );
}