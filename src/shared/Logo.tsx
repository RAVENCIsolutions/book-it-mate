import React from "react";
import Link from "next/link";
import { StaticImageData } from "next/image";

import logoImg from "@/images/logo.png";
import logoLightImg from "@/images/logo-light.png";

import LogoSvgLight from "./LogoSvgLight";
import LogoSvg from "./LogoSvg";
import LogoSymbol from "@/components/LogoSymbol";
import HeaderLogo from "@/components/HeaderLogo";
import HeaderLogoLight from "@/components/HeaderLogoLight";

export interface LogoProps {
  img?: StaticImageData;
  imgLight?: StaticImageData;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  imgLight = logoLightImg,
  className = "",
}) => {
  return (
    <Link
      href="/"
      className={`ttnc-logo inline-block text-primary-500 focus:outline-none focus:ring-0 ${className}`}
    >
      <HeaderLogo className={`block dark:hidden w-full max-h-12`} />
      <HeaderLogoLight className={`hidden dark:block w-full max-h-12`} />
    </Link>
  );
};

export default Logo;
