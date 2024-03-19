import "../globals.css";
import "@/styles/index.scss";
import "rc-slider/assets/index.css";

import { Metadata } from "next";

import "@/fonts/line-awesome-1.3.0/css/line-awesome.css";

import SiteHeader from "./(client-components)/(Header)/SiteHeader";
import ClientCommons from "../ClientCommons";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Book It Mate - Find it. Love it. Book it.",
  description: "Australia's own holiday guru.",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <body className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
      <ClientCommons />
      <SiteHeader />
      {children}
      {/*<FooterNav />*/}
      <Footer />
    </body>
  );
}
