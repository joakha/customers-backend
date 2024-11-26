import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true }
});

const companyModel = mongoose.model("company", companySchema);

export default companyModel