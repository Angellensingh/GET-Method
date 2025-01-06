import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const user = mongoose.model("User", dataSchema);
export default user;