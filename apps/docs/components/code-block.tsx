"use client";

import { useTheme } from "next-themes";
import ShikiHighlighter from "react-shiki";

export function CodeBlock({ children }: { children: string }) {
  const { theme } = useTheme();

  return (
    <ShikiHighlighter
      language="tsx"
      theme={theme === "dark" ? "vesper" : "solarized-light"}
      showLineNumbers
      style={{ marginTop: "-35px" }}
    >
      {children.trim()}
    </ShikiHighlighter>
  );
}
