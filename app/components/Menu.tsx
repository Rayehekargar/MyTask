import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import React, { useState } from 'react';

const Menu = () => {
  const { canAccessSettings } = useAuth();
  const [selectedItem, setSelectedItem] = useState<string | null>('list');

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };
  return (
    <>
      <div>
      <Link href="/" className={`block p-2 ${selectedItem === 'list' ? 'bg-gray-700' : ''}`} onClick={() => handleItemClick('list')}>List</Link>
      </div>
      {canAccessSettings ? (
   <div className='mt-2'> <Link href="/settings" className={`block p-2 ${selectedItem === 'settings' ? 'bg-gray-700' : ''}`} onClick={() => handleItemClick('settings')}>Settings</Link></div>
  ) : (
    <p className="ml-4 text-gray-500 cursor-not-allowed">Settings</p>
  )}
    </>
    
  );
};

export default Menu;
