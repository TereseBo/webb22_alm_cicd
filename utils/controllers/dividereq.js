const { Calculator } = require('../calculator');

function dividereq(req, res) {
  const calc = new Calculator();
  req.values.map((item, index) => {
    if (index === 0) {
      calc.add(item);
    } else {
      calc.divide(item);
    }
    return 1;
  });
  const result = calc.getResult();
  res.render('calc', {
    title: 'Result', method: 'division', input: req.values, result,
  });
}

module.exports = { dividereq };
