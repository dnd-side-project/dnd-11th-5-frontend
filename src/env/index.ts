// https://env.t3.gg/docs/nextjs

import { createEnv } from "@t3-oss/env-nextjs";
import { z, ZodError } from "zod";

import { VALIDATION_ERROR_MESSAGES } from "../config";

export const env = createEnv({
  server: {
    AUTH_SECRET: z.string().base64("AUTH_SECRET should be base64"),
    AUTH_KAKAO_ID: z.string(),
    AUTH_KAKAO_SECRET: z.string().base64("AUTH_KAKAO_SECRET should be base64"),
  },

  client: {
    NEXT_PUBLIC_BASE_URL: z.string({
      message: VALIDATION_ERROR_MESSAGES.required,
    }),
    NEXT_PUBLIC_STAGE: z.string({
      message: VALIDATION_ERROR_MESSAGES.required,
    }),
    NEXT_PUBLIC_KAKAO_MAP_KEY: z.string({
      message: VALIDATION_ERROR_MESSAGES.required,
    }),
  },

  runtimeEnv: {
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTH_KAKAO_ID: process.env.AUTH_KAKAO_ID,
    AUTH_KAKAO_SECRET: process.env.AUTH_KAKAO_SECRET,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_STAGE: process.env.NEXT_PUBLIC_STAGE,
    NEXT_PUBLIC_KAKAO_MAP_KEY: process.env.NEXT_PUBLIC_KAKAO_MAP_KEY,
  },

  onValidationError: (error: ZodError) => {
    console.error(
      "❌ 유효하지 않은 환경변수들 입니다:",
      error.flatten().fieldErrors,
    );
    throw new Error("환경변수가 유효하지 않습니다.");
  },
  // Called when server variables are accessed on the client.
  onInvalidAccess: (_variable: string) => {
    throw new Error(
      "❌ 클라이언트에서 서버 사이드 환경 변수에 접근을 시도했습니다",
    );
  },
});
