import { Schema } from "mongoose";

export type UserDB = {
  name: string;
  job: string;
  _id: Schema.Types.ObjectId;
};

export type Inputs = { name: String; job: String } | {};
