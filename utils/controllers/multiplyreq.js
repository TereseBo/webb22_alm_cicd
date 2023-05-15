const { Calculator } = require('../calculator');

function multiplyreq(req, res) {
  const calc = new Calculator();
  req.values.map((item, index) => {
    if (index === 0) {
      calc.add(item);
    } else {
      calc.multiply(item);
    }
    return 1;
  });
  const result = calc.getResult();
  res.render('calc', {
    title: 'Result', method: 'multiply', input: req.values, result,
  });
}

module.exports = { multiplyreq };
