import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  date: {
    type: String,
  },
  password: {
    type: String,
  },
});

const User = models?.User || model("User", userSchema);
export default User;
