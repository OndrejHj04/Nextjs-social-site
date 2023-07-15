import React from "react";

const StyledInput = ({
  label,
  type,
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) => {
  console.log(type);

  if (type === "search") {
    return (
      <div className="relative mt-6">
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
          type="search"
          id="default-search"
          className="outline-none block w-full p-4 pl-10 text-sm border-2 rounded-lg"
          placeholder={placeholder}
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    );
  }
  return (
    <div className="flex flex-col">
      <label className="text-left font-medium">{label}</label>
      <input
        type={type}
        className="outline-none border-2 py-0.5 px-1.5 rounded-lg"
      />
    </div>
  );
};

export default StyledInput;