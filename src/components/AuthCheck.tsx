"use client";

import AuthText from "@/components/AuthText";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";

const AuthCheck = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <section className={`w-full`}>
      <h1 className={`text-lg font-bold`}>Let's get you signed up!</h1>
      <h2>This will take a minute</h2>
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
        <button
          className={`p-3 w-full bg-primary-500 hover:bg-primary-500/90 rounded-xl text-sm text-neutral-100 uppercase font-bold transition-all duration-150`}
        >
          Continue
        </button>
      </article>
    </section>
  );
};

export default AuthCheck;
