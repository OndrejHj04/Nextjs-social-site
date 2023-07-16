import React from "react";
import { useFormContext } from "react-hook-form";

const PlainInput = ({
  label,
  type,
  name,
}: {
  label: string;
  type: string;
  name: string;
}) => {
  const { register } = useFormContext();
  return (
    <div className="flex flex-col">
      <label className="text-left font-medium">{label}</label>
      <input
        type={type}
        {...register(name)}
        className="outline-none border-2 py-0.5 px-1.5 rounded-lg"
      />
    </div>
  );
};
export default PlainInput;
