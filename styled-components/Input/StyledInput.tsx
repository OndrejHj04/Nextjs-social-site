import React from "react";
import { useFormContext } from "react-hook-form";
import PlainInput from "./options/PlainInput";
import SelectPrefixInput from "./options/SelectPrefixInput";

const StyledInput = ({
  label,
  type,
  option,
  name,
  options,
}: {
  label: string;
  type: string;
  option: string;
  name: string;
  options?: { label: string; default?: boolean }[];
}) => {
  return (
    <>
      {option === "plain" && (
        <PlainInput label={label} type={type} name={name} />
      )}
      {option === "select-prefix" && (
        <SelectPrefixInput
          label={label}
          type={type}
          name={name}
          options={options}
        />
      )}
    </>
  );
};

export default StyledInput;
