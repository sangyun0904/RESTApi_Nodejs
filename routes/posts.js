const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send('We are on posts');
});


router.get('/specific', (req, res) => {
    res.send('Specific posts');
});

router.post('/', (req, res) => {
    console.log(req.body);

    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    post.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send({message: err});
        });
});

module.exports = router;