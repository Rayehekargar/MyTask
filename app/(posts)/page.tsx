
import List from '../_components/List';
import React, { Suspense } from 'react';
const Loading = () => <div>Loading posts...Please waite</div>;
export default async function Home() {
  return (
    <div>
    <h1 className="text-2xl font-bold p-4">Post List</h1>
    <Suspense fallback={<Loading />}>
    <List/>
    </Suspense>
  </div>
  );
}
