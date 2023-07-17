"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useSession } from "next-auth/react";
const Home = () => {
  const state = useSelector((state) => state);

  return (
    <>
      <div>asfddas</div>
    </>
  );
};

export default Home;
