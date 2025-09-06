"use client";

import * as React from "react";
import { ROUTES } from "@/lib/routes-config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

// <NavMain items={ROUTES.sidebarNav} />

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <div className="xl:flex flex-col gap-4 hidden">
      {ROUTES.sidebarNav.map((item) => {
        return (
          <div key={item.title} className="flex flex-col gap-4">
            {item.href ? (
              <Link href={item.href} className="flex gap-2">
                {pathname === item.href && (
                  <div className="border-l-5 border-lime-400 h-full shadow-[2px_0px_6px_rgba(154,230,0)] rounded-r-xl" />
                )}
                <span
                  className={cn(
                    "hover:text-shadow-[2px_2px_30px_rgba(154,230,0)] hover:text-lime-300",
                    {
                      "text-shadow-[2px_2px_30px_rgba(154,230,0)] text-lime-300":
                        pathname === item.href,
                    },
                  )}
                >
                  {item.title}
                </span>
              </Link>
            ) : (
              <span
                className={cn(
                  `flex w-full items-center gap-2 text-gray-300 overflow-hidden`,
                  {
                    "text-lime-300": item.title === "Get Started",
                  },
                )}
              >
                {item.title}
              </span>
            )}
            {item.items?.length && (
              <div className="flex flex-col gap-4">
                {item.items.map((subItem) => (
                  <Link
                    key={subItem.title}
                    href={subItem.href!}
                    className={cn("flex gap-2 pl-4")}
                  >
                    {pathname === subItem.href && (
                      <div className="border-l-5 border-lime-400 h-full shadow-[2px_0px_6px_rgba(154,230,0)] rounded-r-xl" />
                    )}
                    <span
                      className={cn(
                        "hover:text-shadow-[2px_2px_30px_rgba(154,230,0)] hover:text-lime-300",
                        {
                          "text-shadow-[2px_2px_30px_rgba(154,230,0)] text-lime-300":
                            pathname === subItem.href,
                        },
                      )}
                    >
                      {subItem.title}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
