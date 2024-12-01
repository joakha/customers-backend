import express from "express";
import { validateCustomerDelete, validateCustomerPost, validateCustomerPut, validatePhoneNumberFormat } from "../middleware/validateCustomer.js";
import { getCustomers, postCustomer, editCustomer, deleteCustomer } from "../controllers/customerController.js";
import { validateJWT } from "../middleware/validateLogin.js";

const customerRouter = express.Router();

customerRouter.route("/")
    .get(getCustomers)
    .post(validateJWT, validateCustomerPost, validatePhoneNumberFormat, postCustomer)
    .put(validateCustomerPut, validatePhoneNumberFormat, editCustomer)
    .delete(validateCustomerDelete, deleteCustomer)

export default customerRouter