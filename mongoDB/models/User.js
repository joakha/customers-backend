import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true }
});

const userModel = mongoose.model("user", userSchema);

export default userModel