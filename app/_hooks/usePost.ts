"use client"
import { useQuery } from '@tanstack/react-query';
import { Post } from '../types'; 

const fetchPosts = async () => {

  try {
  const response = await fetch('/api/posts'); 
  console.log('Response:', response); 
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
} catch (error) {
  console.error('Fetch error:', error);
  throw error; 
}
};

export const usePosts = () => {
    return useQuery<Post[], Error>({
        queryKey: ['posts'],
        queryFn: fetchPosts,
        staleTime: 0, 
        refetchOnWindowFocus: true,
      });
};
