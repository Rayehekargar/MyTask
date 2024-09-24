
"use client"
import { createContext, useContext, useState,ReactNode  } from 'react';
import { User } from '../types';
interface AuthContextType {
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
    canAccessSettings: boolean;
  }

const AuthContext =createContext<AuthContextType | undefined>(undefined);


export const AuthProvider = ({ children }:{ children: ReactNode }) => {
  const [user, setUser] = useState<User>({name: 'Alice' });

  // کاربران مجاز به دسترسی به تنظیمات
  const usersWithAccess = ['Alice', 'Bob'];
  return (
    <AuthContext.Provider value={{ user, setUser,canAccessSettings: usersWithAccess.includes(user.name) }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };
