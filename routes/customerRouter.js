import express from "express";
import { getCustomers, postCustomer, editCustomer, deleteCustomer } from "../controllers/customerController.js";

const customerRouter = express.Router();

customerRouter.route("/")
    .get(getCustomers)
    .post(postCustomer)
    .put(editCustomer)
    .delete(deleteCustomer)

export default customerRouter