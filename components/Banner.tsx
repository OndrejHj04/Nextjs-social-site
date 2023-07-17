"use client";
import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/redux/store";
import { BanerState, close } from "../app/redux/features/banner/bannerSlice";
import { GrClose } from "react-icons/gr/index";

const Banner = () => {
  const state = useSelector<RootState>((state) => state.banner) as BanerState;
  const dispatch = useDispatch();

  useEffect(() => {
    if (state) {
      const timer = setTimeout(() => {
        dispatch(close());
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [state.open]);

  const style = () => {
    if (state.type === "alert") {
      return "bg-red-500 text-white";
    }

    if (state.type === "success") {
      return "bg-green-500 text-white";
    }
  };
  return (
    <>
      {state.open && (
        <div
          className={`absolute p-4 pr-6 shadow rounded-lg bottom-5 right-5 ${style()}`}
        >
          <Typography className="font-semibold text-xl">
            {state.text}
          </Typography>
          <GrClose
            className="absolute my-auto top-1 right-1 cursor-pointer"
            onClick={() => dispatch(close())}
            size={20}
          />
        </div>
      )}
    </>
  );
};

export default Banner;
