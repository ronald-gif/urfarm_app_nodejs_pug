const express = require('express');
const router = express.Router();

// creating routes

router.get('/horticulture', (req, res) => {
    res.render('horticulture')
});

router.get('/dairy-products', (req, res) => {
    res.render('dairy')
});

router.get('/poultry', (req, res) => {
    res.render('poultry')
});


module.exports = router;