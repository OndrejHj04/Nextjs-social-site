"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/")}
      src="/logo2.png"
      className="cursor-pointer"
      width={0}
      alt=""
      height={0}
      sizes="100vw"
      style={{ width: "290px", height: "auto" }}
    />
  );
};
export default Logo;
