"use client"

import { usePathname } from 'next/navigation'
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
	const pathname = usePathname()

	return (
		<SidebarGroup>
			<SidebarMenu className="tracking-wider">
				{items.map((item) => {
					console.log("pathname: ", pathname)
					return (
						<SidebarMenuItem key={item.title}>
							{item.href ? (
								<SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
									{item.href ? (
										<Link href={item.href}>
											<span>{item.title}</span>
										</Link>
									) : (
										<span>{item.title}</span>
									)}
								</SidebarMenuButton>
							) : (
								<span className="flex w-full items-center gap-2 overflow-hidden p-2 text-sm">{item.title}</span>
							)}
							{
								item.items?.length ? (
									<>
										<SidebarMenuSub>
											{item.items?.map((subItem) => (
												<SidebarMenuSubItem key={subItem.title}>
													<SidebarMenuSubButton asChild isActive={pathname === subItem.href}>
														<Link href={subItem.href!}>
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

