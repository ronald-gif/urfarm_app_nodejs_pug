// Dependencies
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const connectdb = require('./config/db')

// requiring express session
const expressSession = require('express-session')({
  secret: 'secretRonald',
  resave: false,
  saveUninitialized: false,
});

// importing the user model
const Enrollment = require('./Models/UserSchema');

// importing routes
const farmerOne = require('./Routes/farmerOne_routes');
const publicRoutes = require('./Routes/public_routes');
const AO = require('./Routes/AO_routes');
const urbanfarmer = require('./Routes/urbanFarmer_routes');
const products = require('./Routes/produce_routes');
const registerPublic = require('./Routes/register_public');
const uploads = require('./Routes/upload_Products');
const login = require('./Routes/authenticate');
const dashboards = require('./Routes/dashboards')
const produceList = require('./Routes/produce-list')
// Instantiation
const server = express();

// connecting to database
mongoose.connect(connectdb.database, { useNewUrlParser: true });
const db = mongoose.connection;

// Check connection
db.once('open', function(){

    console.log('Connected to MongoDB');
  });
  // Check for db errors
  db.on('error', function(err){
    console.error(err);
  });
  
  // configurations
// setting up a template engine
server.set('view engine', 'pug');
server.set('views', path.join(__dirname, 'views'));


// middleware
// To parse URL encoded data
server.use(express.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, 'public')));
// for uoloaded images
server.use('/public/uploads', express.static(__dirname + '/public/uploads'))
server.use(expressSession)

// passport configuration middleware
server.use(passport.initialize());
server.use(passport.session());
// for authentication
passport.use(Enrollment.createStrategy())
// 
passport.serializeUser(Enrollment.serializeUser())
passport.deserializeUser(Enrollment.deserializeUser())

// using the routes
server.use('/', farmerOne);
server.use('/', publicRoutes);
server.use('/', AO);
server.use('/', urbanfarmer);
server.use('/', products)
server.use('/', registerPublic);
server.use('/', uploads)
server.use('/', login)
server.use('/', dashboards)
server.use('/', produceList)
// for invalid url
server.get('*', (req, res)=>{
    res.send('404! this page doesnot exist')
});

// boostraping server
server.listen(3000, () => console.log('listen to port 3000'));
