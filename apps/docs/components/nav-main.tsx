"use client"

import { usePathname } from 'next/navigation'
import { Routes } from '@/lib/routes-config'
import { cn } from '@/lib/utils'
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
	const url = usePathname()
	const pathname = url.replace('/docs', "")
	return (
		<SidebarGroup>
			<SidebarMenu className="tracking-wider">
				{items.map((item) => {
					return (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton asChild tooltip={item.title} className={cn("", {
								"bg-teal-600/10 text-teal-500/90 font-bold": pathname === item?.href
							})}>
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
													<SidebarMenuSubButton asChild className={pathname === subItem.href ? "bg-teal-600/10 text-teal-500/90" : ""}>
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

