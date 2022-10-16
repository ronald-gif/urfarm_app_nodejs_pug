const express = require('express');
const router = express.Router();


// creating routes
router.get('/home', (req, res) => {
    res.render('index');
});

router.get('/about-us', (req, res) => {
    res.render('about-us');
});

router.get('/AO', (req, res) => {
    res.render('AO');
});

router.post('/AO', (req, res) => {
    console.log(req.body);
    res.redirect('/index')
});

router.get('/contact-us', (req, res) => {
    res.render('contact-us')
})

router.get('/dairy-products', (req, res) => {
    res.render('dairy')
});

router.get('/farmerone', (req, res) => {
    res.render('farmerone')
});

router.post('/farmerone', (req, res) => {
    console.log(req.body);
    res.redirect('/index')
});

router.get('/horticulture', (req, res) => {
    res.render('horticulture')
});

router.get('/how-to-buy', (req, res) => {
    res.render('how-to-buy')
});

router.get('/public', (req, res) => {
    res.render('normaluser')
})

router.post('/public', (req, res) => {
    // console.log(req.body);
    res.redirect('/public/')
});

router.get('/payment', (req, res) => {
    res.render('payment')
});

router.get('/poultry', (req, res) => {
    res.render('poultry')
});

router.get('/terms-and-conditions', (req, res) => {
    res.render('termsandcondition')
});

router.get('/urban-farmer', (req, res) => {
    res.render('urban-farmer')
});

router.post('/urban-farmer', (req, res) => {
    console.log(req.body);
    res.redirect('/index')
});



module.exports = router