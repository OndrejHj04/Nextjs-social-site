"use client";
import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider, csCZ } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { yupResolver } from "@hookform/resolvers/yup";

import moment from "moment";
import * as yup from "yup";
import { getProviders, signIn } from "next-auth/react";
type form = {
  username: string;
  email: string;
  date: string;
  password: string;
};
const schema = yup.object().shape({
    username: yup
      .string()
      .required("Je potřeba vyplnit uživatelské jméno")
      .min(5, "Jméno musí mít nejméně 5 znaků"),
    email: yup
      .string()
      .email("Je potřeba zadat platný email")
      .required("Je potřeba zadat platný email"),
    date: yup.string().required("Je potřeba zadat platné datum"),
    password: yup
      .string()
      .required("Je potřeba zadat heslo")
      .min(8, "Heslo musí mít nejméně 8 znaků"),
});

const Page = () => {
  const {
    register,
    setValue,
    handleSubmit,

    formState: { errors },
  } = useForm<form>({
    resolver: yupResolver(schema),
  });
  moment.updateLocale("en", {
    week: {
      dow: 1,
    },
  });
  const onSubmit = (data: form) => {
    signIn("credentials", { ...data });
  };
  return (
    <div className="max-w-3xl mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full shadow-2xl border p-4 rounded-2xl"
      >
        <Typography className="text-3xl font-medium text-center">
          Zaregistrujte se!
        </Typography>

        <div className="w-1/5 mx-auto h-0.5 bg-gray-300 my-3" />
        <div className="grid grid-cols-2 gap-x-2">
          <div>
            <TextField
              id="outlined-basic"
              label="Uživatelské jméno"
              variant="outlined"
              className="w-full"
              {...register("username")}
            />

            {errors?.username?.message && (
              <Typography className="text-red-500 font-semibold">
                {errors.username.message}
              </Typography>
            )}
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className="w-full"
              {...register("email")}
            />
            {errors?.email?.message && (
              <Typography className="text-red-500 font-semibold">
                {errors.email.message}
              </Typography>
            )}
          </div>
          <div>
            <LocalizationProvider
              dateAdapter={AdapterMoment}
              localeText={
                csCZ.components.MuiLocalizationProvider.defaultProps.localeText
              }
            >
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label="Datum narození"
                  format="DD. MM. YYYY"
                  {...register("date")}
                  onChange={(date, valid) => {
                    valid.validationError
                      ? setValue("date", "")
                      : setValue("date", moment(date).format("DD. MM. YYYY"));
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
            {errors?.date?.message && (
              <Typography className="text-red-500 font-semibold">
                {errors.date.message}
              </Typography>
            )}
          </div>
          <div className="pt-2">
            <TextField
              id="outlined-basic"
              label="Heslo"
              variant="outlined"
              type="password"
              className="w-full"
              {...register("password")}
            />
            {errors?.password?.message && (
              <Typography className="text-red-500 font-semibold">
                {errors.password.message}
              </Typography>
            )}
          </div>
        </div>
        <Button variant="contained" className="mt-2" type="submit">
          Registrovat
        </Button>
      </form>
    </div>
  );
};

export default Page;
