import { SignInResponse } from "next-auth/react";
import React, { ReactElement } from "react";

type type = "alert" | "default";
type gap = "left" | "right";

const StyledButton = ({
  children,
  handle,
  type,
  gap,
}: {
  children: ReactElement;
  handle: () => void;
  type: type;
  gap?: gap;
}) => {
  const types = () => {
    switch (type) {
      case "default":
        return "text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
      case "alert":
        return "text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800";
    }
  };
  const gaps = () => {
    switch (gap) {
      case "left":
        return "ml-3";
      case "right":
        return "mr-3";
    }
  };

  return (
    <button
      onClick={handle}
      type="button"
      className={`${types()} ${gaps()} focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center`}
    >
      {children}
    </button>
  );
};
export default StyledButton;
