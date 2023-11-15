const express = require("express");
const apiRouters = express.Router();

apiRouters.use("/hosts", require("./host"));
apiRouters.use('/chat-rroms', require('./chatRooms'))

module.exports = apiRouters;
