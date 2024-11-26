import express from "express";
import { validateCustomerPost, validateCustomerPut} from "../middleware/validateCustomer.js";
import { getCustomers, postCustomer, editCustomer, deleteCustomer } from "../controllers/customerController.js";

const customerRouter = express.Router();

customerRouter.route("/")
    .get(getCustomers)
    .post(validateCustomerPost, postCustomer)
    .put(validateCustomerPut, editCustomer)
    .delete(deleteCustomer)

export default customerRouter