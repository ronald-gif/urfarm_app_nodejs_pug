const express = require('express');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login')

// creating routes

// router.get('/AO-dashboard', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
//     req.session.user = req.user;
//     if(req.user.role == "Agriculture officer"){
//         res.render("AO_dashboard")
       
//     }else{
//         res.send('This page is only accessed by Agriculture officer') 
        
//     }
   
// });
// router.get('/AO-dashboard', (req, res) => {
//     res.render("AO_dashboard")
// })

// router.get('/FO-dashboard', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
//     req.session.user = req.user;
//     if(req.user.role == "farmerone"){
//         res.render('FO_dashboard')
//     }else{
//         res.send('This page is only accessed by farmer one') 
//     }
    
// });

// router.get('/urban-dashboard', (req, res) => {
//     req.session.user = req.user
//     try {
//         const productOwner = await Upload
//     } catch (error) {
        
//     }
//     res.render('urban_dashboard')
// });


module.exports = router;