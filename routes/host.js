const express = require("express");

const hostControllers = require("../controllers/host");
const hostRouter = express.Router();

hostRouter
	.route("/")
	.post(hostControllers.createHost)
	.get(hostControllers.getAllHosts);

hostRouter
	.route("/:id")
	.get(hostControllers.fetchHost)
	.patch(hostControllers.updateHost)
	.delete(hostControllers.deleteHost);

module.exports = hostRouter;
