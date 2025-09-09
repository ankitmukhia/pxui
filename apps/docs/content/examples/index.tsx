import React from "react";
import fs from "fs";
import path from "path";

type Component = Record<string, { name: string; component: any; code?: any }>;

const rawCode = (file_path: string) => {
	const filePath = path.resolve(process.cwd(), file_path);
	return fs.readFileSync(filePath, "utf8");
}

export const Components: Component = {
  "hover-slash": {
    name: "hover-slash",
    component: React.lazy(() => import("@repo/ui/slash-button")),
    code: rawCode("../../packages/ui/src/slash-button.tsx"),
  },
  "hover-glow": {
    name: "hover-glow",
    component: React.lazy(() => import("@repo/ui/orange-glow-button")),
    code: rawCode("../../packages/ui/src/orange-glow-button.tsx"),
  },
  "aesthetic-buttons": {
    name: "aesthetic-buttons",
    component: React.lazy(() => import("@repo/ui/aesthetic-button")),
    code: rawCode("../../packages/ui/src/aesthetic-button.tsx"),
  },
  "profile-card": {
    name: "profile-card",
    component: React.lazy(() => import("@/components/pxui/profile-card")),
		code:  rawCode("components/pxui/profile-card.tsx"),
  },
  "aesthetic-badges": {
    name: "aesthetic-badges",
    component: React.lazy(() => import("@repo/ui/aesthetic-badge")),
    code: rawCode("../../packages/ui/src/aesthetic-badge.tsx"),
  },
};
