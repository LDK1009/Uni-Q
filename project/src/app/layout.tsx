import ThemeProviderWrapper from "@/styles/ThemeProviderWrapper";
import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

export const metadata: Metadata = {
  title: "데브카드(DevCard) | 개발자 면접 준비를 위한 면접질문 카드",
  description: "데브카드는 개발자 면접 준비를 위한 면접질문 카드를 제공합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <AppRouterCacheProvider>
            <ThemeProviderWrapper>
              {children}
            </ThemeProviderWrapper>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
