"use client";
import { useAuth } from "../context/AuthContext";

export default function Settings() {
  const { canAccessSettings } = useAuth();

  if (!canAccessSettings) {
    return <div className="p-4">Access Denied</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold p-4">Settings Page</h1>
    </div>
  );
}
