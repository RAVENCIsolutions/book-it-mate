import React, { FC } from "react";
import facebookSvg from "@/images/Facebook.svg";
import twitterSvg from "@/images/Twitter.svg";
import googleSvg from "@/images/Google.svg";
import Input from "@/shared/Input";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Image from "next/image";
import Link from "next/link";
import { SignIn } from "@clerk/nextjs";

export interface PageLoginProps {}

const PageLogin: FC<PageLoginProps> = ({}) => {
  return (
    <div className={`nc-PageLogin`}>
      <div className="container mb-24 lg:mb-32">
        <div className="my-14 max-w-md mx-auto space-y-6">
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default PageLogin;
