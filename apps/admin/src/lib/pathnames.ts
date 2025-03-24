import { NavItems } from "@components/sidebar/nav-link";

export const NavLinks: NavItems[] = [
  {
    title: "Dashboard",
    url: "/",
    icon: "dashboard",
  },
  {
    title: "Brand",
    url: "#",
    icon: "brands",
    isCollapsible: true,
    items: [
      {
        title: "Create Brand",
        url: "/brands/create",
      },
      {
        title: "Brand List",
        url: "/brands",
      },
    ],
  },
  {
    title: "Category",
    url: "#",
    icon: "categories",
    isCollapsible: true,
    items: [
      {
        title: "Create Category",
        url: "/categories/create",
      },
      {
        title: "Category List",
        url: "/categories",
      },
    ],
  },
  {
    title: "Product",
    url: "#",
    icon: "products",
    isCollapsible: true,
    items: [
      {
        title: "Create Product",
        url: "/products/create",
      },
      {
        title: "Product List",
        url: "/products",
      },
    ],
  },
  {
    title: "Orders",
    url: "/orders",
    icon: "orders",
  },
  {
    title: "Customers",
    url: "/customers",
    icon: "customers",
  },
  {
    title: "Setting",
    url: "/settings",
    icon: "settings",
  },
];
