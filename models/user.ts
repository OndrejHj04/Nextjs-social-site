import { Schema, model, models } from "mongoose";

export type IUser = {
  name: String;
  job: String;
};

const userSchema = new Schema<IUser>({
  name: {
    type: String,
  },
  job: {
    type: String,
  },
});

const User = models.User || model("User", userSchema);
export default User;
