"use client";

import { useState, createContext, useContext, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface SidebarContextProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextProps | null>(null);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("Sidebar should be inside provider");
  }

  return context;
};

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState<boolean>(false);

  const toggleSidebar = useCallback(() => {
    return isMobile && setOpen((open) => !open);
  }, [isMobile, setOpen]);

  return (
    <SidebarContext.Provider value={{ open, setOpen, isMobile, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
