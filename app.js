import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
const app = express();
import { join } from "path";
import router from "./routes/web.js";
//config env data/parameters
dotenv.config();
const PORT = process.env.PORT

//Calling DATABASE connection string for MongoDB
const DATABASE_URI = process.env.DATABASE_URI
connectDB(DATABASE_URI);

//configuring/setting static folder
app.use(express.static(join(process.cwd(), "public")));

//configuring view engine
app.set("view engine", "ejs");
app.set("views", join(process.cwd(), "views"));

// Middleware
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

//base routing for all controllers
app.use("/app", router);
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

