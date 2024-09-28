import Link from "next/link";
import { useAuth } from "../_context/AuthContext";
import React, { useState,useEffect } from "react";

const Menu = ({ currentPath }: { currentPath: string }) => {
  const { canAccessSettings } = useAuth();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  useEffect(() => {
    setSelectedItem(currentPath === "/" ? "list" : currentPath === "/settings" ? "settings" : null);
  }, [currentPath]);

 const getActiveClass = (item: string) => selectedItem === item ? "bg-gray-700" : "";
  return (
    <nav className="bg-gray-800 text-white p-4 flex-1">
      <div>
        <Link
          href="/"
          className={`block p-2 ${getActiveClass("list")} `}
        >
          List
        </Link>
      </div>

      <div className="mt-2">
        {" "}
        <Link
          href="/settings"
          className={`block p-2 ${getActiveClass("settings")} ${
            canAccessSettings ? "" : "text-gray-500 cursor-not-allowed pointer-events-none"
          }`}
        >
          Settings
        </Link>
      </div>
    </nav>
  );
};

export default Menu;
