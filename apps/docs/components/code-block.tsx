"use client";

import { useTheme } from "next-themes";
import ShikiHighlighter from "react-shiki";

export function CodeBlock({ children, showLineNumbers = true }: { children: string, showLineNumbers?: boolean }) {
  const { theme } = useTheme();

  return (
    <ShikiHighlighter
      language="tsx"
			showLanguage={false}
      theme={theme === "dark" ? "vesper" : "solarized-light"}
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
