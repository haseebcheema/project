const express = require('express');
const connectMongoDB = require('./config/dbMongo.js');
const authRoutes = require('./routes/auth.js');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.APP_PORT || 3000;

app.use(express.json());

connectMongoDB();

app.use('/auth', authRoutes)

app.listen(PORT, () => console.log('server is running'));
