"use client";

import Link from "next/link";
import { use, useEffect, useState } from "react";
import DeletePopup from "../components/Delete";
import { UserDB } from "../types/types";
import { getUsers } from "../services/users";
import UserCard from "../components/UserCard";

const Home = () => {
  const users: UserDB[] = use(getUsers());

  return (
    <>
      <div className="grid-cols-3 grid justify-items-center max-w-5xl">
        {users.map((user) => (
          <UserCard user={user}/>
        ))}
      </div>
    </>
  );
};

export default Home;
