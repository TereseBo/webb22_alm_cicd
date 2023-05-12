const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  // const members=JSON.stringify({initials:["TB", "HA", "MA", "RF"]})
  const members = { initials: ['TB', 'HA', 'MA', 'RF'] };

  res.json(members);
});

module.exports = router;
