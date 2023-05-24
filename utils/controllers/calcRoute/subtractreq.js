const { Calculator } = require('../../calculator');

function subtractreq(req, res) {
  const calc = new Calculator();
  req.values.map((item, index) => {
    if (index === 0) {
      calc.add(item);
    } else {
      calc.subtract(item);
    }
    return 1;
  });
  const result = calc.getResult();
  res.render('calc', {
    title: 'Result', method: 'subtraction', input: req.values, result,
  });
}

module.exports = { subtractreq };
