// models/profile.js
const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
	name: {
		type: String,
		required: function () {
			// Availability is relevant only for hosts
			return this.role === "host";
		},
	},
	email: {
		type: String,
		unique: true,
		required: function () {
			// Availability is relevant only for hosts
			return this.role === "host";
		},
	},
	availability: {
		type: Boolean,
		required: function () {
			// Availability is relevant only for hosts
			return this.role === "host";
		},
	},
	// password: {
	// 	type: String,
	// 	required: function () {
	// 		// Password is required only if the role is 'host'
	// 		return this.role === "host";
	// 	},
	// },
	role: {
		type: String,
		enum: ["user", "host"],
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
