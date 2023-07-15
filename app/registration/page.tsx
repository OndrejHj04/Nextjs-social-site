import React from "react";
import StyledInput from "../../styled-components/Input/StyledInput";
const Page = () => {
  const form = [
    { label: "Uživatelské jméno" },
    { label: "Heslo", type: "password" },
    {
      label: "Vybrat účty",
      type: "search",
      placeholder: "Najdi svoje league of legends účty",
    },
  ];
  return (
    <div className="max-w-3xl mx-auto">
      <h3 className="font-semibold text-3xl">
        Vytvořte si profil a přidejte si svůj lol účet!
      </h3>
      {form.map(({ label, type, placeholder }, i) => (
        <React.Fragment key={i}>
          <StyledInput label={label} type={type} placeholder={placeholder} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Page;
