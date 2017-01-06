/*jshint esversion: 6 */

var points = 0;
var buzzwordsArr = [];

var reset = () =>{
  score = 0;
  buzzwordsArr = [];
};

module.exports = {
  buzzwordsArr,
  points,
  reset
};