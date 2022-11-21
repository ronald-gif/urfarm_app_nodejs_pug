const express = require("express");
const router = express.Router();
const multer = require("multer");
const connectEnsureLogin = require('connect-ensure-login');
// importing model
const Upload = require('../Models/UploadSchema')
const Enrollment = require('../Models/UserSchema')
const Order = require('../Models/Orders')
const Public =require('../Models/publicSchema')
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
router.get('/producelist', connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
	req.session.user = req.user
	try {
		let product = await Upload.find()
        res.render('produce-list', {products:product, currentuser:req.user});
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
// approved and pending
router.get('/produce/approved/:id', async (req, res) => {
	try {
		const updateProduct = await Upload.findOne({_id:req.params.id});
		res.render('approved', {product:updateProduct});
		
	} catch (error) {
		res.status(400).send('Unable to approve product');
	}
});
router.post('/produce/approved', async (req, res) => {
	try {
		await Upload.findOneAndUpdate({_id:req.query.id}, req.body);
		res.redirect('/pending');
	} catch (error) {
		res.status(400).send('Unable to approve product');
	}
});

// appointment routes
router.get('/farmers/appointed/:id', async (req, res) => {
	try {
		const appointment = await Enrollment.findOne({_id:req.params.id});
		res.render('appointed', {farmerone:appointment});
		
	} catch (error) {
		res.status(400).send('Unable to appoint farmerone');
	}
});
router.post('/farmers/appointed', async (req, res) => {
	try {
		await Enrollment.findOneAndUpdate({_id:req.query.id}, req.body);
		res.redirect('/appointed');
	} catch (error) {
		res.status(400).send('Unable to appoint farmerone');
	}
});
router.get('/appointed', async (req, res) => {
	try {
		let farmerone = await Enrollment.find()
        res.render('listofappointed', {farmers:farmerone});
	} catch (error) {
		res.status(400).send('cant process your request at the moment')
	}
});
router.get('/rejected', async (req, res) => {
	try {
		let farmerone = await Enrollment.find()
        res.render('listofrejected', {farmers:farmerone});
	} catch (error) {
		res.status(400).send('cant process your request at the moment')
	}
});
// available products
router.get('/produce/availability/:id', async (req, res) => {
	try {
		const saleProduct = await Upload.findOne({_id:req.params.id});
		res.render('availability', {product:saleProduct});
		
	} catch (error) {
		res.status(400).send('Unable to approve product');
	}
});
router.post('/produce/availability', async (req, res) => {
	try {
		await Upload.findOneAndUpdate({_id:req.query.id}, req.body);
		res.redirect('/approvedproducts');
	} catch (error) {
		res.status(400).send('Unable to approve product');
	}
});

// route for approved product list
router.get('/approvedlist', connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
	req.session.user = req.user
	if(req.user.role == "farmerone"){
		try {
			let product = await Upload.find()
			res.render('listofapprovedproducts', {products:product, currentuser:req.user});
		} catch (error) {
			res.status(400).send('cant process your request at the moment')
		}
	}else{
		res.send('This page is only accessed by Farmer ones')
	}
	
});
router.get('/approvedproducts', connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
	req.session.user = req.user
	if(req.user.role == "Urban farmer"){
		try {
			let product = await Upload.find()
			res.render('urban-approved-products', {products:product, currentuser:req.user});
		} catch (error) {
			res.status(400).send('cant process your request at the moment')
		}
	}else{
		res.send('This page is only accessed by urban farmers')
	}
	
});
// route for listing the produce
router.get('/pending', connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
	req.session.user = req.user;
	try {
		let product = await Upload.find()
		console.log('new user',req.session.user);
        res.render('farmerone-pending-products', {products:product,currentuser:req.user});
	} catch (error) {
		res.status(400).send('unable to get image')
	}
});

        
module.exports = router