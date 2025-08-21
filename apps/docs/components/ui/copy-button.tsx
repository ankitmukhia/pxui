"use client";

import { useState, useEffect, isValidElement } from "react";
import { CheckIcon, CopyIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function CopyButton({ children, className, ...props }: CopyButtonProps) {
  const [hasCopied, setCopied] = useState(false);
  const [code, setCode] = useState("");

  useEffect(() => {
    // If children contains a <code> element, extract its text
    function extractText(node: React.ReactNode): string {
      if (typeof node === "string") return node;
      if (Array.isArray(node)) return node.map(extractText).join("");
      if (isValidElement<{ children: React.ReactNode }>(node)) {
        return extractText(node.props.children);
      }
      return "";
    }
    setCode(extractText(children));
  }, [children]);

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  }
  return (
    <button
      className={cn("absolute right-0 py-5 px-4 z-10", className)}
      onClick={copyToClipboard}
      {...props}
    >
      <span className="sr-only">Copy</span>
      {hasCopied ? (
        <CheckIcon size={15} className="text-teal-500/90" />
      ) : (
        <CopyIcon size={15} className="cursor-pointer" />
      )}
    </button>
  );
}
