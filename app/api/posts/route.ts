import { NextResponse } from 'next/server';
import { Post } from './../../types';

export async function GET() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data: Post[] = await response.json();
  return NextResponse.json(data);
}
