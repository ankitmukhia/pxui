"use client"

import { usePathname } from 'next/navigation'
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
	items: {
		title: string
		items?: {
			title: string
			url: string
		}[]
	}[]
}) {
	const path = usePathname()
	console.log("current pathname: ", path)

	return (
		<SidebarGroup>
			<SidebarMenu className="tracking-wider">
				{items.map((item) => {
					return (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton asChild tooltip={item.title}>
								<span>{item.title}</span>
							</SidebarMenuButton>
							{item.items?.length ? (
								<>
									<SidebarMenuSub>
										{item.items?.map((subItem) => (
											<SidebarMenuSubItem key={subItem.title}>
												<SidebarMenuSubButton asChild>
													<Link href={`/docs/${subItem.url}`}>
														<span>{subItem.title}</span>
													</Link>
												</SidebarMenuSubButton>
											</SidebarMenuSubItem>
										))}
									</SidebarMenuSub>
								</>
							) : null}
						</SidebarMenuItem>
					)
				})}
			</SidebarMenu>
		</SidebarGroup>
	)
}

