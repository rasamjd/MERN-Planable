import mongoose from "mongoose"

const Schema = mongoose.Schema;

const user = new Schema({
  code: Number,
  username: String,
  day: String,
  num1: Number,
  num2: Number
});

const User = mongoose.model("User", user);

export default User;