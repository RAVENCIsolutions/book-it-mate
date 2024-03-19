import React from "react";
import I404Png from "@/images/404.png";
import Image from "next/image";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ClientCommons from "@/app/ClientCommons";
import SiteHeader from "@/app/(public)/(client-components)/(Header)/SiteHeader";
import Footer from "@/components/Footer";

const Page404 = () => (
  <body className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
    <ClientCommons />
    <SiteHeader />
    <div className="nc-Page404">
      <div className="container relative pt-5 pb-16 lg:pb-20 lg:pt-5">
        {/* HEADER */}
        <header className="text-center max-w-2xl mx-auto space-y-2">
          <Image src={I404Png} alt="not-found" />
          <span className="block text-sm text-neutral-800 sm:text-base dark:text-neutral-200 tracking-wider font-medium">
            {`Oops! Looks like that page doesn't exist. Let's get you back on the road.`}{" "}
            may
          </span>
          <div className="pt-8">
            <ButtonPrimary href="/">Return Home Page</ButtonPrimary>
          </div>
        </header>
      </div>
    </div>
    <Footer />
  </body>
);

export default Page404;
