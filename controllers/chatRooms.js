const Profile = require("../models/profileModel");
const Room = require("../models/roomModel");
const mongoose = require("mongoose");

const createChatRoom = async (req, res) => {
	const { hostId, userId } = req.body;
	const chatRoom = new Room({ hostId, userId });
	await chatRoom.save();
	return res.status(201).json(chatRoom);
};


const fetchChatRoom = async (req, res) => {
	try {
		const roomId = req.params.id;
    const chatRoom = await Room.find({ _id: roomId });
		if (!roomId) {
			return res.status(404).json({ error: "Invalid Room ID" });
		}
		return res.status(200).json({ chatRoom });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: "Error fetching the room" });
	}
};

module.exports = {createChatRoom, fetchChatRoom};
