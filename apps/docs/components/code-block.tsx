"use client";

import { useTheme } from "next-themes";
import ShikiHighlighter from "react-shiki";

export function CodeBlock({ children }: { children: string }) {
  const { theme } = useTheme();

  return (
    <ShikiHighlighter
      language="tsx"
			showLanguage={false}
      theme={theme === "light" ? "solarized-light" : "vesper" }
      showLineNumbers
			addDefaultStyles={false}
      style={{ 
				padding: 0,
				margin: 0
			}}
    >
      {children.trim()}
    </ShikiHighlighter>
  );
}
