const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//Middlewares
// ex) app.use(auth); -> authenticate the user

/*
app.use('/posts', () =>{
    console.log('This is a middleware running');
});
*/


//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, 
    () => console.log('connected to DB!')
);

app.listen(3000);