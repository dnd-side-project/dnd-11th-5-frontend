import { QueryClient } from "@tanstack/react-query";

import { getPosts } from "./_action/getPosts";
import ReactQueryServerActionExample from "./_components/ReactQueryServerActionExample";
import ZustandPersistExample from "./_components/ZustandPersistExample";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["Posts"],
    queryFn: getPosts,
  });

  return (
    <main className="flex flex-col p-4">
      <section className="flex gap-4">
        <ReactQueryServerActionExample />
        <ZustandPersistExample />
      </section>
    </main>
  );
}
