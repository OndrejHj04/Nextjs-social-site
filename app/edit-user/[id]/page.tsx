"use client";
import { useParams } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import Form from "../../../components/Form";
import { Inputs } from "../../../types/types";
import { getUserDetail } from "../../../services/users";

const EditUserDetail = () => {
  const { id } = useParams();
  const data: Inputs = use(getUserDetail(id));

  return <Form data={data} />;
};

export default EditUserDetail;
