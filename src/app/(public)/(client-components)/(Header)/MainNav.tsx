import React, { FC } from "react";

import Logo from "@/shared/Logo";
import MenuBar from "@/shared/MenuBar";

import NotifyDropdown from "./NotifyDropdown";
import AvatarDropdown from "./AvatarDropdown";

import HeroSearchForm2MobileFactory from "../(HeroSearchForm2Mobile)/HeroSearchForm2MobileFactory";
import DropdownTravelers from "@/app/(public)/(client-components)/(Header)/DropdownTravelers";

export interface MainNavProps {
  className?: string;
}

const MainNav: FC<MainNavProps> = ({ className = "" }) => {
  return (
    <div className={`MainNav2 relative z-10 ${className}`}>
      <div className="px-4 h-20 lg:container flex justify-between">
        {/* LOGO */}
        <div className="hidden md:flex justify-start flex-1 space-x-3 sm:space-x-8 lg:space-x-10">
          <Logo className="w-36 self-center" />
          <div className="hidden lg:block self-center h-10 border-l border-neutral-300 dark:border-neutral-500"></div>
          <div className="hidden lg:flex ">
            <DropdownTravelers />
          </div>
        </div>

        {/* MOBILE SEARCH */}
        <div className="self-center lg:hidden flex-[3] max-w-lg !mx-auto md:px-3">
          <HeroSearchForm2MobileFactory />
        </div>

        <div className="hidden md:flex flex-shrink-0 justify-end flex-1 lg:flex-none text-neutral-700 dark:text-neutral-100">
          <div className="hidden md:flex space-x-1">
            {/* Language and Currency Dropdown */}
            {/*<LangDropdown />*/}

            {/*<NotifyDropdown />*/}

            {/* Logged in vs Not Logged in */}
            <AvatarDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
