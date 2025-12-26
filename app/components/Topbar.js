"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";   // <-- import useRouter
import { Search, Bell, HelpCircle, Menu, Globe, User, Key, LogOut } from "lucide-react";

const Topbar = ({ onMenuClick }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();   // <-- initialize router here

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 lg:left-64 w-full lg:w-[calc(100%-16rem)] h-16 bg-[#1b2f74] border-b border-[#2c3f8f] flex items-center justify-between px-6 z-30">
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="p-2 rounded-lg lg:hidden text-white hover:bg-[#2c3f8f]"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* CENTER */}
      <div className="hidden md:flex flex-1 max-w-md mx-8">
        <div className="relative w-full">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"
          />
          <input
            type="text"
            placeholder="Search solutions, processes..."
            className="w-full pl-10 pr-4 py-2 bg-[#2c3f8f] border border-[#3a4fa3] rounded-xl text-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative flex items-center gap-4" ref={dropdownRef}>
        <button className="p-2 text-gray-300 hover:bg-[#2c3f8f] rounded-lg hidden sm:block">
          <Globe size={20} />
        </button>

        <button className="relative p-2 text-gray-300 hover:bg-[#2c3f8f] rounded-lg">
          <Bell size={20} />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <button className="p-2 text-gray-300 hover:bg-[#2c3f8f] rounded-lg">
          <HelpCircle size={20} />
        </button>

        <div className="h-6 w-px bg-[#3a4fa3]" />

        {/* Admin Button */}
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm"
        >
          Admin
        </button>

        {/* Dropdown */}
        {showDropdown && (
          <div className="absolute right-0 top-16 w-48 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-40">
            <button
              onClick={() => router.push("/profile")}
              className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 w-full"
            >
              <User size={18} /> Profile
            </button>
            <button
              onClick={() => router.push("/changepassword")}
              className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 w-full"
            >
              <Key size={18} /> Password
            </button>
            <button
              onClick={() => router.push("/login")}
              className="flex items-center gap-2 px-4 py-3 text-sm text-red-600 hover:bg-red-50 w-full"
            >
              <LogOut size={18} /> Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Topbar;
