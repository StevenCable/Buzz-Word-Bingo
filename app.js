/*jshint esversion: 6 */
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

var app = express();

var buzzwords = [];

app.use(bodyParser.urlencoded());

app.get('/', (req, res, next)=>{
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/buzzwords', (req, res, next) => {
  res.send(buzzwords);
});

app.post('/buzzword', (req, res, next) => {
  if(req.body.hasOwnProperty('buzzword')){
    buzzwords.push(req.body);
    alert(`You just added ${req.body} to your collection`);
    res.send({"success": true});
  }else{
    res.send('Nice try, poopy-headed nincompoop');
  }
});

// app.put('/buzzword', (req, res, next) => {

// });

app.delete('/buzzword', (req, res, next) =>{
  var newBuzzWord = req.body;
  for (var i = 0; i < buzzwordsObj.length; i++) {
    if(buzzwordsObj[i].buzzwords === newBuzzWord.buzzword
  }
});




var server = app.listen(3000, () =>{
  var host = server.address().address;
  var port = server.address().port;


  console.log('BuzzWord App listening at http://%s:%s', host, port);
});
