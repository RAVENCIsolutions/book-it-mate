import React, { FC } from "react";
import facebookSvg from "@/images/Facebook.svg";
import twitterSvg from "@/images/Twitter.svg";
import googleSvg from "@/images/Google.svg";
import Input from "@/shared/Input";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/shared/Logo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log In - Book It MATE",
  description: "Welcome back! Login to your account to see your bookings.",
};

export interface PageLoginProps {}

const PageLogin: FC<PageLoginProps> = ({}) => {
  return (
    <main
      className={`p-6 grid grid-cols-1 sm:grid-cols-2 w-full h-screen bg-[url("../images/auth-bg.png")] bg-cover`}
    >
      <div className="bg-transparent"></div>
      <section className="relative bg-white rounded-3xl overflow-y-auto">
        <article className={`space-y-6`}>
          <h1>Welcome Back</h1>
          <input
            type="text"
            name={"email"}
            placeholder={"Enter your email"}
            className={`rounded-full`}
          />
        </article>
        <Logo className={`absolute left-1/2 -translate-x-1/2 bottom-3 w-28`} />
      </section>
    </main>
  );
};

export default PageLogin;
