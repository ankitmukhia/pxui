"use client";

import { ModeToggle } from "@/components/ui/mode-toggle";
import { MenuIcon, XIcon } from "lucide-react";
import { useSidebar } from "@/provider/sidebar-provider";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function SiteHeader() {
	const { isMobile, toggleSidebar, open } = useSidebar();

  return (
    <header
      className={cn(
        "sticky top-0 z-90 flex w-full items-center py-2 px-4 xl:px-0",

        "bg-zinc-100/20 dark:bg-zinc-900/20 bg-clip-padding backdrop-filter backdrop-blur-xs border-b",
      )}
    >
      <div className="flex w-full max-w-5xl mx-auto items-center justify-between">
				{isMobile ? (
					<>
						{open ? (
							<button onClick={() => toggleSidebar()}>
								<XIcon className="hover:text-lime-400" />
							</button>
						) : (
							<button onClick={() => toggleSidebar()}>
								<MenuIcon className="hover:text-lime-400" />
							</button>
						)}
					</>
				) : (
					<Link href="/">
						<h1 className="font-molle text-xl">Pxui</h1>
					</Link>
				)}

        <ModeToggle />
      </div>
    </header>
  );
}
