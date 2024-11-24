import express from "express"
import cors from "cors"
import connectToDB from "./mongoDB/connectToDB.js";
import dotenv from "dotenv";
import customerRouter from "./routes/customerRouter.js";

dotenv.config()
const serverPort = process.env.PORT;
const mongoDBURL = process.env.MONGODB_URL;

const customerApp = express();

const corsOptions = {
    origin: ["http://localhost:5173"]
}

customerApp.use(cors(corsOptions))

connectToDB(mongoDBURL)

customerApp.use(customerRouter)

customerApp.listen(serverPort, () => console.log(`Backend running and port is ${serverPort}`));