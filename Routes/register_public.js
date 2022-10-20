const express = require('express');
const router = express.Router();


// creating routes
router.get('/public', (req, res) => {
    res.render('normaluser')
})

router.post('/public', (req, res) => {
    // console.log(req.body);
    res.redirect('/public/')
});


module.exports = router