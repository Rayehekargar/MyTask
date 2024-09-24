

import { ReactNode } from 'react';
import Link from 'next/link';


interface SettingsLayoutProps {
  children: ReactNode;
}

const SettingsLayout = ({ children }: SettingsLayoutProps) => {

  return (
    <div className="flex h-screen">
      <main className="flex-1 p-6  bg-gray-100 ">
        {children}
      </main>
    </div>
  );
};

export default SettingsLayout;
