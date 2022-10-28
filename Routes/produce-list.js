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
router.get('/producelist', connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
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
		res.redirect('/FO-dashboard');
	} catch (error) {
		res.status(400).send('Unable to approve product');
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
		res.redirect('/urban-dashboard');
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
	try {
		let availableproduct = await Upload.find()
		res.render('index', {availableproducts:availableproduct})
	} catch (error) {
		res.status(400).send('unable to display')
	}
})

// route for approved product lis
router.get('/approvedlist',async (req, res) => {
	try {
		let product = await Upload.find().sort({$natural:-1})
        res.render('listofapprovedproducts', {products:product});
	} catch (error) {
		res.status(400).send('unable to get image')
	}
});

// route for listing the produce
router.get('/pending',async (req, res) => {
	try {
		let product = await Upload.find()
        res.render('farmerone-pending-products', {products:product});
	} catch (error) {
		res.status(400).send('unable to get image')
	}
});

router.get('/FO-dashboard', connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
	req.session.user = req.user;
	if(req.user.role == "farmerone"){
		try {
			let product = await Upload.find()
			res.render('FO_dashboard', {products:product});
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
        const productOwner = await Upload.find({fullname:req.user});
        res.render('urban_dashboard', {title: 'produce list', produces:productOwner});
    } catch (error) {
       res.status(400).send("No products found in the database") 
    }
});

// aggregations
router.get("/reports", connectEnsureLogin.ensureLoggedIn(), async(req, res) =>
{
    req.session.user = req.user;
    if(req.user.role == 'Agriculture officer'){
        try {
            let totalPoultry = await Upload.aggregate([
           { $match: { category: "poultry" } },
           { $group: { _id: "$all",
            totalQuantity: { $sum: "$qauntity" },
            totalCost: { $sum: { $multiply: [ "$unitprice", "$qauntity" ] } },
           
           }}
           ])
            let totalHort = await Upload.aggregate([
               { $match: { category: "horticulture" } },
               { $group: { _id: "$all",
                totalQuantity: { $sum: "$qauntity" },
                totalCost: { $sum: { $multiply: [ "$unitprice", "$qauntity" ]
} },            
               }}
           ])
            let totalDairy = await Upload.aggregate([
               { $match: { category: "dairy" } },
               { $group: { _id: "$all",
                totalQuantity: { $sum: "$qauntity" },
                totalCost: { $sum: { $multiply: [ "$unitprice", "$qauntity" ]
} },            
               }}
           ])
            
            console.log("Poultry collections", totalPoultry)
            console.log("Hort collections", totalHort)
            console.log("Dairy collections", totalDairy)
            res.render("report", {
            title: 'Reports',
            totalP:totalPoultry[0],
            totalH:totalHort[0],
            totalD:totalDairy[0],
           });
       } catch (error) {
            res.status(400).send("unable to find items in the database");
       }
        
   }else {
        res.send("This page is only accessed by Agric Officers")
   }
});
        
module.exports = router