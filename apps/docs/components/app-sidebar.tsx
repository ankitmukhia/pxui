"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { ROUTES } from "@/lib/routes-config";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarContent>
        <NavMain items={ROUTES.sidebarNav} />
      </SidebarContent>
    </Sidebar>
  );
}
