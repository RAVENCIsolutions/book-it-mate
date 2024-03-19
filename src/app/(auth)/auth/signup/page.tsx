import React, { FC } from "react";
import facebookSvg from "@/images/Facebook.svg";
import twitterSvg from "@/images/Twitter.svg";
import googleSvg from "@/images/Google.svg";
import Input from "@/shared/Input";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import AuthText from "@/components/AuthText";
import SignUp from "@/components/SignUp";

export const metadata: Metadata = {
  title: "Register - Book It MATE",
  description: "Create a Book It MATE account to keep track of your bookings.",
};

export interface PageSignUpProps {}

const PageSignUp: FC<PageSignUpProps> = ({}) => {
  return <SignUp />;
};

export default PageSignUp;
