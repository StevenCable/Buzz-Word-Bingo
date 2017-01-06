/*jshint esversion: 6 */
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const dataStore = require('./dataStore.js');

const PORT = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.urlencoded());

app.get('/', (req, res, next)=>{
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/buzzwords', (req, res, next) => {
  res.send(dataStore.buzzwordsArr);
});

app.post('/buzzword', (req, res, next) => {
  if(req.body.hasOwnProperty('buzzword')){
    dataStore.buzzwordsArr.push(req.body);
    console.log(`You just added "${req.body.buzzword}" to your collection`);
    res.send({"success": true});
  }else{
    res.send('Nice try, poopy-headed nincompoop');
  }
});

app.put('/buzzword', (req, res, next) => {
  var newBuzzWord = req.body;
  let response = { success : false, newScore: null};

  for (var i = 0; i < dataStore.buzzwordsArr.length; i++) {
    if(dataStore.buzzwordsArr[i].buzzword === newBuzzWord.buzzword){
      dataStore.points += parseInt(dataStore.buzzwordsArr[i].points);
      dataStore.buzzwordsArr[i].heard = true;
      response = { success: true, newScore: dataStore.points};
    }
  }
  res.json({ success : true, newScore: dataStore.points});
});

app.delete('/buzzword', (req, res, next) =>{
  var newBuzzWord = req.body;
  for (var i = 0; i < dataStore.buzzwordsArr.length; i++) {
    if(dataStore.buzzwordsArr[i].buzzword === newBuzzWord.buzzword){
      dataStore.buzzwordsArr.splice(i,1);
      console.log(`Careful! You just deleted "${newBuzzWord.buzzword}"!`);
      res.send({"success": true});
      return true;
    }
  }
  res.send(`These are not the droids you are looking for`);
});

app.post('/reset', (req, res, next) => {
  dataStore.reset();
  app.send(`you just reset all your shit, bro`);
});




var server = app.listen(3000, () =>{
  var host = server.address().address;
  var port = server.address().port;


  console.log('BuzzWord App listening at http://%s:%s', host, port);
});
