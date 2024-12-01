import express from "express";
import { validateUserLoginPost } from "../middleware/validateLogin.js";
import { userLogin } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.route("/")
    .post(validateUserLoginPost, userLogin)

export default userRouter