const express = require('express');
const router = express.Router();
const passport = require('passport')

router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/login', passport.authenticate('local', {failureRedirect: "/login"}), (req, res) => {
    req.session.user = req.user;
    console.log("This is the user:", req.session.user);
    if(req.user.role == "Agriculture officer"){
        res.redirect('/AO-dashboard')
    }else if(req.user.role == "farmerone"){
        res.redirect('/FO-dashboard')
    }else if(req.user.role == "Urban farmer"){
        res.redirect('/urban-dashboard')
    }else{
        res.send('Your session has ended or your are not a registered user')
    }
    // res.redirect('/upload')
});

router.post('/logout', (req, res) => {
    if(req.session){
        req.session.destroy(function(error){
            if(error){
                res.status(400).send('Unable to logout')
            }else{
                return res.redirect('/login')
            }
        })
    }
   
});


module.exports = router