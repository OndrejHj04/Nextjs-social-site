"use client";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";


const Page = () => {
  const methods = useForm();
  
  const onSubmit = (data) => {
    console.log(data, "odesláno");
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h3 className="font-semibold text-3xl">
        Vytvořte si profil a přidejte si svůj lol účet!
      </h3>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col"
        ></form>
      </FormProvider>
    </div>
  );
};

export default Page;
