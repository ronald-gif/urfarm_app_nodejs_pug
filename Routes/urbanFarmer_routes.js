const express = require('express');
// const router = require('./farmerOne_routes');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login')

// importing model
const Enrollment = require('../Models/UserSchema')
const Upload = require('../Models/UploadSchema')
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
   
})



// router.get('/urban-dashboard',  (req, res) => {
//         res.render('urban_dashboard');   
// });

// router.get('/urbanfarmerlist', async (req, res) => {
//     try {
//         let items = await Enrollment.find({role: "Urban farmer"});
//         res.render('urbanfarmerlist', {urbanfarmers:items})
//     } catch (error) {
//         res.status(404).send("we can not process your request now")
        
//     }
   
// })


module.exports = router