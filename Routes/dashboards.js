const express = require('express');
const router = express.Router();

// creating routes

router.get('/AO-dashboard', (req, res) => {
    res.render('AO_dashboard')
});

router.get('/FO-dashboard', (req, res) => {
    res.render('FO_dashboard')
});

router.get('/urban-dashboard', (req, res) => {
    res.render('urban_dashboard')
});


module.exports = router;