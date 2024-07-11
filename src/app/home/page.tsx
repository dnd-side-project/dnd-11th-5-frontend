import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import Posts from "@/components/Posts";
import ThemeChanger from "@/components/ThemeChanger";
import { getPosts } from "@/server/getPosts";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["Posts"],
    queryFn: getPosts,
  });

  return (
    <main>
      <ThemeChanger />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Posts />
      </HydrationBoundary>
    </main>
  );
}
