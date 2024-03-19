import "../../globals.css";

import { Poppins } from "next/font/google";
import "@/fonts/line-awesome-1.3.0/css/line-awesome.css";
import Logo from "@/shared/Logo";
import React from "react";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <body
      className={`bg-white h-screen bg-[url("../images/auth-bg.png")] bg-cover bg-center text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200`}
    >
      <main className={`grid grid-cols-1 md:grid-cols-2 h-full`}>
        <div className="hidden md:block bg-transparent"></div>
        <section
          className={`relative flex justify-center items-center min-h-full bg-white overflow-y-auto`}
        >
          <article className={`p-4 md:p-8 lg:p-12 w-full max-w-md max-h-full`}>
            {children}
            <Logo
              className={`absolute left-1/2 -translate-x-1/2 bottom-3 w-28`}
            />
          </article>
        </section>
      </main>
    </body>
  );
}
