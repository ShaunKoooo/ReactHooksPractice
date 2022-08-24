var express = require('express');
var app = express();

app.get('/api', function(req, res) {
    res.setHeader("Content-Type", "text/html");
    res.send('hello worldpp');
    res.jsonp()
    console.log('hi', req)
});

app.listen(5008, () => {
    console.log('yoyoyoyo');
});