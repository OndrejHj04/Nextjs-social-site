"use client";
import Link from "next/link";
import React from "react";

const form = [
  { title: "Jméno", type: "text", id: "name" },
  { title: "Zaměstnání", type: "text", id: "job" },
];
const CreateUser = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {};
    form.forEach(({ id }) => {
      user[id] = e.target[id].value;
    });

    fetch("/api/users/create", {
      method: "POST",
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((e) => console.log("neco se nepovedlo"));
  };

  return (
    <div className="max-w-xs">
      <form onSubmit={handleSubmit} className="flex flex-col text-xl">
        {form.map(({ title, type, id }) => (
          <React.Fragment key={id}>
            <label htmlFor="job">{title}</label>
            <input
              id={id}
              name={id}
              type={type}
              className="outline-none border-gray-300 border-2 px-2 py-0.5 rounded-xl"
            />
          </React.Fragment>
        ))}
        <div className="flex gap-3 justify-end mt-3">
          <Link
            className="border-2 border-red-700 px-2 py-0.5 rounded-xl bg-red-100 cursor-pointer"
            href="/"
          >
            Zrušit
          </Link>
          <button className="border-2 border-green-700 px-2 py-0.5 rounded-xl bg-green-100">
            Uložit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
