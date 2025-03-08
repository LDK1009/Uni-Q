import { create } from "zustand";

interface ModalStoreType {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

export const useModalStore = create<ModalStoreType>((set) => ({
  isModalOpen: false,
  setIsModalOpen: (value) =>
    set(() => ({
      isModalOpen: value,
    })),
}));
