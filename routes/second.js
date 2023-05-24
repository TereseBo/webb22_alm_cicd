const express = require('express');

const router = express.Router();

const { second } = require('../utils/controllers/secondRoute/second');

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Second page', text: 'Welcome to the second route, it \'s not necessary. Add anythingto the url:.../... ' });
});

router.get('/:input', second);

module.exports = router;
