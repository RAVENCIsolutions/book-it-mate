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
import SignIn from "@/components/SignIn";

export const metadata: Metadata = {
  title: "Log In - Book It MATE",
  description: "Welcome back! Login to your account to see your bookings.",
};

export interface PageLoginProps {}

const PageLogin: FC<PageLoginProps> = ({}) => {
  return <SignIn />;
};

export default PageLogin;
