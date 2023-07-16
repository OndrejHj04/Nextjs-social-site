import React from "react";
import { useFormContext } from "react-hook-form";
const SelectPrefixInput = ({
  label,
  type,
  name,
  options,
}: {
  label: string;
  type: string;
  name: string;
  options?: { label: string; default?: boolean }[];
}) => {
  const { register } = useFormContext();

  return (
    <>
      <label className="text-left font-medium">{label}</label>
      <div className="flex">
        <select
          id="countries"
          className="p-2.5 outline-none rounded-lg border-2"
          {...register("region")}
        >
          {options.map(({ label }, i) => (
            <option key={i} value={label}>
              {label}
            </option>
          ))}
        </select>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            {...register("account")}
            type="search"
            id="search"
            className="w-full pl-9 p-4 text-sm rounded-lg border-2 outline-none"
            placeholder="Hledat"
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default SelectPrefixInput;
