"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Form from "../../../components/Form";
import { Inputs } from "../../../types/types";

const EditUserDetail = () => {
  const [data, setData] = useState<Inputs>();
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/user/${id}/get`)
      .then((res) => res.json())
      .then((data) => setData({ name: data.name, job: data.job }));
  }, []);

  return <Form data={data} />;
};

export default EditUserDetail;
