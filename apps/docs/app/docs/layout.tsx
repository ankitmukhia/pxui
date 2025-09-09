//import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/site-header";
import { AppSidebar } from "@/components/app-sidebar";
import Link from "next/link";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <div className="flex max-w-5xl mx-auto px-6 lg:px-0 gap-10 w-full">
        <aside className="h-[calc(100vh-3.5rem)] fixed top-13 z-20 hidden shrink-0 lg:sticky lg:block">
          <div className="no-scrollbar h-full overflow-auto scrollbar-hidden py-6 lg:py-8">
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

const Footer = () => {
  return (
    <div className="flex items-center justify-center py-4">
      <h1 className="text-sm tracking-wide">
        Built by{" "}
        <Link
          href="https://x.com/ankitmukhya"
          target="_blank"
          className="underline underline-offset-2"
        >
          Ankit
        </Link>
        . The source code is available on{" "}
        <Link
          href="https://github.com/ankitmukhia/pxui"
          target="_blank"
          className="underline underline-offset-2"
        >
          Github
        </Link>
      </h1>
    </div>
  );
};
