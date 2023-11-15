// models/host.js
const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
	{
    host: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Profile",
			required: true,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Profile",
			required: true,
		}
	},
	{ timestamps: true }
);

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
