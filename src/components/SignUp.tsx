"use client";

import React, { ChangeEvent, useEffect } from "react";
import { useState } from "react";

import AuthText from "@/components/AuthText";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const SignUp = () => {
  const searchParams = useSearchParams();
  const emailParam = searchParams.get("email");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (emailParam && emailParam.length > 0) {
      setFormData({ ...formData, email: emailParam });
    }
  }, []);

  return (
    <section className={`w-full`}>
      <h1 className={`text-lg font-bold`}>Let's get you signed up!</h1>
      <h2>This will take a minute</h2>
      <article className={`mt-8 space-y-6`}>
        <AuthText
          name={"name"}
          id={"name"}
          type={"text"}
          label={"Name"}
          value={formData.name}
          placeholder={"eg. Bruce Wayne"}
          onChange={handleChange}
        />

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
        <AuthText
          name={"confirmPassword"}
          id={"confirmPassword"}
          type={"password"}
          label={"Confirm Password"}
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <button
          className={`p-3 w-full bg-primary-500 hover:bg-primary-500/90 rounded-xl text-sm text-neutral-100 uppercase font-bold transition-all duration-150`}
        >
          Sign Up
        </button>
      </article>
      <p className={`mt-4 text-xs text-center`}>
        Already have an account?{" "}
        <Link
          href={"/auth/login"}
          className={`text-primary-500 font-bold hover:underline transition-all duration-150`}
        >
          Sign in
        </Link>
        .
      </p>
    </section>
  );
};

export default SignUp;
