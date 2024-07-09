"use client";

// * Reference - https://github.com/soobing/next-14-react-query/blob/main/src/hooks/useReactQuery.tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

export default function ReactQueryProviders({
  children,
}: React.PropsWithChildren) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // SSR과 함께 사용할 때, 일반적으로 클라이언트에서 즉시 다시 가져오는 것을 피하기 위해
            // 0보다 큰 기본 staleTime을 설정하고자 합니다.
            staleTime: 60 * 1000,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
