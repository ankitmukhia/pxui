export interface Routes {
  title: string;
  href?: string;
  items?: Routes[];
}

export interface RoutesConfig {
  sidebarNav: Routes[];
}

export const ROUTES: RoutesConfig = {
  sidebarNav: [
    {
      title: "Get Started",
      href: "",
    },
    {
      title: "Introduction",
      href: "/docs/introduction",
    },
    {
      title: "Installation",
      href: "/docs/installation",
    },
    {
      title: "Buttons",
      items: [
        {
          title: "Hover me",
          href: "/docs/hover-me",
        },
        {
          title: "Error",
          href: "/docs/error",
        },
        {
          title: "Success",
          href: "/docs/success",
        },
      ],
    },
    {
      title: "Components",
      items: [
        { title: "Menu (Dropdown)", href: "/docs/menu" },
        { title: "Listbox (Select)", href: "/docs/listbox" },
      ],
    },
  ],
};
