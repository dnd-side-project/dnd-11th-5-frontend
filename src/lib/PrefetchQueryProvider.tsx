import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
  QueryFunction,
  QueryKey,
} from "@tanstack/react-query";

interface PrefetchQueryProviderProps {
  queryKey: QueryKey;
  queryFn: QueryFunction;
  children: React.ReactNode;
}

const PrefetchQueryProvider = async ({
  queryKey,
  queryFn,
  children,
}: PrefetchQueryProviderProps) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey,
    queryFn,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};

export default PrefetchQueryProvider;
