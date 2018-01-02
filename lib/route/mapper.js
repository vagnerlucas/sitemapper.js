var express = require('express');
var router = express.Router();
var compressor = require('../compressor/compressor')

router.all('/update', (req, res) => {
        res.type('application/json');
        res.json({result: 'ok'});
        compressor();
        res.end();
});

module.exports = router;