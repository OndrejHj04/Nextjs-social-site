import React from "react";
import LoginButtons from "./LoginButtons";
import Logo from "./Logo";
const TopBar = () => {
  return (
    <>
      <div className="px-10 py-4 shadow-2xl">
        <div className="relative flex justify-end">
          <div className="absolute left-0">
            <Logo />
          </div>

          <div>
            <LoginButtons />
          </div>
        </div>
      </div>
      <div className="h-0.5 bg-gray-400" />
    </>
  );
};
export default TopBar;
