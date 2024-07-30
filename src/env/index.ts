// https://env.t3.gg/docs/nextjs

import { createEnv } from "@t3-oss/env-nextjs";
import { z, ZodError } from "zod";

export const env = createEnv({
  server: {
    AUTH_SECRET: z.string().base64("AUTH_SECRET should be base64"),
    AUTH_KAKAO_ID: z.string(),
    AUTH_KAKAO_SECRET: z.string().base64("AUTH_KAKAO_SECRET should be base64"),
  },

  client: {
    // NEXT_PUBLIC_twitterUrl: z.string().min(1),
  },

  runtimeEnv: {
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTH_KAKAO_ID: process.env.AUTH_KAKAO_ID,
    AUTH_KAKAO_SECRET: process.env.AUTH_KAKAO_SECRET,
  },

  onValidationError: (error: ZodError) => {
    console.table(
      error.issues.map((v) => ({ name: v.path[0], message: v.message })),
    );
    throw new Error("환경변수 유효성 검사 에러");
  },
  // Called when server variables are accessed on the client.
  onInvalidAccess: (variable: string) => {
    throw new Error(
      "❌ 클라이언트에서 서버 사이드 환경 변수에 접근을 시도했습니다",
    );
  },
});
