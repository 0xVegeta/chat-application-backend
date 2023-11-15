
const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
	{
		room: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Room",
			required: true,
		},
		sender: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Room",
			required: true,
		},
		message: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);


const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
