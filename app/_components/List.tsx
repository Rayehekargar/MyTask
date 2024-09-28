"use client";
import { Post } from "../types";
import { usePosts } from "../_hooks/usePost";

const List = () => {
  const { data } = usePosts();

  return (
    <ul className="p-4">
      {data?.map((post: Post) => (
        <li key={post.id} className="border-b p-2">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default List;
