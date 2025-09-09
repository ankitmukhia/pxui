//import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/site-header";
import { AppSidebar } from "@/components/app-sidebar";
import { Footer } from "@/components/footer";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen" suppressHydrationWarning>
      <SiteHeader />

      <div className="flex max-w-5xl mx-auto px-6 lg:px-0 gap-10 w-full">
        <aside className="h-[calc(100vh-3.5rem)] fixed top-13 z-20 hidden shrink-0 lg:sticky lg:block">
          <div className="h-full overflow-auto scrollbar-hidden py-6 lg:py-8">
            <AppSidebar />
          </div>
        </aside>

        <div className="min-w-0 flex-1 flex flex-col min-h-screen py-6 lg:py-8">
          <div className="flex flex-col w-full space-y-6">{children}</div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

