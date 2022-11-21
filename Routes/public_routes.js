const express = require('express');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login');

// importing model
const Upload = require('../Models/UploadSchema')
const Enrollment = require('../Models/UserSchema')
const Order = require('../Models/Orders')
const Public =require('../Models/publicSchema')

router.get('/home', async (req, res) => {
	req.session.user = req.user
	try {
		let availableproduct = await Upload.find()
		let currentuser = await Enrollment.find()
		res.render('index', {availableproducts:availableproduct, currentuser:req.user, loggedinuser:currentuser})
	} catch (error) {
		res.status(400).send('unable to display')
	}
})

router.get('/sales', connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
	req.session.user = req.user
	try {
		let availableproduct = await Upload.find()
		let currentuser = await Enrollment.find()
		let productOwner = await Enrollment.find()
		res.render('salesPage', {availableproducts:availableproduct, loggedinuser:productOwner, currentuser:req.user})
	} catch (error) {
		res.status(400).send('unable to display')
	}
})


router.get('/about-us', async (req, res) => {
	req.session.user = req.user
	try {
		let currentuser = await Enrollment.find()
		res.render('about-us', {currentuser:req.user, loggedinuser:currentuser})
	} catch (error) {
		res.status(400).send('unable to display')
	}
})

router.get('/contact-us', async (req, res) => {
	req.session.user = req.user
	try {
		let currentuser = await Enrollment.find()
		let currentuserpublic = await Public.find()
		res.render('contact-us', {currentuser:req.user, loggedinuser:currentuser})
	} catch (error) {
		res.status(400).send('unable to display')
	}
})

router.post('/contact-us', async (req, res) => {
    console.log(req.body);
    try {
        const user = new Public(req.body);
            await user.save()
			res.redirect('/contact-us')
    } catch (error) {
        res.status(404).send('sorry we are fixing something');
        console.log(error);
    }
   
});

router.get('/how-to-buy', async (req, res) => {
	req.session.user = req.user
	try {
		let currentuser = await Enrollment.find()
		res.render('how-to-buy', {currentuser:req.user, loggedinuser:currentuser})
	} catch (error) {
		res.status(400).send('unable to display')
	}
})

router.get('/payment', async (req, res) => {
	req.session.user = req.user
	try {
		let currentuser = await Enrollment.find()
		res.render('payment', {currentuser:req.user, loggedinuser:currentuser})
	} catch (error) {
		res.status(400).send('unable to display')
	}
})

router.get('/terms-and-conditions', async (req, res) => {
	req.session.user = req.user
	try {
		let currentuser = await Enrollment.find()
		res.render('termsandcondition', {currentuser:req.user, loggedinuser:currentuser})
	} catch (error) {
		res.status(400).send('unable to display')
	}
})

router.get('/dairy', async (req, res) => {
	req.session.user = req.user
	try {
		let availableproduct = await Upload.find()
		let currentuser = await Enrollment.find()
		res.render('dairy', {availableproducts:availableproduct, currentuser:req.user, loggedinuser:currentuser})
	} catch (error) {
		res.status(400).send('unable to display')
	}
})
router.get('/horticulture', async (req, res) => {
	req.session.user = req.user
	try {
		let availableproduct = await Upload.find()
		let currentuser = await Enrollment.find()
		res.render('horticulture', {availableproducts:availableproduct, currentuser:req.user, loggedinuser:currentuser})
	} catch (error) {
		res.status(400).send('unable to display')
	}
})
router.get('/poultry', async (req, res) => {
	req.session.user = req.user
	try {
		let availableproduct = await Upload.find()
		let currentuser = await Enrollment.find()
		res.render('poultry', {availableproducts:availableproduct, currentuser:req.user, loggedinuser:currentuser})
	} catch (error) {
		res.status(400).send('unable to display')
	}
})

module.exports = router