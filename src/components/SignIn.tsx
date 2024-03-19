"use client";

import React, { ChangeEvent } from "react";
import { useState } from "react";

import AuthText from "@/components/AuthText";
import Link from "next/link";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <section className={`w-full`}>
      <h1 className={`text-lg font-bold`}>Welcome back!</h1>
      <h2>Sign in</h2>
      <article className={`mt-8 space-y-6`}>
        <AuthText
          name={"email"}
          id={"email"}
          type={"email"}
          label={"Email Address"}
          value={formData.email}
          placeholder={"eg. bruce@wayneenterprises.com"}
          onChange={handleChange}
        />

        <AuthText
          name={"password"}
          id={"password"}
          type={"password"}
          label={"Password"}
          value={formData.password}
          onChange={handleChange}
        />
        <button
          className={`p-3 w-full bg-primary-500 hover:bg-primary-500/90 rounded-xl text-sm text-neutral-100 uppercase font-bold transition-all duration-150`}
        >
          Sign Up
        </button>
      </article>
      <p className={`mt-4 text-xs text-center`}>
        Don't have an account yet?{" "}
        <Link
          href={"/auth/signup"}
          className={`text-primary-500 font-bold hover:underline transition-all duration-150`}
        >
          Sign Up
        </Link>
        .
      </p>
    </section>
  );
};

export default SignIn;
