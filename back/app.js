const express = require('express');
const app = express();
app.disable('x-powered-by');
const { Sequelize } = require('sequelize');

const db = require('./model');
require('dotenv').config();
const cors = require('cors');
const path = require('path')

// const emailRoute = require("./routes/email")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/post")
const helmet = require('helmet');

db.sequelize.sync();
app.use(express.json());
app.use(cors({
	origin: ['https://www.hugomartin.lol'],
}));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "same-origin" }));


app.use("/api/images", express.static(path.join(__dirname, "images")));
app.use("/api",  postRoute);
app.use("/api",  authRoute);
// app.use("/api",  authRoute);
// app.use("/api", emailRoute);



module.exports = app; 
