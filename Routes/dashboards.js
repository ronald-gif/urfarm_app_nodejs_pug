const express = require('express');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login')

// creating routes

router.get('/AO-dashboard', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
    req.session.user = req.user;
    if(req.user.role == "Agriculture officer"){
        res.render("AO_dashboard")
       
    }else{
        res.send('This page is only accessed by Agriculture officer') 
        
    }
   
});
// router.get('/AO-dashboard', (req, res) => {
//     res.render("AO_dashboard")
// })

router.get('/FO-dashboard', (req, res) => {
    res.render('FO_dashboard')
});

router.get('/urban-dashboard', (req, res) => {
    res.render('urban_dashboard')
});


module.exports = router;