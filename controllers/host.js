const Profile = require("../models/profileModel");
const chatRoom = require("../models/roomModel");
const mongoose = require("mongoose");

const createHost = async (req, res) => {
	const { name, email, availibility } = req.body;
	const host = new Profile({ name, email, availibility, role:"host" });
	await host.save();

	return res.status(201).json(host);
};

const getAllHosts = async (req, res) => {
	try {
		const hosts = await Profile.find({ role: "host" });
		res.status(200).json({ hosts });
	} catch (error) {
		res.status(500).json({ error: "Internal Server Error" });
	}
};


const updateHost = async (req, res) => {
	try {
		const profileId = req.params.id;
		const { availibility } = req.body;

		if (!profileId) {
			return res.status(400).json({ error: "Invalid board ID" });
    }
    
    // check for role

		const host = await Profile.findByIdAndUpdate(
			profileId,
			{ availibility },
			{ new: true }
		);

		if (!host) {
			return res.status(404).json({ error: "host not found" });
		}

		return res.status(200).json({ host });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: "Error updating the host" });
	}
};

const deleteHost = async (req, res) => {
	try {
		const profileId = req.params.id;

		// Check if the provided ID is valid (you can add more validation here)
		if (!profileId) {
			return res.status(400).json({ error: "Invalid board ID" });
		}

		const deletedHost = await Profile.findByIdAndDelete(profileId);

		if (!deletedHost) {
			return res.status(404).json({ error: "Host not found" });
		}

		return res.status(200).json({ message: "Host deleted successfully" });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: "Error deleting the Host" });
	}
};

const fetchHost = async (req, res) => {
	try {
		const {hostId} = req.params.id;
    const host = await Profile.find({ _id: hostId });
    const chatRooms = await chatRoom.find({host: hostId})
    
		if (!hostId) {
			return res.status(404).json({ error: "Invalid host ID" });
    }
    
		return res.status(200).json({ host, chatRooms });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: "Error fetching the host" });
	}
};


module.exports = {
	createHost,
	getAllHosts,
	updateHost,
	deleteHost,
	fetchHost,
};

