const methodOverride = require("method-override");
const express = require("express");
const passport = require('passport');
const db = require('../models');
const middleware = require('../config/middleware');
const Drive = require('../apis/drive.js');

module.exports = function(app) {

	//call new router object
	const router = express.Router();
	
	router.use(methodOverride("_method"));

	router.use(middleware.authenticated);

	router.get("/api/drive", function(req, res, next) {
		console.log('getting drive data'); next(null);
		}, function(req, res, next) {
		Drive.listAllDriveFiles(req, res, req.user)
	});

	app.use("/", router);

}

//******** GOOGLE DRIVE API FUNCTIONS ********//

