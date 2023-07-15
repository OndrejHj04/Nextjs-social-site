import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      src="/logo2.png"
      width={0}
      alt=""
      height={0}
      sizes="100vw"
      style={{ width: "290px", height: "auto" }}
    />
  );
};
export default Logo