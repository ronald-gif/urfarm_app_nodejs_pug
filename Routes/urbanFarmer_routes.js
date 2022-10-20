const express = require('express');
const router = express.Router();

// creating routes

router.get('/urban-farmer', (req, res) => {
    res.render('urban-farmer')
});

router.post('/urban-farmer', (req, res) => {
    console.log(req.body);
    res.send('registration succussfull')
});

module.exports = router;