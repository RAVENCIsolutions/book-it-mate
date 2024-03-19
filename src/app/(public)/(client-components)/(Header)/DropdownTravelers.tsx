"use client";

import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import { PathName } from "@/routers/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SolutionItem {
  name: string;
  description: string;
  href: PathName;
  icon: any;
  active?: boolean;
}

const solutions: SolutionItem[] = [
  {
    name: "About Us",
    description: "What we are all about",
    href: "/about",
    icon: IconOne,
  },
  {
    name: "Destinations",
    description: "Find your next holiday",
    href: "/listing-stay-map",
    icon: IconThree,
  },
  {
    name: "Travel Guides",
    description: "The hottest tips and spots",
    href: "/blog/travelshee-guides",
    icon: IconTwo,
  },
  {
    name: "Get Help",
    description: "Need a hand?",
    href: "/help-center",
    icon: IconFour,
  },
];

export default function DropdownTravelers() {
  const path = usePathname();

  return (
    <Popover className="DropdownTravelers relative flex">
      {({ open, close }) => (
        <>
          <Popover.Button
            className={`${open ? "" : "text-opacity-90"}
                group self-center py-2 h-10 sm:h-12 rounded-md text-sm sm:text-base font-medium hover:text-opacity-100 focus:outline-none`}
          >
            <div className={` inline-flex items-center `} role="button">
              <span>Explore</span>
              <ChevronDownIcon
                className={`${open ? "-rotate-180" : "text-opacity-70 "}
                  ml-2 h-5 w-5 text-neutral-700 group-hover:text-opacity-80 transition ease-in-out duration-150 `}
                aria-hidden="true"
              />
            </div>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-40 w-screen max-w-xs px-4 top-full transform -translate-x-1/2 left-1/2 sm:px-0">
              <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid grid-cols-1 gap-7 bg-white dark:bg-neutral-800 p-7 ">
                  {solutions.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={() => close()}
                      className={`flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 ${
                        path === item.href
                          ? "bg-neutral-100 dark:bg-neutral-700"
                          : ""
                      }`}
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-primary-50 rounded-md text-primary-500 sm:h-12 sm:w-12">
                        <item.icon aria-hidden="true" />
                      </div>
                      <div className="ml-4 space-y-0.5">
                        <p className="text-sm font-medium ">{item.name}</p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-300">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                {/* FOOTER */}
                <Link
                  href="/auth/signup"
                  className="group p-4 bg-neutral-50 dark:bg-neutral-700 hover:bg-secondary-500 hover:dark:bg-secondary-600 flow-root space-y-0.5 transition duration-150 ease-in-out rounded-md focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                >
                  <div className="px-2 py-2">
                    <span className="flex items-center">
                      <span className="text-sm font-medium">
                        Create a New Account
                      </span>
                    </span>
                    <span className="block text-sm text-gray-500 dark:text-neutral-400 group-hover:dark:text-neutral-600 transition-all duration-150">
                      Start planning your next vacation
                    </span>
                  </div>
                </Link>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

function IconFour() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-7 h-7 dark:stroke-neutral-300"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-7 h-7 dark:stroke-neutral-300"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-7 h-7 dark:stroke-neutral-300"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  );
}

function IconOne() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-7 h-7 dark:stroke-neutral-300"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
      />
    </svg>
  );
}
