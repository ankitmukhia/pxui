//import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
// import { SiteHeader } from "@/components/site-header";
import { AppSidebar } from "@/components/app-sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[100vh] md:min-h-min">
      <div className="flex max-w-4xl mx-auto mt-10 px-4 xl:px-0">
        <AppSidebar />

        <div className="flex flex-1 flex-col">
          <div className="flex flex-col w-full max-w-2xl mx-auto space-y-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
