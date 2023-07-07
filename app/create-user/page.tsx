"use client";

import Link from "next/link";
import React from "react";
import Form from "../../components/Form";

const form = [
  { title: "Jméno", type: "text", id: "name" },
  { title: "Zaměstnání", type: "text", id: "job" },
];
const CreateUser = () => {
  return <Form />;
};

export default CreateUser;
