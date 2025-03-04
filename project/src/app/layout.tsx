import ThemeProviderWrapper from "@/styles/ThemeProviderWrapper";
import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

export const metadata: Metadata = {
  title: "ALLIN | 대학교 학과별 면접 질문 플랫폼",
  description: "수시 & 편입 & 전과 학과별 면접을 위한 맞춤형 질문 카드 제공! AI 기반 모범 답변과 카카오톡 알림으로 효과적인 면접 준비를 시작하세요.",
  keywords: "면접 준비, 취업 면접, 입시 면접, AI 면접, 면접 질문, 모범 답변, 카카오톡 알림",
  openGraph: {
    title: "ALLIN | 대학교 학과별 면접 질문 플랫폼",
    description: "수시 & 편입 & 전과 학과별 면접을 위한 맞춤형 질문 카드 제공! AI 기반 모범 답변과 카카오톡 알림으로 효과적인 면접 준비를 시작하세요.",
    url: "https://allin.kr", // 실제 배포 URL로 변경
    images: [
      {
        url: "https://allin.kr/img/logo.png", // 실제 로고 이미지 경로로 변경
        width: 512,
        height: 512,
        alt: "ALLIN 로고",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
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
