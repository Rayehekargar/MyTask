import Link from "next/link";
import { useAuth } from "../_context/AuthContext";
import React, { useState } from "react";

const Menu = () => {
  const { canAccessSettings } = useAuth();
  const [selectedItem, setSelectedItem] = useState<string | null>("list");

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };
  return (
    <nav className="bg-gray-800 text-white p-4 flex-1">
      <div>
        <Link
          href="/"
          className={`block p-2 ${
            selectedItem === "list" ? "bg-gray-700" : ""
          }`}
          onClick={() => handleItemClick("list")}
        >
          List
        </Link>
      </div>

      <div className="mt-2">
        {" "}
        <Link
          href="/settings"
          className={`block p-2 ${
            (selectedItem  === "settings") && canAccessSettings ? "bg-gray-700" : ""
          } ${canAccessSettings ? "" : "text-gray-500 cursor-not-allowed pointer-events-none"}`}
          onClick={() => handleItemClick("settings")}
        >
          Settings
        </Link>
      </div>
    </nav>
  );
};

export default Menu;
