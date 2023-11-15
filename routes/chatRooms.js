const express = require("express");

const {createChatRoom, fetchChatRoom} = require("../controllers/chatRooms");
const chatRoomRouter = express.Router();

chatRoomRouter.route("/").post(createChatRoom);

chatRoomRouter.route("/:roomId").get(fetchChatRoom);

module.exports = chatRoomRouter;
