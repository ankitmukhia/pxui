export interface Routes {
  title: string;
  href?: string;
  sub_href?: string;
  noLink?: boolean;
  items?: Routes[];
}

export const ROUTES: Routes[] = [
  {
    title: "Introduction",
    href: "/introduction",
    noLink: true,
  },
  {
    title: "Installation",
    href: "/installation",
    noLink: true,
  },
  {
    title: "Components",
    sub_href: "/components",
    noLink: true,
    items: [
      { title: "Menu (Dropdown)", href: "/menu" },
      { title: "Listbox (Select)", href: "/listbox" },
      { title: "ComboBox", href: "/combobox" },
      { title: "Switch (Toggle)", href: "/toggle" },
      { title: "Tabs", href: "/tabs" },
    ],
  },
  {
    title: "Buttons",
		sub_href: "buttons",
    noLink: true,
    items: [
      {
        title: "Error",
        href: "/error",
      },
      {
        title: "Success",
        href: "/success",
      },
    ],
  },
];
