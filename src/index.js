import express from "express";
const app = express();
import cors from "cors";

app.use(cors());
app.use(express.json());

app.listen(3001, () => {
    console.log("server is running on port 3001")
});