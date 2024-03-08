"use client";

import Logo from "@/shared/Logo";
import SocialsList from "@/shared/SocialsList";
import { CustomLink } from "@/data/types";
import React from "react";
import FooterNav from "./FooterNav";
import Link from "next/link";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "1",
    title: "About",
    menus: [
      { href: "#", label: "Our Story" },
      { href: "#", label: "Careers" },
      { href: "#", label: "Press & Media" },
    ],
  },
  {
    id: "2",
    title: "Discover",
    menus: [
      { href: "#", label: "Blog" },
      { href: "#", label: "Destinations" },
      { href: "#", label: "Travel Guides" },
      { href: "#", label: "Tips & Advice" },
    ],
  },
  {
    id: "3",
    title: "Partners",
    menus: [
      { href: "#", label: "List Your Property" },
      { href: "#", label: "Share a Review" },
      { href: "#", label: "Write an Article" },
    ],
  },
  {
    id: "4",
    title: "Support",
    menus: [
      { href: "/help-center/faq", label: "FAQ" },
      { href: "#", label: "Help Center" },
      { href: "/cancellation-policy", label: "Cancellation Policy" },
      { href: "#", label: "Contact Us" },
    ],
  },
];

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-neutral-400 hover:text-black dark:hover:text-white transition-all duration-300"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <FooterNav />

      <section className="nc-Footer relative pt-18 lg:pt-20 pb-5 border-t border-neutral-200 dark:border-neutral-700">
        <article className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 ">
          <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
            <div className="col-span-2 md:col-span-1">
              <Logo />
            </div>
            <div className="col-span-2 flex items-center md:col-span-3">
              <SocialsList className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-3 lg:items-start" />
            </div>
          </div>
          {widgetMenus.map(renderWidgetMenuItem)}
        </article>
        <article className={`mt-20 container grid grid-cols-2 w-full`}>
          <p className={`text-2xs text-neutral-400`}>
            Copyright © 2024, Book it MATE. All rights reserved.
          </p>
          <ul className={`flex justify-end gap-x-8`}>
            <li
              className={`text-2xs text-neutral-400 hover:text-black transition-all duration-300`}
            >
              <Link href={`/privacy-policy`} title={`Privacy Policy`}>
                Privacy Policy
              </Link>
            </li>
            <li
              className={`text-2xs text-neutral-400 hover:text-black transition-all duration-300`}
            >
              <Link href={`/terms-of-service`} title={`Terms of Service`}>
                Terms of Service
              </Link>
            </li>
            <li
              className={`text-2xs text-neutral-400 hover:text-black transition-all duration-300`}
            >
              <Link href={`/cookies-policy`} title={`Cookies Policy`}>
                Cookies Policy
              </Link>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
};

export default Footer;
