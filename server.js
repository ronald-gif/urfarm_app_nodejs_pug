// Dependencies
const express = require('express');
const path = require('path')


// importing routes
const ufarm = require('./Routes/ufarm_routes')

// Instantiation
const server = express();

// To parse URL encoded data
server.use(express.urlencoded({ extended: true }));

// configurations
// setting up a template engine
server.set('view engine', 'pug');
server.set('views', path.join(__dirname, 'views'));

// middleware
server.use(express.static(path.join(__dirname, 'public')));
server.use(express.static(path.resolve('./public')));

// using the routes
server.use('/user', ufarm)


// for invalid url
server.get('*', (req, res)=>{
    res.send('404! this page doesnot exist')
});

// boostraping server
server.listen(3005, () => console.log('listen to port 3005'));
