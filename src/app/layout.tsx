import "./globals.css";
import "@/styles/index.scss";
import "rc-slider/assets/index.css";

import { Metadata } from "next";

import { Poppins } from "next/font/google";
import "@/fonts/line-awesome-1.3.0/css/line-awesome.css";

import SiteHeader from "./(client-components)/(Header)/SiteHeader";
import ClientCommons from "./ClientCommons";
import Footer from "@/components/Footer";
import FooterNav from "@/components/FooterNav";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

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
    <ClerkProvider
      signInUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}
      signUpUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL}
    >
      <html lang="en" className={poppins.className}>
        <body className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
          <ClientCommons />
          <SiteHeader />
          {children}
          {/*<FooterNav />*/}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
