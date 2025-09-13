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
    component: React.lazy(() => import("@repo/ui/slash-button").then(module => ({ default: module.SlashButton }))),
    code: rawCode("../../packages/ui/src/slash-button.tsx"),
  },
  "hover-glow": {
    name: "hover-glow",
    component: React.lazy(() => import("@repo/ui/glow-button").then(module => ({ default: module.GlowButton }))),
    code: rawCode("../../packages/ui/src/glow-button.tsx"),
  },
  "aesthetic-buttons": {
    name: "aesthetic-buttons",
    component: React.lazy(() => import("@repo/ui/aesthetic-button").then(module => ({ default: module.AestheticButton }))),
    code: rawCode("../../packages/ui/src/aesthetic-button.tsx"),
  },
  "profile-card": {
    name: "profile-card",
    component: React.lazy(() => import("@/components/pxui/profile-card").then(module => ({ default: module.ProfileCard }))),
		code:  rawCode("components/pxui/profile-card.tsx"),
  },
  "aesthetic-badges": {
    name: "aesthetic-badges",
    component: React.lazy(() => import("@repo/ui/aesthetic-badge").then(module => ({ default: module.AestheticBadge }))),
    code: rawCode("../../packages/ui/src/aesthetic-badge.tsx"),
  },
  "gradient-chat-input": {
    name: "gradient-chat-input",
		component: React.lazy(() => import("@repo/ui/gradient-chat-input").then(module => ({ default: module.GradientChatInput }))),
    code: rawCode("../../packages/ui/src/gradient-chat-input.tsx"),
  },
};
