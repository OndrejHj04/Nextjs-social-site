import React from "react";
import LoginButtons from "./LoginButtons";
import Logo from "./Logo";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/redux/store";
import { Button } from "@mui/material";
import { open } from "../app/redux/features/banner/bannerSlice";
const TopBar = () => {
  const modal = useSelector((state: RootState) => state.topBar.modal);
  const dispatch = useDispatch()
  return (
    <>
      <div className="mb-10">
        <div className="px-10 py-4 shadow-2xl">
          <div className="relative flex justify-end">
            <div className="absolute left-0">
              <Logo />
            </div>
            <Button onClick={()=>dispatch(open({text: "ahoj", type: "alert"}))}>click</Button>
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
