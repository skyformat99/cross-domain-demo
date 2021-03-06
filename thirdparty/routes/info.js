const express = require('express');
const router = express.Router();

const data = {
    name: 'alienzhou1',
    desc: 'a  developer'
};

router.get('/normal', (req, res, next) => {
    console.log('normal');
    console.log(req.headers);
    res.json(data);
});

router.get('/cors', (req, res, next) => {
    console.log('cors');
    console.log(req.headers);
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8085');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.json(data);
});

router.get('/jsonp', (req, res, next) => {
    console.log('jsonp');
    var str = JSON.stringify(data);
    var script = `${req.query.cb}(${str})`;
    res.send(script);
});

module.exports = router;