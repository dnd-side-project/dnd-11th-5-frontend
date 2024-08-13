"use client";

// ? Reference - https://codevoweb.com/how-to-set-up-and-use-react-query-in-next-js-14/

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren, useState } from "react";

function ReactQueryProvider({ children }: PropsWithChildren) {
  const [client] = useState(new QueryClient());

  return (
    <QueryClientProvider client={client}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;
