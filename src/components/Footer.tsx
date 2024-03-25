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
      { href: "/about", label: "Our Story" },
      // { href: "/careers", label: "Careers" },
      // { href: "/press-and-media", label: "Press & Media" },
    ],
  },
  {
    id: "2",
    title: "Discover",
    menus: [
      { href: "/blog", label: "Blog" },
      { href: "/blog/destinations", label: "Destinations" },
      { href: "/blog/travel-guides", label: "Travel Guides" },
      { href: "/blog/tips-and-advice", label: "Tips & Advice" },
    ],
  },
  {
    id: "3",
    title: "Partners",
    menus: [
      { href: "/add-listing", label: "List Your Property" },
      { href: "/write-an-article", label: "Write an Article" },
      // { href: "/share-review", label: "Share a Review" },
    ],
  },
  {
    id: "4",
    title: "Support",
    menus: [
      { href: "/help-center/faq", label: "FAQ" },
      { href: "/help-center", label: "Help Center" },
      { href: "/cancellation-policy", label: "Cancellation Policy" },
      { href: "/help-center/contact-us", label: "Contact Us" },
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
                className="text-neutral-400 hover:text-secondary-600 hover:dark:text-secondary-500 transition-all duration-300"
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
      <section className="relative pt-18 lg:pt-20 pb-5 border-t border-neutral-200 dark:border-neutral-700">
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
        <article
          className={`mt-20 container grid grid-cols-1 sm:grid-cols-2 gap-2 w-full`}
        >
          <p className={`text-2xs text-neutral-400`}>
            Copyright © 2024, Book it MATE. All rights reserved.
          </p>
          <ul className={`flex flex-col sm:flex-row justify-end gap-2 gap-x-8`}>
            <li
              className={`text-2xs text-neutral-400 transition-all duration-300`}
            >
              <Link
                href={`/privacy-policy`}
                className={`hover:text-secondary-600 hover:dark:text-secondary-500 transition-all duration-300`}
                title={`Privacy Policy`}
              >
                Privacy Policy
              </Link>
            </li>
            <li
              className={`text-2xs text-neutral-400 transition-all duration-300`}
            >
              <Link
                href={`/terms-of-service`}
                className={`hover:text-secondary-600 hover:dark:text-secondary-500 transition-all duration-300`}
                title={`Terms of Service`}
              >
                Terms of Service
              </Link>
            </li>
            <li
              className={`text-2xs text-neutral-400 transition-all duration-300`}
            >
              <Link
                href={`/cookies-policy`}
                className={`hover:text-secondary-600 hover:dark:text-secondary-500 transition-all duration-300`}
                title={`Cookies Policy`}
              >
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
