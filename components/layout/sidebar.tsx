"use client";

import Link from "next/link";
import { LayoutDashboard, GraduationCap, Briefcase } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Skill Test",
    icon: GraduationCap,
    href: "/",
  },
  {
    title: "Internship",
    icon: Briefcase,
    href: "/internship",
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:block fixed left-0 h-[calc(100vh-4rem)] w-60 border-r bg-white mt-16">
      <div className="flex flex-col gap-2 p-4">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors",
                isActive && "bg-blue-50 text-blue-600"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-sm font-medium">{item.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}