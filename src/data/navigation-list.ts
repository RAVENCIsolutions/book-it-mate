import { NavItemType } from "@/shared/Navigation/NavigationItem";
import ncNanoId from "@/utils/ncNanoId";

const demoChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Online booking",
  },
  {
    id: ncNanoId(),
    href: "/home-2",
    name: "Real estate",
    isNew: true,
  },
  {
    id: ncNanoId(),
    href: "/home-3",
    name: "Home 3",
    isNew: true,
  },
];

export const NAVIGATION_LIST: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
    isNew: true,
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Five columns",
  },
  {
    id: ncNanoId(),
    href: "/listing-stay",
    name: "Listing Page",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/listing-stay",
        name: "Stay listings",
        type: "dropdown",
        children: [
          { id: ncNanoId(), href: "/listing-stay", name: "Stay page" },
          {
            id: ncNanoId(),
            href: "/listing-stay-map",
            name: "Stay page (map)",
          },
          { id: ncNanoId(), href: "/listing-stay-detail", name: "Stay Detail" },
        ],
      },
    ],
  },
  {
    id: ncNanoId(),
    href: "/author",
    name: "Templates",
  },

  {
    id: ncNanoId(),
    href: "/blog",
    name: "Other pages",
  },
];

export default NAVIGATION_LIST;
