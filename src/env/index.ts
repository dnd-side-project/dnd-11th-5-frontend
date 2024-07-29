// https://env.t3.gg/docs/nextjs

import { createEnv } from "@t3-oss/env-nextjs";
import { z, ZodError } from "zod";

export const env = createEnv({
  server: {
    NEXT_AUTH_SECRET: z.string().base64("NEXT_AUTH_SECRET Should be Base64"),
  },

  client: {
    // NEXT_PUBLIC_twitterUrl: z.string().min(1),
  },

  runtimeEnv: {
    NEXT_AUTH_SECRET: process.env.NEXT_AUTH_SECRET,
  },

  onValidationError: (error: ZodError) => {
    error.issues.forEach((v) =>
      console.error("환경변수 유효성 검사 에러메시지 :", v.message),
    );
    throw new Error("Invalid environment variables");
  },
  // Called when server variables are accessed on the client.
  onInvalidAccess: (variable: string) => {
    throw new Error(
      "❌ 클라이언트에서 서버 사이드 환경 변수에 접근을 시도했습니다",
    );
  },
});
