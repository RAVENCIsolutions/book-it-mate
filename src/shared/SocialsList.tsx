import { SocialType } from "@/shared/SocialsShare";
import React, { FC } from "react";

export interface SocialsListProps {
  className?: string;
}

const socials: SocialType[] = [
  {
    name: "Facebook",
    icon: "lab la-facebook-square",
    href: "https://www.facebook.com/profile.php?id=100064104784515",
  },
  {
    name: "Instagram",
    icon: "lab la-instagram",
    href: "https://www.instagram.com/bookitmate/",
  },
  // { name: "Twitter", icon: "lab la-twitter", href: "#" },
  // { name: "Youtube", icon: "lab la-youtube", href: "#" },
];

const SocialsList: FC<SocialsListProps> = ({ className = "space-y-2.5" }) => {
  const renderItem = (item: SocialType, index: number) => {
    return (
      <a
        href={item.href}
        className="flex items-center text-2xl text-neutral-400 hover:text-black dark:text-neutral-400 dark:hover:text-white leading-none space-x-2 group transition-all duration-300"
        key={index}
      >
        <i className={item.icon}></i>
        <span className="hidden lg:block text-sm">{item.name}</span>
      </a>
    );
  };

  return (
    <div className={`nc-SocialsList1 ${className}`} data-nc-id="SocialsList1">
      {socials.map(renderItem)}
    </div>
  );
};

export default SocialsList;
