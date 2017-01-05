/*jshint esversion: 6 */
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

var app = express();

var buzzwordsObj = {
  "buzzwords": []
};

app.use(bodyParser.urlencoded());

app.get('/', (req, res, next)=>{
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/buzzwords', (req, res, next) => {
  res.send(buzzwordsObj);
});

app.post('/buzzword', (req, res, next) => {
  buzzwordsObj.buzzwords.push(req.body);
  console.log(req.body);
  res.send({"success": true});
});

// app.put('/buzzword', (req, res, next) => {

// });




var server = app.listen(3000, () =>{
  var host = server.address().address;
  var port = server.address().port;


  console.log('BuzzWord App listening at http://%s:%s', host, port);
});
