"use client";
import { getProviders, signIn } from "next-auth/react";
import React from "react";
import { Button } from "@mui/material";

const SingIn = async () => {
  const providers = await getProviders();

  return (
    <div className="w-fit m-5">
      <div className="flex flex-col gap-5">
        {Object.values(providers).map((provider) => (
          <div key={provider.id}>
            <Button
              variant="contained"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              <span>SIGN IN WITH {provider.name}</span>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingIn;
