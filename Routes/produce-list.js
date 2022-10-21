const express = require("express");
const router = express.Router();
const multer = require("multer");
const connectEnsureLogin = require('connect-ensure-login');


// importing model
const Upload = require('../Models/UploadSchema')
const Enrollment = require('../Models/UserSchema')

// image upload
var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/uploads");
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

// instantiate variable upload to store multer functionality to upload image
var upload = multer({ storage: storage });

// route for listing the produce
router.get('/producelist',async (req, res) => {
	try {
		let product = await Upload.find()
        res.render('produce-list', {products:product});
	} catch (error) {
		res.status(400).send('unable to get image')
	}
	
   
});


module.exports = router