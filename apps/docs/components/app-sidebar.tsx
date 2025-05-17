"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { ROUTES } from '@/lib/routes-config'
import {
	Sidebar,
	SidebarContent,
	SidebarInput,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar
			className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
			{...props}
		>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild className="border border-border">
							<a href="#">
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-medium">Search...</span>
								</div>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={ROUTES} />
			</SidebarContent>
		</Sidebar>
	)
}
