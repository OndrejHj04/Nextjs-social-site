"use client";
import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useDispatch } from "react-redux";
import { open } from "../redux/features/banner/bannerSlice";
import { useRouter } from "next/navigation";

const Page = () => {
  const dispatch = useDispatch();
  const navigation = useRouter();
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    signIn("credentials", {
      ...data,
      action: "login",
      redirect: false,
      callbackUrl: `${window.location.origin}/`,
    }).then((res) => {
      if (res.error) {
        dispatch(
          open({
            type: "alert",
            text: "Uživatelské jméno nebo heslo nejsou správné!",
          })
        );
      } else {
        navigation.push("/dashboard");
      }
    });
  };

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full shadow-2xl border p-4 rounded-2xl"
        >
          <Typography className="text-3xl font-medium text-center">
            Zaregistrujte se!
          </Typography>
          <div className="flex flex-col gap-3">
            <TextField
              id="outlined-basic"
              label="Uživatelské jméno"
              variant="outlined"
              className="w-3/5"
              {...register("username")}
            />
            <TextField
              id="outlined-basic"
              label="Heslo"
              type="password"
              variant="outlined"
              className="w-3/5"
              {...register("password")}
            />
            <Button variant="contained" className="mt-2 w-min" type="submit">
              Přihlásit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Page;
