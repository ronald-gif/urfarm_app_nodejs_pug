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

// Creating route that enables urban farmers to upload a product
router.get('/upload', async (req, res) => {
	let urbanFarmerList = await Enrollment.find({role: 'Urban farmer'})
    res.render('urbanfarmer_upload',{urbanFarmers:urbanFarmerList});
});

// route for uploading a product only when someone has logged in
// router.get('/upload', (req, res) => {
// 	console.log('this is the current user', req.session.user)
//     res.render('urbanfarmer_upload',{currentUser: req.session.user});
// });

router.post('/upload', connectEnsureLogin.ensureLoggedIn(), upload.single('uploadimage'), async (req, res) => {
    console.log(req.body)
	try {
		const product = new Upload(req.body);
		product.uploadimage = req.file.path
		await product.save();
		res.redirect('/urban-dashboard')
	} catch (error) {
		res.status(400).send('Unable to upload image');
		console.log(error)
	}
});

// route for listing the produce
// router.get('/producelist',async (req, res) => {
// 	try {
// 		let product = await Upload
// 	} catch (error) {
		
// 	}
	
//     res.render('produce-list');
// });


// router.get("/upload", async (req, res) => {
// 	const urbanFarmerList = await Enrollment.find({ role: "farmerone" });
// 	res.render("produce", { urbanfarmers: urbanFarmerList });
// });

// router.get("/uploadproduce", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
	
// 	res.render("produce", {currentUser: req.session.user});
// });

// router.post("/upload", connectEnsureLogin.ensureLoggedIn(), upload.single("uploadimage"), async (req, res) => {
// 	console.log(req.body);
// 	try {
// 		const produce = new produceUpload(req.body);
// 		produce.uploadimage = req.file.path;
// 		await produce.save();
// 		res.redirect("/upload");
// 	} catch (error) {
// 		res.status(400).send("Can't save this image");
// 		console.log(error);
// 	}
// });

// router.get("/upload", async (req, res) => {
// 	const urbanFarmerList = await Enrollment.find({ role: "farmerone" });
// 	res.render("produce", { urbanfarmers: urbanFarmerList });
// 	try {
// 		let products = await produce.find()
// 		res.render('Upload', {products:product})
// 	} catch (error) {
		
// 	}
// });
module.exports = router