"use client";
import { getProviders, signIn } from "next-auth/react";
import React from "react";
import StyledButton from "../styled-components/Button/StyledButton";

const SingIn = async () => {
  const providers = await getProviders();
  console.log(providers);
  return (
    <div className="w-fit m-5">
      <div className="flex flex-col gap-5">
        {Object.values(providers).map((provider) => (
          <div key={provider.id}>
            <StyledButton
              type="default"
              handle={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              <span>SIGN IN WITH {provider.name}</span>
            </StyledButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingIn;
