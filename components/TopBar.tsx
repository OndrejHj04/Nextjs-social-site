import React from "react";
import LoginButtons from "./LoginButtons";
import Logo from "./Logo";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import { RootState } from "../app/redux/store";
const TopBar = () => {
  const modal = useSelector((state: RootState) => state.topBar.modal);
  return (
    <>
      <div className="mb-10">
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
      </div>
      {modal && <Modal />}
    </>
  );
};
export default TopBar;
