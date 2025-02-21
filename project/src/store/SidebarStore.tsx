import { create } from "zustand";

// Zustand 스토어 정의
interface SidebarStore {
  isOpen: boolean;
  items: SidebarItemsType;
  setIsOpen: (isOpen: boolean) => void;
}

export type SidebarItemsType = Record<string, SidebarItemType[]>;

export type SidebarItemType = {
  name: string;
  router: string;
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: false,
  items: {
    developer: [
      { name: "프론트엔드", router: "/frontend" },
      { name: "백엔드", router: "/backend" },
      { name: "게임 개발자", router: "/game" },
    ],
    student: [
      { name: "생명과학과", router: "/bio" },
      { name: "컴퓨터공학과", router: "/computer" },
    ],
  },
  setIsOpen: (isOpen) => set({ isOpen }),
}));