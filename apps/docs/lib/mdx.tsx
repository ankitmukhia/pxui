import { MDXComponents } from "mdx/types";
import { Card } from "@/components/ui/card";
import { Note } from "@/components/ui/note";
import { CompPreview } from "@/components/comp-preview";
import { CopyButton } from "@/components/ui/copy-button";
import { cn } from "@/lib/utils";

export const mdxComponents: MDXComponents = {
  Card,
  Note,
  CompPreview,
  h1: (props: React.ComponentProps<"h1">) => (
    <h2 className="text-3xl font-bold" {...props} />
  ),
  h2: (props: React.ComponentProps<"h2">) => (
    <h3 className="text-xl font-bold" {...props} />
  ),
  p: ({ className, ...props }: React.ComponentProps<"p">) => (
    <p
      className={cn("text-md text-sidebar-foreground", className)}
      {...props}
    />
  ),
  ul: ({ children, ...props }) => (
    <ul
      className={cn("list-disc list-inside space-y-2 text-sidebar-foreground")}
      {...props}
    >
      {children}
    </ul>
  ),
  li: ({ children, ...props }) => (
    <li className="ml-2" {...props}>
      {children}
    </li>
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a
      className="text-teal-500/90 hover:underline hover:underline-offset-4"
      target="_blank"
      {...props}
    />
  ),
  figure: ({ children, ...props }: React.ComponentProps<"figure">) => (
    <figure className="relative" {...props}>
      <CopyButton>{children}</CopyButton>
      {children}
    </figure>
  ),
};
