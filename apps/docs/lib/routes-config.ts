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
          title: "Hover slash",
          href: "/docs/hover-slash",
        },
        {
          title: "Hover glow",
          href: "/docs/hover-glow",
        },
        {
          title: "Aesthetic",
          href: "/docs/aesthetic",
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Profile card",
          href: "/docs/profile-card",
        },
      ],
    },
    {
      title: "Badges",
      items: [
        {
          title: "Aesthetic",
          href: "/docs/aesthetic-badges",
        },
      ],
    },
    {
      title: "Inputs",
      items: [
        {
          title: "Gradient Input",
          href: "/docs/gradient-chat-input",
        },
      ],
    },
    {
      title: "Cards",
      items: [
        {
          title: "Double Card",
          href: "/docs/double-card",
        },
      ],
    },
  ],
};
