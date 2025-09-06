import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "flex items-center justify-center gap-1 h-8 px-[.55rem] rounded-full text-[.80rem] w-fit inset-shadow-sm inset-shadow-white",
  {
    variants: {
      variant: {
        default:
          "bg-green-200 text-green-400 border border-green-300/10 shadow-lg shadow-green-400/40",
        orange:
          "bg-orange-200 text-orange-400 border border-orange-300/10 shadow-lg shadow-orange-400/40",
        purple:
          "bg-purple-200 text-purple-400 border border-purple-300/10 shadow-lg shadow-purple-400/40",
        red: "bg-red-200 text-red-400 border border-red-300/10 shadow-lg shadow-red-400/40",
      },
      size: {
        default: "h-8",
        sm: "h-6",
        lg: "h-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export default function Badge({
  children,
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof badgeVariants>) {
  return (
    <div className={cn(badgeVariants({ variant, size, className }))} {...props}>
      {children}
    </div>
  );
}
