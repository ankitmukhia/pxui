"use client";

import * as React from "react";
import { ROUTES } from "@/lib/routes-config";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSidebar } from "@/provider/sidebar-provider";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
// <NavMain items={ROUTES.sidebarNav} />

export function AppSidebar() {
  const pathname = usePathname();
  const { open, setOpen, isMobile } = useSidebar();

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="bg-">
          <SheetHeader>
            <SheetTitle className="text-sm text-neutral-400">Menu</SheetTitle>
            {ROUTES.sidebarNav.map((item) => {
              return (
                <div key={item.title} className="flex flex-col gap-4">
                  {item.href ? (
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex gap-2"
                    >
                      <span
                        className={cn(
                          "hover:text-shadow-[2px_2px_30px_rgb(94,165,0)] hover:text-lime-500 dark:hover:text-shadow-[2px_2px_30px_rgba(154,230,0)] dark:hover:text-lime-300",
                          {
                            "text-shadow-[2px_2px_30px_rgb(94,165,0)] text-lime-500 dark:text-shadow-[2px_2px_30px_rgba(154,230,0)] dark:text-lime-300":
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
                        `flex w-full items-center gap-2 text-zinc-400 overflow-hidden`,
                        {
                          "text-lime-500 dark:text-lime-300":
                            item.title === "Get Started",
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
                          onClick={() => setOpen(false)}
                          className={cn("flex gap-2 pl-2")}
                        >
                          <span
                            className={cn(
                              "hover:text-shadow-[2px_2px_30px_rgb(94,165,0)] hover:text-lime-500 dark:hover:text-shadow-[2px_2px_30px_rgba(154,230,0)] dark:hover:text-lime-300",
                              {
                                "text-shadow-[2px_2px_30px_rgb(94,165,0)] text-lime-500 dark:text-shadow-[2px_2px_30px_rgba(154,230,0)] dark:text-lime-300":
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
          </SheetHeader>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div className="flex flex-col h-screen gap-4">
      {ROUTES.sidebarNav.map((item) => {
        return (
          <div key={item.title} className="flex flex-col gap-4">
            {item.href ? (
              <Link href={item.href} className="flex gap-2">
                {pathname === item.href && (
                  <div className="border-l-5 border-lime-400 h-full shadow-[2px_0px_4px_rgba(154,230,0)] rounded-r-xl" />
                )}
                <span
                  className={cn(
                    "hover:text-shadow-[2px_2px_30px_rgb(94,165,0)] hover:text-lime-500 dark:hover:text-shadow-[2px_2px_30px_rgba(154,230,0)] dark:hover:text-lime-300",
                    {
                      "text-shadow-[2px_2px_30px_rgb(94,165,0)] text-lime-500 dark:text-shadow-[2px_2px_30px_rgba(154,230,0)] dark:text-lime-300":
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
                  `flex w-full items-center gap-2 text-zinc-400 overflow-hidden`,
                  {
                    "text-lime-500 dark:text-lime-300":
                      item.title === "Get Started",
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
                        "hover:text-shadow-[2px_2px_30px_rgb(94,165,0)] hover:text-lime-500 dark:hover:text-shadow-[2px_2px_30px_rgba(154,230,0)] dark:hover:text-lime-300",
                        {
                          "text-shadow-[2px_2px_30px_rgb(94,165,0)] text-lime-500 dark:text-shadow-[2px_2px_30px_rgba(154,230,0)] dark:text-lime-300":
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
