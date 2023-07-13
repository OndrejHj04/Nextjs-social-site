"use client";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const TopBar = () => {
  const { data: session, status } = useSession();
  console.log(session, status === "authenticated");

  if (status === "loading") {
    return <div>loading</div>;
  }

  if (status === "authenticated") {
    return (
      <div>
        <button onClick={() => signOut()}>SIGN OUT</button>
        <h1>{session.user.name}</h1>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div>
        <button onClick={() => signIn()}>SIGN IN</button>
      </div>
    );
  }
};

export default TopBar;
