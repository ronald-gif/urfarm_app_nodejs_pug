const express = require('express');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login')

const Enrollment = require('../Models/UserSchema')


// creating routes
router.get('/public', (req, res) => {
    res.render('normaluser')
})

router.post('/public', async (req, res) => {
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


module.exports = router