import express from "express";
import { getCompanies } from "../controllers/companyController.js";

const companyRouter = express.Router();

companyRouter.route("/")
    .get(getCompanies)

export default companyRouter