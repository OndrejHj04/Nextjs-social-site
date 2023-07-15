"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import StyledButton from "../styled-components/Button/StyledButton";
import { openModal } from "../app/redux/features/topBar/topBarSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const LoginButtons = () => {
  const { data: session, status } = useSession();
  const dispatch = useDispatch();
  const router = useRouter();
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
        <StyledButton type="default" handle={() => router.push("/registration")}>
          <span>Zaregistrovat se</span>
        </StyledButton>
      </div>
    );
  }
};

export default LoginButtons;
