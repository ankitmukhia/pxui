"use client"

import * as React from "react"
import {
	Bot,
	SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
	navMain: [
		{
			title: "Components",
			icon: SquareTerminal,
			items: [
				{
					title: "Menu (Dropdown)",
					url: "/menu",
				},
				{
					title: "Listbox (Select)",
					url: "/listbox",
				},
				{
					title: "ComboxBox (Autocomplete)",
					url: "/combox",
				},
				{
					title: "Switch (Toggle)",
					url: "/switch",
				},
				{
					title: "Disclosure",
					url: "/disclosure",
				},
				{
					title: "Radio Group",
					url: "/radio-group",
				},
				{
					title: "Tabs",
					url: "/tabs",
				},
			],
		},
		{
			title: "Buttons",
			icon: Bot,
			items: [
				{
					title: "Genesis",
					url: "/genesis",
				},
				{
					title: "Explorer",
					url: "/explorer",
				},
				{
					title: "Quantum",
					url: "/quantum",
				},
			],
		},
	]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar
			className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
			{...props}
		>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<a href="#">
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-medium">Search bar</span>
								</div>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
			</SidebarContent>
		</Sidebar>
	)
}
