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
      title: "Introduction",
      href: "/docs/introduction",
    },
    {
      title: "Installation",
      href: "/docs/installation",
    },
    {
      title: "Components",
      items: [
        { title: "Menu (Dropdown)", href: "/docs/menu" },
        { title: "Listbox (Select)", href: "/docs/listbox" },
      ],
    },
    {
      title: "Buttons",
      items: [
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
  ],
};
