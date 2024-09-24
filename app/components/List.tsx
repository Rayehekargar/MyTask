"use client";
import { Post } from "../types";
import { usePosts } from "../hooks/usePost";

const List = () => {
  const { data, error, isLoading } = usePosts();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <ul className="p-4">
      {data?.map((post) => (
        <li key={post.id} className="border-b p-2">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default List;
