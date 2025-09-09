"use client";

// import { SidebarIcon } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { cn } from "@/lib/utils";
/* import { useSidebar } from "@/components/ui/sidebar"; */

export function SiteHeader() {
  /*   const { toggleSidebar } = useSidebar(); */

  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex w-full items-center py-2 px-6 lg:px-0",

        "bg-zinc-100/20 dark:bg-zinc-900/20 bg-clip-padding backdrop-filter backdrop-blur-xs border-b",
      )}
    >
      <div className="flex w-full max-w-5xl mx-auto items-center justify-between">
        <h1 className="font-molle text-xl">Pxui</h1>

        <ModeToggle />
      </div>
    </header>
  );
}
