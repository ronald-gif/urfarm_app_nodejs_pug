const express = require('express');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login')

// importing model
const Enrollment = require('../Models/UserSchema')
const Order = require('../Models/Orders')
const Public =require('../Models/publicSchema')
const Upload = require('../Models/UploadSchema')
// Ccreating routes

router.get('/AO', (req, res) => {
    res.render('AO');
});

router.post('/AO', async (req, res) => {
    console.log(req.body);
    try {
        const user = new Enrollment(req.body);
        let uniquenumber = await Enrollment.findOne({uniquenumber:req.body.uniquenumber});
        if(uniquenumber) {
            return res.status(404).send('This number already exists');
        }else{
            await Enrollment.register(user, req.body.password, (error) => {
                if(error){
                    throw error
                }
                res.redirect('/login')
                // res.send('Registration succussfull')
            })
        }
       
    } catch (error) {
        res.status(404).send('sorry we are fixing something');
        console.log(error);
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
		   let totalorders = await Order.countDocuments()
            res.render("AO_dashboard", { currentuser:req.user,
            totalP:totalPoultry[0],
            totalH:totalHorticulture[0],
            totalD:totalDairy[0],
			farmerOnes,
			urbanFarmers,
			customers,
			totalorders
           });
       } catch (error) {
            res.status(400).send("unable to find items in the database");
       }
        
   }else {
        res.send("This page is only accessed by Agric Officers")
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

// router.get('/AO-dashboard', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
//     req.session.user = req.user;
//     if(req.user.role == "Agriculture officer"){
//         res.render("AO_dashboard")
       
//     }else{
//         res.send('This page is only accessed by Agriculture officer') 
        
//     }
   
// });

module.exports = router