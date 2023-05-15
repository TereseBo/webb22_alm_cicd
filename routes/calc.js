const express = require('express');
const { validateParams } = require('../utils/midddlewares/extractParams');

const router = express.Router();

const { addreq } = require('../utils/controllers/addreq');
const { multiplyreq } = require('../utils/controllers/multiplyreq');
const { subtractreq } = require('../utils/controllers/subtractreq');
const { dividereq } = require('../utils/controllers/dividereq');
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Calc', text: 'Welcome to the calculator, it \'s not very good. Choose your method and add the numbers to use and add them to the url in the format:.../method?val=1&val=1... ' });
});

router.use(validateParams);

router.get('/add', addreq);
router.get('/subtract', subtractreq);
router.get('/multiply', multiplyreq);

router.get('/divide', dividereq);

module.exports = router;
