function second(req, res, next) {
  const { input } = req.params;
  const output = `${input.split('').reverse().join('')}!`;
  res.render('second', { title: 'Response', input, output });
}

module.exports = { second };
