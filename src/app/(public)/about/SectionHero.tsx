import Image, { StaticImageData } from "next/image";
import React, { FC, ReactNode } from "react";
import ButtonPrimary from "@/shared/ButtonPrimary";

export interface SectionHeroProps {
  className?: string;
  rightImg: StaticImageData;
  heading: ReactNode;
  subHeading: string;
  btnText: string;
}

const SectionHero: FC<SectionHeroProps> = ({
  className = "",
  rightImg,
  heading,
  subHeading,
  btnText,
}) => {
  return (
    <div className={`nc-SectionHero relative ${className}`}>
      <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left">
        <div className="w-screen max-w-full xl:max-w-lg space-y-5 lg:space-y-7">
          <h1 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
            {heading}
          </h1>
          <span className="block text-base xl:text-lg text-neutral-600 dark:text-neutral-400">
            {subHeading}
          </span>
          {!!btnText && <ButtonPrimary href="/login">{btnText}</ButtonPrimary>}
        </div>
        <div className="flex-grow">
          <Image className="w-full" src={rightImg} alt="" />
        </div>
      </div>

      <span className="mx-auto my-20 block max-w-3xl text-sm xl:text-base text-neutral-600 dark:text-neutral-400 italic text-center">
        “We acknowledge Aboriginal & Torres Strait Islander Peoples as the first
        peoples of Australia and pay our respects to Elders past, present &
        emerging. We acknowledge all Indigenous Australians and their continuing
        connection to Country, Culture and Community. We recognize their
        invaluable contributions in our mission for Australia to be known as the
        most desirable and memorable destination on earth.”
      </span>
    </div>
  );
};

export default SectionHero;
