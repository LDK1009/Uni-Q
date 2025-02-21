import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    styledComponents: true,
    emotion: true, // Emotion을 사용할 경우
  },
};

export default nextConfig;
