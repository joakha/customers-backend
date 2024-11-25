import express from "express";
import { getCustomers, postCustomer, editCustomer, deleteCustomer } from "../controllers/customerController.js";
import validateCustomerInfo from "../middleware/validateCustomerInfo.js";

const customerRouter = express.Router();

customerRouter.route("/")
    .get(getCustomers)
    .post(postCustomer)
    .put(validateCustomerInfo, editCustomer)
    .delete(deleteCustomer)

export default customerRouter