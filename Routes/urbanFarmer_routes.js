const express = require('express');
// const router = require('./farmerOne_routes');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login')

// importing model
const Enrollment = require('../Models/UserSchema')
const Upload = require('../Models/UploadSchema')
const Order = require('../Models/Orders')
// Ccreating routes

router.get('/urbanFarmer', (req, res) => {
    res.render('urban-farmer');
});

router.post('/urbanFarmer', async (req, res) => {
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




router.get('/urbanfarmer', (req, res) => {
    res.render('demo');
});

router.post('/urbanfarmer', async (req, res) => {
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
                res.redirect('/FO-dashboard')
                // res.send('Registration succussfull')
            })
        }
       
    } catch (error) {
        res.status(404).send('sorry we are fixing something');
        console.log(error);
    }
   
});

router.get('/urbanfarmerlist', connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
    req.session.user = req.user
    try {
        let urbanfarmerlist = await Enrollment.find({role: "Urban farmer"});
        res.render('urbanfarmerlist', {urbanfarmers:urbanfarmerlist, currentuser:req.user})
    } catch (error) {
        res.status(404).send("we can not process your request now")
        
    }
   
});


router.get('/urbanfarmerdetails', connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
    req.session.user = req.user
    try {
        let urbanfarmerlist = await Enrollment.find({role: "Urban farmer"});
        res.render('urbanfarmers-details', {urbanfarmers:urbanfarmerlist, currentuser:req.user})
    } catch (error) {
        res.status(404).send("we can not process your request now")
        
    }
   
});

router.get('/orders', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
    res.render('orders')
});

router.post('/orders', connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
    console.log(req.body);
    try {
        const orders = new Order(req.body);
        // let productname = await Order.find();
            await orders.save()
                res.redirect('back')
    }catch (error) {
        res.status(404).send('sorry we are fixing something');
        console.log(error);
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


module.exports = router