"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "text-xs text-white h-10 px-3.5 rounded-xl inset-shadow-sm inset-shadow-white/60 font-medium border border-black/4 outline-0 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-[#fa7319] hover:bg-[#fa7319]/90",
        black: "bg-[#171717] hover:bg-[#171717]/90",
        blue: "bg-[#3356ff] hover:bg-[#3356ff]/90",
        purple: "bg-[#7d52fa] hover:bg-[#7d52fa]/90",
        green: "bg-[#12a557] hover:bg-[#12a557]/90",
        gray: "bg-[#7b7b7b] hover:bg-[#7b7b7b]/90",
        red: "bg-red-400 hover:bg-red-400/90",
      },
      size: {
        default: "h-10 px-3.5 py-2",
        sm: "h-8 rounded-md gap-1.5 px-3",
        lg: "h-10 rounded-md px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export function AestheticButton({
  children,
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}
