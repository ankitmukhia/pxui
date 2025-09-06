import React from "react";

type Component = Record<string, { name: string; component: any }>;

export const Components: Component = {
  "hover-slash": {
    name: "hover-slash",
    component: React.lazy(() => import("@repo/ui/slash-button")),
  },
  "hover-glow": {
    name: "hover-glow",
    component: React.lazy(() => import("@repo/ui/orange-glow-button")),
  },
  "aesthetic-buttons": {
    name: "aesthetic-buttons",
    component: React.lazy(() => import("@repo/ui/aesthetic-button")),
  },
  "profile-card": {
    name: "profile-card",
    component: React.lazy(() => import("@/components/pxui/profile-card")),
  },
  "aesthetic-badges": {
    name: "aesthetic-badges",
    component: React.lazy(() => import("@repo/ui/aesthetic-badge")),
  },
};
