
import { Post } from './types';
import List from './components/List';
export default async function Home() {
  return (
    <div>
    <h1 className="text-2xl font-bold p-4">Post List</h1>
    <List/>
  </div>
  );
}
