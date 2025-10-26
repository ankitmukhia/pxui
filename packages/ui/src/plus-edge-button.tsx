"use client";

import { cn } from "@/lib/utils";
import { ExampleBackground } from "./example-background";

export function PlusEdgeBorderButton({
  children,
  className,
  strokeColor = "white",
}: {
  children: React.ReactNode;
  className?: string;
  strokeColor?: string;
}) {
  return (
    <ExampleBackground>
      <div className="relative">
        {Array.from({ length: 4 }).map((_, index) => (
          <svg
            key={index}
            className={cn("absolute z-100", {
              "rotate-90 -bottom-[5px] -left-[5px]": index === 0,
              "-right-[5px] -bottom-[5px]": index === 1,
              "rotate-180 -top-[5px] -left-[5px]": index === 2,
              "-rotate-90 -top-[5px] -right-[5px]": index === 3,
            })}
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 10L4.5 0.000732422"
              opacity={0.6}
              stroke={strokeColor}
            />
            <path d="M10 4.5H0" opacity={0.6} stroke={strokeColor} />
          </svg>
        ))}
        <button
          className={cn(
            "w-full bg-clip-padding bg-zinc-300/10 backdrop-filter backdrop-blur-xs border border-white/60 bg-opacity-5 h-10 px-3 text-sm cursor-pointer",
            className,
          )}
        >
          {children}
        </button>
      </div>
    </ExampleBackground>
  );
}
