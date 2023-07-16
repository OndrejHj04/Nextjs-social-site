"use client";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import StyledButton from "../../styled-components/Button/StyledButton";
import StyledInput from "../../styled-components/Input/StyledInput";
const form = [
  {
    label: "Uživatelské jméno",
    type: "text",
    option: "plain",
    name: "username",
  },
  { label: "Heslo", type: "password", option: "plain", name: "password" },
  {
    label: "Najdi svoje lol účty",
    type: "text",
    option: "select-prefix",
    name: "accounts",
    select: [{ label: "EUNE", default: true }, { label: "EUW" }],
  },
];

const Page = () => {
  const methods = useForm();
  console.log(methods.watch());
  const onSubmit = (data) => {
    console.log(data);
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
        >
          {form.map(({ label, type, option, name, select }, i) => (
            <React.Fragment key={i}>
              <StyledInput
                label={label}
                type={type}
                option={option}
                name={name}
                options={select}
              />
            </React.Fragment>
          ))}
          <div className="ml-auto mt-3">
            <StyledButton type="default" event="submit">
              <span>Registrovat</span>
            </StyledButton>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Page;
