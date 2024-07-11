"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";

import { getPosts } from "@/server/getPosts";

const Posts = () => {
  const { data, error, isFetched } = useQuery({
    queryKey: ["Posts"],
    queryFn: getPosts,
    staleTime: 10 * 1000,
  });

  return (
    <ul className="grid grid-cols-1 gap-2">
      {data.map((post: { id: string; title: string }) => (
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

export default Posts;
