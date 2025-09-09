"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@/lib/svg-icons";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="flex items-center justify-center h-8 w-8 border border-black/10 dark:border-zinc-400/8 rounded-lg bg-zinc-400/10 inset-shadow-sm cursor-pointer"
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      <SunIcon className="h-4 w-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <MoonIcon className="absolute h-4 w-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </div>
  );
}

export function CurrentTheme(): { theme: string | undefined } {
  const { theme } = useTheme();

  return {
    theme,
  };
}
