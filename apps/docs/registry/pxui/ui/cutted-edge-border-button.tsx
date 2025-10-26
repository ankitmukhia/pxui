"use client";

import { cn } from "@/lib/utils";

export function CuttedEdgeBorderButton({
  children,
  className,
  strokeColor = "white",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  strokeColor?: string;
}) {
  return (
    <div className="relative">
      {Array.from({ length: 4 }).map((_, index) => (
        <svg
          key={index}
          width="8"
          height="8"
          viewBox="0 0 5 5"
          className={cn("absolute z-100", {
            "rotate-90 bottom-0": index === 0,
            "right-0 bottom-0": index === 1,
            "rotate-180 top-0": index === 2,
            "-rotate-90 top-0 right-0": index === 3,
          })}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="4.5" y1="5" x2="4.5" stroke={strokeColor} />
          <line x1="5" y1="4.5" y2="4.5" stroke={strokeColor} />
        </svg>
      ))}
      <button
        className={cn(
          "w-full bg-clip-padding bg-zinc-300/10 backdrop-filter backdrop-blur-xs border border-white/40 bg-opacity-5 h-10 px-3 text-sm cursor-pointer",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}
