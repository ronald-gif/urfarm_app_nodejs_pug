const express = require('express');
const router = express.Router();

// importing the model
const Enrollment = require('../Models/UserSchema.js')

// creating routes
router.get('/farmerone', (req, res) => {
    res.render('farmerone')
});

router.post('/farmerone', async (req, res) => {
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

router.get('/farmeronelist', async (req, res) => {
    try {
        let farmerone = await Enrollment.find({role: "farmerone"});
        res.render('farmeronelist', {farmerones:farmerone})
    } catch (error) {
        res.status(404).send("we can not process your request now")
        
    }
   
});

router.get('/farmerone/update/:id', async (req, res) => {
	try {
		const updateFarmerone = await Enrollment.findOne({_id:req.params.id});
		res.render('farmerone-update',{farmerone:updateFarmerone});

	} catch (error) {
		res.status(400).send('Unable to upadate farmerone');
	}
});

router.post('/farmerone/update', async (req, res) => {
	try {
		await Enrollment.findOneAndUpdate({_id:req.query.id}, req.body);
		res.redirect('/farmeronelist');
	} catch (error) {
		res.status(400).send('Unable to upadate farmerone');
	}
});

// router.get('/farmerone/update/:id', async (req, res) => {
// 	try {
// 		const updateFarmerone = await Enrollment.findOne({_id:req.params.id});
// 		res.render('farmerone-update',{farmerone:updateFarmerone});

// 	} catch (error) {
// 		res.status(400).send('Unable to upadate farmerone');
// 	}
// });

// router.post('/farmerone/update', async (req, res) => {
// 	try {
// 		await Enrollment.findOneAndUpdate({_id:req.query.id}, req.body);
// 		res.redirect('/farmeronelist');
// 	} catch (error) {
// 		res.status(400).send('Unable to upadate farmerone');
// 	}
// });



module.exports = router