"use client";
import { getProviders, signIn } from "next-auth/react";
import React from "react";

const SingIn = async () => {
  const providers = await getProviders();
  
  return (
    <div className="flex gap-5">
      {Object.values(providers).map((provider) => (
        <React.Fragment key={provider.id}>
          <button onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
            SIGN IN WITH {provider.name}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SingIn;
