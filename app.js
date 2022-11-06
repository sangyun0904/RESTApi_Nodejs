const express = require('express');
const app = express();
const mongoose = require('mongoose');

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

app.get('/posts', (req, res) => {
    res.send('We are on posts');
});

//Connect to DB
mongoose.connect('mongodb+srv://sangyoon0904:<sang8079>@rest.mlzjrat.mongodb.net/test', () => 
    console.log('connected to DB!')
);

app.listen(3000);