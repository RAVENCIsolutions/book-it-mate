"use client";

import React, { FC } from "react";
import { useFormState } from "react-dom";
import Image from "next/image";

import ButtonCircle from "@/shared/ButtonCircle";
import rightImg from "@/images/newsletter.png";
import Badge from "@/shared/Badge";
import Input from "@/shared/Input";
import { CreateContact } from "@/actions/brevo";

export interface SectionSubscribe2Props {
  className?: string;
}

const initialState = {
  message: "",
};

const SectionSubscribe2: FC<SectionSubscribe2Props> = ({ className = "" }) => {
  const [state, formAction] = useFormState(CreateContact, initialState);

  return (
    <div
      className={`relative flex flex-col lg:flex-row lg:items-center ${className}`}
      data-nc-id="SectionSubscribe2"
    >
      <div className="flex-shrink-0 mb-10 lg:mb-0 lg:mr-10 lg:w-2/5">
        <h2 className="font-semibold text-4xl">Join our newsletter 🎉</h2>
        <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
          Don't miss out on our latest news and amazing goodies.
        </span>
        <ul className="space-y-4 mt-10">
          <li className="flex items-center space-x-4">
            <Badge name="01" />
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
              Be in-the-know about upcoming sales
            </span>
          </li>
          <li className="flex items-center space-x-4">
            <Badge color="red" name="02" />
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
              Get holidaying tips right to your inbox
            </span>
          </li>
        </ul>
        <form action={formAction} className="mt-10 relative max-w-sm">
          {state?.message ? (
            <p
              className={`pl-3 pr-4 py-2 inline-flex items-center gap-1 bg-primary-500 rounded-full text-sm text-neutral-100 italic`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                className="w-7 h-7 stroke-secondary-500 rounded-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Thank you for subscribing!
            </p>
          ) : (
            <>
              <Input
                required
                aria-required
                name={"email"}
                placeholder="Enter your email"
                type="email"
                rounded="rounded-full"
                sizeClass="h-12 px-5 py-3"
              />
              <ButtonCircle
                type="submit"
                className="absolute transform top-1/2 -translate-y-1/2 right-1.5"
                size="w-10 h-10"
              >
                <i className="las la-arrow-right text-xl"></i>
              </ButtonCircle>
            </>
          )}
        </form>
      </div>
      <div className="flex-grow">
        <Image alt="" src={rightImg} />
      </div>
    </div>
  );
};

export default SectionSubscribe2;
