"use client";

import React, { useRef } from "react";

import { useThemeMode } from "@/utils/useThemeMode";

import Header from "./Header";

const SiteHeader = () => {
  useThemeMode();

  const renderHeader = () => {
    let headerClassName = "shadow-sm dark:border-b dark:border-neutral-700";

    return <Header className={headerClassName} />;
  };

  return <>{renderHeader()}</>;
};

export default SiteHeader;
