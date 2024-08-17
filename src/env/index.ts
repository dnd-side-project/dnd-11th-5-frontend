// https://env.t3.gg/docs/nextjs

import { createEnv } from "@t3-oss/env-nextjs";
import { z, ZodError } from "zod";

import { VALIDATION_ERROR_MESSAGES } from "../config/validationError";

export const env = createEnv({
  server: {},

  client: {
    NEXT_PUBLIC_BASE_URL: z.string({
      message: VALIDATION_ERROR_MESSAGES.required,
    }),
  },

  runtimeEnv: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
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
