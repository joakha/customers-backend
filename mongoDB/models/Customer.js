import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    firstname: { type: String, required: true, trim: true },
    lastname: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    company: { type: mongoose.Schema.ObjectId, ref: "company" }
});

const customerModel = mongoose.model("customer", customerSchema);

export default customerModel