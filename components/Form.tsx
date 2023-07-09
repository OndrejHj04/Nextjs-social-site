"use client";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Inputs } from "../types/types";
import { createUser, editUser } from "../services/users";

const form = [
  { title: "Jméno", type: "text", id: "name" },
  { title: "Zaměstnání", type: "text", id: "job" },
];

const Form = ({ data }: { data?: Inputs }) => {
  const pathname = usePathname();
  const { id } = useParams();
  const router = useRouter();
  const create = pathname === "/create-user" ? true : false;
  const [inputs, setInputs] = useState<Inputs>({
    name: "",
    job: "",
  });

  const emptyForm = () => {
    const structure: Inputs = {};
    form.forEach(({ id }) => {
      structure[id] = "";
    });
    setInputs(structure);
  };

  useEffect(() => {
    if (data) {
      setInputs(data);
    }
  }, [data]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = {};
    form.forEach(({ id }) => {
      user[id] = e.target[id].value;
    });
    create ? createUser(user) : editUser(user, id);
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
              value={inputs[id]}
              onChange={(e) =>
                setInputs((c) => ({ ...c, [id]: e.target.value }))
              }
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

export default Form;
