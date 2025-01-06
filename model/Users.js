import mongoose from "mongoose";

const users = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const user = mongoose.model("User", users);
export default user;
