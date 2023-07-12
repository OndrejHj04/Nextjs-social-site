"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { decrement, increment } from "./redux/features/couter/couterSlice";
import { useSession, signOut, signIn } from "next-auth/react";
const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.counter.value);

  const { data: session } = useSession();


  return (
    <>
      <div>Home</div>
      <button onClick={() => signIn()}>Sign in</button>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
};

export default Home;
