import userModel from "../mongoDB/models/User.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const validateUserLoginPost = async (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            error: "request must include all user info!"
        });
    }

    const toBeLoggedInUser = await userModel.findOne({ username });

    if (!toBeLoggedInUser) return res.status(401).json({ error: "Invalid username or password!" });

    const userPasswordIsCorrect = await bcrypt.compare(password, toBeLoggedInUser.password);

    if (!userPasswordIsCorrect) return res.status(401).json({ error: "Invalid username or password!" });

    next();
}

const validateJWT = async (req, res, next) => {
    const authToken = req.headers.authorization.split(" ")[1];

    if(!authToken) return res.status(400).json({error: "request did not include token!"});

    const verifiedAndDecodedJWT = jwt.verify(authToken, process.env.JWT_TOKEN_SECRET);

    const JWtUser = await userModel.findById(verifiedAndDecodedJWT.userId);

    if (!JWtUser) return res.status(400).json({error: "Invalid token!"});

    console.log(`Request made by ${JWtUser.username}`);

    next();
}

export { validateUserLoginPost, validateJWT }