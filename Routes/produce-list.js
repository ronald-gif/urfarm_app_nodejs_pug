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
// products under inspection
// router.get('/produce/inspect/:id', async (req, res) => {
// 	try {
// 		const inspectProduct = await Upload.findOne({_id:req.params.id});
// 		res.render('inspect', {product:inspectProduct});
		
// 	} catch (error) {
// 		res.status(400).send('Unable to insepct product');
// 	}
// });
// router.post('/produce/inspect', async (req, res) => {
// 	try {
// 		await Upload.findOneAndUpdate({_id:req.query.id}, req.body);
// 		res.redirect('/FO-dashboard');
// 	} catch (error) {
// 		res.status(400).send('Unable to inspect product');
// 	}
// });
// router.get('/inspected', connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
// 	req.session.user = req.user;
// 	try {
// 		let product = await Upload.find()
// 		console.log('new user',req.session.user);
//         res.render('listofinspected', {products:product,currentuser:req.user});
// 	} catch (error) {
// 		res.status(400).send('unable to inspect product')
// 	}
// });
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
// router.get('/availableproducts',async (req, res) => {
// 	try {
// 		let product = await Upload.find().sort({$natural:-1})
//         res.render('show-avaible-products', {products:product});
// 	} catch (error) {
// 		res.status(400).send('unable to display products')
// 	}
// });
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

router.get('/FO-dashboard', connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
	req.session.user = req.user;
	if(req.user.role == "farmerone"){
		try {
			let product = await Upload.find()
			let totalfarmerones = await Enrollment.countDocuments({role: "farmerone"})
			res.render('FO_dashboard', {products:product, currentuser:req.user});
			totalfarmerones
			console.log(totalfarmerones);
		} catch (error) {
			res.status(400).send('unable to get image')
		}
	}else{
		res.send('This page is only accessed by Farmer ones')
	}
	
});


router.get('/bookings', connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
	req.session.user = req.user;
	if(req.user.role == "farmerone"){
		try {
			let totalorders = await Order.countDocuments()
			res.render('bookingandorders', {currentuser:req.user,totalorders});
		} catch (error) {
			res.status(400).send('unable to get image')
		}
	}else{
		res.send('This page is only accessed by Farmer ones')
	}
	
});

router.get('/urban-dashboard', connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
    req.session.user = req.user
    try {
        const productOwner = await Upload.find();
        res.render('urban_dashboard', {produces:productOwner,currentuser:req.user});
    } catch (error) {
       res.status(400).send("No products found in the database") 
    }
});
// aggregations
router.get("/AO-dashboard", connectEnsureLogin.ensureLoggedIn(), async(req, res) =>
{
    req.session.user = req.user;
    if(req.user.role == 'Agriculture officer'){
        try {
            let totalPoultry = await Upload.aggregate([
           { $match: { category: "poultry" } },
           { $group: { _id: "$all", totalQuantity: { $sum: "$qauntity" }, totalCost: { $sum: { $multiply: [ "$unitprice", "$qauntity" ] } },
           
           }}
           ])
            let totalHorticulture = await Upload.aggregate([
               { $match: { category: "horticulture" } },
               { $group: { _id: "$all", totalQuantity: { $sum: "$qauntity" }, totalCost: { $sum: { $multiply: [ "$unitprice", "$qauntity" ]
} },            
               }}
           ])
            let totalDairy = await Upload.aggregate([
               { $match: { category: "dairy" } },
               { $group: { _id: "$all", totalQuantity: { $sum: "$qauntity" }, totalCost: { $sum: { $multiply: [ "$unitprice", "$qauntity" ]
} },            
               }}
           ])
            
		   let farmerOnes = await Enrollment.countDocuments({role: "farmerone"})
		   let urbanFarmers = await Enrollment.countDocuments({role: "Urban farmer"})
		   let customers = await Enrollment.countDocuments({role: "customer"})
            res.render("AO_dashboard", { currentuser:req.user,
            totalP:totalPoultry[0],
            totalH:totalHorticulture[0],
            totalD:totalDairy[0],
			farmerOnes,
			urbanFarmers,
			customers
           });
       } catch (error) {
            res.status(400).send("unable to find items in the database");
       }
        
   }else {
        res.send("This page is only accessed by Agric Officers")
   }
});
        
module.exports = router