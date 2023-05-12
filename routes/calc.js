const express = require('express');
const { validateParams } = require('../utils/midddlewares/extractParams');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Calc', text: '' });
});

router.use(validateParams)

router.get('/add', (req, res, next) => {
  res.render('calc', { title: 'Add', text: '' });
});
router.get('/subtract', (req, res, next) => {
  res.render('calc', { title: 'Sub', text: '' });
});
router.get('/multiply', (req, res, next) => {
  res.render('calc', { title: 'Mult', text: '' });
});

router.get('/divide', (req, res, next) => {
  res.render('calc', { title: 'Div', text: '' });
});

module.exports = router;
