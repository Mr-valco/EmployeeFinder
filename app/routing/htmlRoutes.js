//file path for html
var path = require('path');

//routs
module.exports = function(app) {

//go to survey.html
  app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '/../public/survey.html'));
  });

  // matching route not found then go home
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/../public/home.html'));
  });

};
