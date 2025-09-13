"use client";

import { cn } from "@/lib/utils";

export function GlowButton({
	children,
  className,
  ...props
}: {
	children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={cn(
        `
        relative
        h-12
        px-8
        rounded-lg
        text-white
        cursor-pointer
        font-medium
        bg-gradient-to-b from-[#FF9366] to-[#F97316]
        hover:shadow-orange-400
        transition-all
        duration-200
        transform
        hover:scale-105
        border-2
        border-white/40
        before:absolute
        before:inset-[-3px]
        before:-z-10
        before:rounded-lg
        before:bg-orange-400/80
        before:opacity-70
        before:blur-[3px]
        before:content-['']
      `,
        className,
      )}
      {...props}
    >
		 {children}
    </button>
  );
}
