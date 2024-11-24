import express from "express"
import connectToDB from "./mongoDB/connectToDB.js";
import dotenv from "dotenv";

dotenv.config()

const customerApp = express();
const serverPort = process.env.PORT;
const mongoDBURL = process.env.MONGODB_URL;

connectToDB(mongoDBURL)

customerApp.listen(serverPort, () => console.log(`Backend running and port is ${serverPort}`));