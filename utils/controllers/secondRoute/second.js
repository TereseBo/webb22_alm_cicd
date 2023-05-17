const { reverse } = require('../../functions/reversestring');

function second(req, res, next) {
  const { input } = req.params;
  const output = reverse(input);
  res.render('second', { title: 'Response', input, output });
}

module.exports = { second };
