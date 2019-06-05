const express = require('express');
const router = express.Router();

// declare axios for making http request
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing */
router.get('/', (req, res) => {
  res.send('api works');
});

// GET all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

module.exports = router;