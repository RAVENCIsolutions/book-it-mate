import rightImg from "@/images/about-hero-right.png";
import React, { FC } from "react";
import SectionFounder from "./SectionFounder";
import SectionStatistic from "./SectionStatistic";
import SectionHero from "./SectionHero";
import BgGlassMorphism from "@/components/BgGlassMorphism";
import BackgroundSection from "@/components/BackgroundSection";
import SectionClientSay from "@/components/SectionClientSay";
import SectionSubscribe2 from "@/components/SectionSubscribe2";

export interface PageAboutProps {}

const PageAbout: FC<PageAboutProps> = ({}) => {
  return (
    <div className={`nc-PageAbout overflow-hidden relative`}>
      {/* ======== BG GLASS ======== */}
      <BgGlassMorphism />

      <div className="container mb-20 lg:mb-28 pt-16 lg:pt-28 space-y-16 lg:space-y-28">
        <SectionHero
          rightImg={rightImg}
          heading="👋 About Us."
          btnText=""
          subHeading={``}
        />

        <div className="relative py-16">
          <BackgroundSection />
          <SectionFounder />
        </div>

        {/*  <SectionStatistic />*/}
        <SectionSubscribe2 />
      </div>
    </div>
  );
};

export default PageAbout;
