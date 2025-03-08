import { create } from "zustand";
import { persist } from "zustand/middleware";

// Zustand 스토어 정의
interface userType {
  isSignIn: boolean;
  email: string;
  uid: string;
}

interface AuthStore {
  user: userType;
  setUser: (user: userType) => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: {
        isSignIn: false,
        email: "",
        uid: "",
      },
      setUser: (user) => set({ user }),
    }),
    {
      name: "auth-storage", // localStorage에 저장될 키 이름
    }
  )
);
