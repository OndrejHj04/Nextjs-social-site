"use client";
import Form from "@/components/Form";
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

  return <Form />;
};

export default CreateUser;
