import { create } from "zustand";

// Zustand 스토어 정의
interface SidebarStore {
  isOpen: boolean;
  items: ItemType[];
  setIsOpen: (isOpen: boolean) => void;
}

type ItemType = {
  name: string;
  router: string;
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: false,
  items: [
    { name: "프론트엔드", router: "/frontend" },
    { name: "백엔드", router: "/backend" },
    { name: "게임 개발자", router: "/game" },
  ],
  setIsOpen: (isOpen) => set({ isOpen }),
}));