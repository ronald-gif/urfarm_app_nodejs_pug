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

//get route for update product
router.get('/produce/update/:id', async (req, res) => {
	try {
		const updateProduct = await Upload.findOne({_id:req.params.id});
		res.render('productUpdate',{product:updateProduct});
	} catch (error) {
		res.status(400).send('Unable to upadate product');
	}
});

router.post('/produce/update', async (req, res) => {
	try {
		await Upload.findOneAndUpdate({_id:req.query.id}, req.body);
		res.redirect('/producelist');
	} catch (error) {
		res.status(400).send('Unable to upadate product');
	}
});

// Delete product
router.post('/produce/delete', async (req, res) => {
	try {
		await Upload.deleteOne({_id:req.body.id});
		res.redirect('back');
	} catch (error) {
		res.status(400).send('Unable to delete product');
	}
});

module.exports = router