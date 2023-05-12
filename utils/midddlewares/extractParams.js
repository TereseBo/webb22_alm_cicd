const Joi = require('joi');

const valueSchema = Joi.object({
  val: Joi.array().items(Joi.number()),
});

function validateParams(req, res, next) {
  const validated = valueSchema.validate(req.query);
  if (validated.error) {
    res.status(400);
    res.render('error3', { title: 'Error', text: validated.error });
    return;
  }
  const values = validated.value.val;
  req.values = values;
  next();
}

module.exports = { validateParams };
