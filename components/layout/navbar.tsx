"use client";

import { useState } from "react";
import { UserCircle, Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { sidebarItems } from "./sidebar";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="h-16 border-b bg-white fixed w-full top-0 z-50">
      <div className="flex items-center justify-between h-full px-4 max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-xl">WhatBytes</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">Rahil Siddique</span>
          <UserCircle className="h-8 w-8" />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-16 bg-white z-40 lg:hidden transition-transform duration-300",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col gap-2 p-4">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-sm font-medium">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}