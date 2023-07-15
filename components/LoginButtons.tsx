"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import StyledButton from "../styled-components/Button/StyledButton";

const LoginButtons = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>loading</div>;
  }

  if (status === "authenticated") {
    return (
      <div>
        <StyledButton type="default" handle={() => ({})} gap="right">
          <span>{session.user.name}</span>
        </StyledButton>
        <StyledButton type="alert" handle={() => signOut()}>
          <span>Odhlásit se</span>
        </StyledButton>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div>
        <StyledButton type="default" handle={() => signIn()}>
          <span>Přihlásit se</span>
        </StyledButton>
      </div>
    );
  }
};

export default LoginButtons;
