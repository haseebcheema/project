const express = require("express");
const app = express();

require("dotenv").config();

const connectMongoDB = require("./config/dbMongo.js");
const { connectPostgresDB } = require("./config/dbPostgres.js");

const cors = require("cors");
const authRoutes = require("./routes/auth.js");

const PORT = process.env.APP_PORT || 3000;

app.use(cors());
app.use(express.json());

connectMongoDB();
// connectPostgresDB();

app.use("/auth", authRoutes);

app.listen(PORT, () => console.log("server is running"));
