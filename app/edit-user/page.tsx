"use client";
import React, { use } from "react";
import { useState } from "react";
import { UserDB } from "../../types/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getUsers } from "../../services/users";

const EditUser = () => {
  const router = useRouter();
  const [user, setUser] = useState("");
  const allUsers: UserDB[] = use(getUsers());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (user) {
      router.push(`/edit-user/${user}`);
    }
  };

  return (
    <form className="max-w-xl" onSubmit={handleSubmit}>
      <label
        htmlFor="users"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        Vyberte uživatele, kterého chcete upravit
      </label>
      <select
        value={user}
        onChange={(e) => setUser(e.target.value)}
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="" disabled selected className="hidden">
          Vyberte uživatele...
        </option>
        {allUsers.map(({ name, _id }) => (
          <option key={_id.toString()} value={_id.toString()}>
            {name}
          </option>
        ))}
      </select>

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
  );
};

export default EditUser;
