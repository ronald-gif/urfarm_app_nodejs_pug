const express = require('express');
// const router = require('./farmerOne_routes');
const router = express.Router();

// importing model


// Ccreating routes

router.get('/AO', (req, res) => {
    res.render('AO');
});

router.post('/AO', (req, res) => {
    console.log(req.body);
    res.send('yo registered')
});

module.exports = router