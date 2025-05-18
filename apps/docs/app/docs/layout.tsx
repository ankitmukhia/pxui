import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { SiteHeader } from '@/components/site-header'
import { AppSidebar } from '@/components/app-sidebar'

export default function DocsLayout({ children}: {
	children: React.ReactNode
}) {
	return (
		<div className="[--header-height:calc(theme(spacing.14))]">
			<SidebarProvider className="flex flex-col">
				<SiteHeader />
				<div className="flex flex-1">
					<AppSidebar />

					<SidebarInset className="max-w-[54rem] mx-auto">
						<div className="flex flex-1 flex-col gap-4 p-4"> 
							<div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
								<div className="flex flex-col gap-4 p-4">
									{children}
								</div>
							</div>
						</div>
					</SidebarInset>
				</div>
			</SidebarProvider>
		</div>
	)
}

