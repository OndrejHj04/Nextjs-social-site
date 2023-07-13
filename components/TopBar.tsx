import React from "react";
import LoginButtons from "./LoginButtons";
const TopBar = () => {
  return (
    <>
      <div className="flex justify-between px-10 py-3 shadow-2xl">
        <div>Houska</div>
        <LoginButtons />
      </div>
      <div className="bg-gray-400 h-0.5"/>
    </>
  );
};
export default TopBar;
