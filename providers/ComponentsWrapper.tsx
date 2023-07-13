"use client";
import React from "react";
import { usePathname } from "next/navigation";

const ComponentsWrapper = ({ children }: { children: any }) => {
  const data = usePathname();
  const exclude = ["/auth"];

  if (!exclude.some((slug) => data.includes(slug))) {
    return <>{children}</>;
  }
  return null;
};

export default ComponentsWrapper;
