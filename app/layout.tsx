"use client";
import React, { useEffect, useState } from "react";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Create user", slug: "/create-user" },
  { name: "Edit user", slug: "/edit-user" },
  { name: "History", slug: "/history" },
];

const RootLayout = ({ children }) => {
  const url = usePathname();
  const [count, setCount] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("/api/users/get");
      const data = await response.json();
      setCount(data.length);
    };
    getUsers();
  }, []);
  console.log(url);
  return (
    <html>
      <body>
        <h1 className="text-3xl font-semibold mt-16 ml-8 mb-8">
          A home for all of our {count} clients
        </h1>
        <nav className="shadow-xl">
          <div className="flex gap-5 ml-8">
            <Link
              href={"/"}
              className={`${
                url === "/" && "border-b-4 border-orange-400"
              } text-xl`}
            >
              Dashboard
            </Link>
            {navigation.map(({ name, slug }) => (
              <Link
                key={name}
                href={slug}
                className={`${
                  url.includes(slug) && "border-b-4 border-orange-400"
                } text-xl`}
              >
                {name}
              </Link>
            ))}
          </div>

          <div className="bg-gray-200 h-0.5 mt-5 " />
        </nav>

        <div className="mx-8 mt-8">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
