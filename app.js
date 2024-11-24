import express from "express"
import cors from "cors"
import connectToDB from "./mongoDB/connectToDB.js";
import dotenv from "dotenv";
import customerRouter from "./routes/customerRouter.js";

//making sure environment variables load properly
dotenv.config()
const serverPort = process.env.PORT;
const mongoDBURL = process.env.MONGODB_URL;
const frontendURL = process.env.FRONTEND_URL;

//express application
const customerApp = express();

//need to use json middleware so backend can handle requests with json body
customerApp.use(express.json());

//setup cors so frontend can communicate with this application
const corsOptions = {
    origin: [frontendURL]
};

customerApp.use(cors(corsOptions));

//setup connection to mongodb
connectToDB(mongoDBURL);

//setup routers
customerApp.use("/customers", customerRouter);

//finally run app
customerApp.listen(serverPort, () => console.log(`Backend running and port is ${serverPort}`));