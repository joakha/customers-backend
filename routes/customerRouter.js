import express from "express";
import { validateCustomerPost, validateCustomerPut, validatePhoneNumberFormat } from "../middleware/validateCustomer.js";
import { getCustomers, postCustomer, editCustomer, deleteCustomer } from "../controllers/customerController.js";

const customerRouter = express.Router();

customerRouter.route("/")
    .get(getCustomers)
    .post(validateCustomerPost, validatePhoneNumberFormat, postCustomer)
    .put(validateCustomerPut, validatePhoneNumberFormat, editCustomer)
    .delete(deleteCustomer)

export default customerRouter