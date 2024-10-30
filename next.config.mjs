/** @type {import('next').NextConfig} */

// https://env.t3.gg/docs/nextjs#validate-schema-on-build-(recommended)
import { fileURLToPath } from "node:url";
import createJiti from "jiti";
const jiti = createJiti(fileURLToPath(import.meta.url));

// 빌드 중에 검증을 위해 여기에서 env를 가져옵니다. jiti를 사용하여 .ts 파일을 가져올 수 있습니다 :)
jiti("./src/env");

import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "placehold.co",
      },
      {
        hostname: "i.ibb.co",
      },
      {
        hostname: "kfescdn.visitkorea.or.kr",
      },
      {
        hostname: "tong.visitkorea.or.kr",
      },
      {
        hostname: "fiesta-image.s3.ap-northeast-2.amazonaws.com",
      },
    ],
  },
  reactStrictMode: true,
  experimental: { instrumentationHook: true },
  webpack(config) {
    // SVG 가져오기를 처리하는 기존 규칙을 가져옵니다.
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg"),
    );

    config.module.rules.push(
      // 기존 규칙을 다시 적용하지만, ?url로 끝나는 svg 가져오기만 해당합니다.
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // 다른 모든 *.svg 가져오기를 React 컴포넌트로 변환합니다.
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      },
    );

    // 이제 우리가 처리했으므로 *.svg를 무시하도록 파일 로더 규칙을 수정합니다.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
  // ? https://nextjs.org/docs/app/api-reference/next-config-js/logging
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default bundleAnalyzer(nextConfig);
