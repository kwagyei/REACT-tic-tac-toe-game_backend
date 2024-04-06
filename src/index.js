import express, { json } from "express";
import cors from "cors";
import { StreamChat } from "stream-chat";
import { v4 as uuidv4 } from "uuid"
import bcrypt from "bcrypt";

const app = express();

app.use(cors());
app.use(express.json());

const api_key = "ray2f6rnk633";
const api_secret = "9kaj4hpdq8hxdcburkj222pzhgjspxgq3rbqtpauttch5b34v76x56rngmvjmnza";
const serverClient = StreamChat.getInstance(api_key, api_secret);


app.post("/signup", async(req, res) => {

    try {
        const { firstName, lastName, userName, password } = req.body;
        const userId = uuidv4();
        const hashedPassword = await bcrypt.hash(password, 10);
        const token = serverClient.createToken(userId);
        res.json({ token, userId, firstName, lastName, userName, hashedPassword });

    } catch (error) {
        res,
        json(error);

    }

});

app.post("/login", (req, res) => {
    const { userName, password } = req.body;
    const { users } = serverClient.queryUsers({})





});

app.listen(3001, () => {
    console.log("server is running on port 3001");
});