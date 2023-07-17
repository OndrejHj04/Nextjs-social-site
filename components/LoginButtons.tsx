"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";

const LoginButtons = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log(session);
  if (status === "loading") {
    return <div>loading</div>;
  }

  if (status === "authenticated") {
    return (
      <div>
        <Button variant="contained" onClick={() => ({})}>
          <span>{session.user.name}</span>
        </Button>
        <Button variant="contained" onClick={() => signOut()}>
          <span>Odhlásit se</span>
        </Button>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div>
        <Button
          variant="contained"
          onClick={() => router.push("/registration")}
        >
          Zaregistrovat se
        </Button>
      </div>
    );
  }
};

export default LoginButtons;
