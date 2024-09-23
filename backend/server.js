import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectMongoDB from "./db/connectMongoDB.js";

import authRoutes from "./routes/auth.routes.js";

const PORT = process.env.PORT || 5000;

dotenv.config();
const app = express();
app.use(express.json()); //Middleware to parse req.body
app.use(express.urlencoded({ extended: true })); //Middleware to parse from data(urlencodded)
app.use(cookieParser()); //Middleware to get cookies

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  connectMongoDB();
});
