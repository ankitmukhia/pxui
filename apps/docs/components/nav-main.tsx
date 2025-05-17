"use client"

import { Routes } from '@/lib/routes-config'
import Link from 'next/link'
import {
	SidebarGroup,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export function NavMain({
	items,
}: {
	items: Routes[]
}) {
	return (
		<SidebarGroup>
			<SidebarMenu className="tracking-wider">
				{items.map((item) => {
					return (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton asChild tooltip={item.title}>
								{item.href ? (
									<Link href={`/docs/${item.href}`}>
										<span>{item.title}</span>
									</Link>
								) : (
									<span>{item.title}</span>
								)}
							</SidebarMenuButton>
							{
								item.items?.length ? (
									<>
										<SidebarMenuSub>
											{item.items?.map((subItem) => (
												<SidebarMenuSubItem key={subItem.title}>
													<SidebarMenuSubButton asChild>
														<Link href={`/docs/${subItem.href}`}>
															<span>{subItem.title}</span>
														</Link>
													</SidebarMenuSubButton>
												</SidebarMenuSubItem>
											))}
										</SidebarMenuSub>
									</>
								) : null
							}
						</SidebarMenuItem>
					)
				})}
			</SidebarMenu>
		</SidebarGroup >
	)
}

