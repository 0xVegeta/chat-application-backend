const express = require("express");
const path = require('path')
const http = require('http')
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config({ path: `.env` });
const { connectDB } = require("./config/db");
const apiRouters = require("./routes/api");
const cors = require("cors");
connectDB();

const expressApp = express();
const server = http.createServer(expressApp);

expressApp.use(express.static(path.join(__dirname, "public")));
expressApp.use(cors());
expressApp.use(bodyParser.json());
expressApp.get("/hi", (req, res) => {
	res.json({ message: "Yayy you're at the genesis of chat app" });
});

expressApp.use("/", apiRouters);

module.exports = {
	app: expressApp,
};
