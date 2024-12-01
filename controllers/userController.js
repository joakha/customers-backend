import userModel from "../mongoDB/models/User.js";
import jwt from "jsonwebtoken"

const userLogin = async (req, res) => {
    try {
        const { username } = req.body;

        const toBeLoggedInUser = await userModel.findOne({ username });

        const userToken = jwt.sign({
            userId: toBeLoggedInUser._id,
            username: toBeLoggedInUser.username
        }, process.env.JWT_TOKEN_SECRET)

        res.status(200).json({
            loginData: {
                username: toBeLoggedInUser.username,
                jwt: userToken
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error creating JWT token!' });
    }
}

export { userLogin }