// ? Referece - https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr#server-components--nextjs-app-router
"use client";

// ? QueryClientProvider `useContext` 위에서 동작하기 때문에 반드시 use client가 선언되어야합니다.
import {
  isServer,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // ? SSR과 함께 사용할 때, 일반적으로 클라이언트에서 즉시 재요청되는 것을 피하기 위해 0보다 큰 기본 staleTime을 설정하고자 합니다.
        staleTime: 60 * 1000,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (isServer) {
    // ? 서버: 항상 새로운 쿼리 클라이언트를 만듭니다.
    return makeQueryClient();
  } else {
    // ? 브라우저: 이미 쿼리 클라이언트가 있는 경우 새로운 클라이언트를 만들지 않습니다.
    // ? 이는 초기 렌더링 중에 React가 중단되는 경우 새로운 클라이언트를 다시 만들지 않도록하기 위해 매우 중요합니다.
    // ? 이는 쿼리 클라이언트 생성 이후에 suspense boundary가 있는 경우에는 필요하지 않을 수도 있습니다.
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

export default function ReactQueryClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // ? 참고: 초기화하는 동안 이 코드와 일시 중단이 발생할 수 있는 코드 사이에 suspense boundary가 없다면
  // ?      React는 초기 렌더링 중에 일시 중단이 발생하면 클라이언트를 버릴 것입니다.
  // ?      따라서 useState를 사용하지 않는 것이 좋습니다.
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
