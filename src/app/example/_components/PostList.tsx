"use client";

import { useQuery } from "@tanstack/react-query";

import { getPosts } from "../_action/getPosts";

const PostList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["Posts"],
    queryFn: getPosts,
    staleTime: 10 * 1000,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul className="grid  w-full grid-cols-1 gap-2">
      {data.slice(0, 10).map((post: { id: string; title: string }) => (
        <li
          key={post.id}
          className="rounded-md bg-gray-200 p-4 shadow-md dark:bg-gray-800"
        >
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default PostList;
