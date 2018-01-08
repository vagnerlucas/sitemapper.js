const express = require('express');

const router = express.Router();
const compressor = require('../compressor/compressor');

router.all('/update', (req, res) => {
  res.type('application/json');
  res.json({ result: 'ok' });
  compressor();
  res.end();
});

module.exports = router;
