"use server";

export const getPosts = async () => {
  console.log("test!!");
  return await fetch("https://jsonplaceholder.typicode.com/posts?limit=10")
    .then((res) => res.json())
    .catch((error) => {
      throw error;
    });
};
