"use client";
import React from "react";
import { useSession, signOut, signIn } from "next-auth/react";
import Link from "next/link";

const Home = () => {
  const { data: session } = useSession();

  return (
    <>
      <div>Home</div>
      <button onClick={() => signIn()}>sing in 2</button>
    </>
  );
};

export default Home;
