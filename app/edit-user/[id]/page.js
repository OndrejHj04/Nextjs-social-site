"use client";
import Form from "@/components/Form";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const EditUserDetail = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/user/${id}/get`)
      .then((res) => res.json())
      .then((data) => setData({ name: data.name, job: data.job }));
  }, []);

  return <Form data={data}/>;
};

export default EditUserDetail;
