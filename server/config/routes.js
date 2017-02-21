var {{template}}Controller = require('../controllers/{{template}}');
module.exports = function(app){
  app.get('/{{template}}', function(req,res){
    {{template}}Controller.showAll(req,res);
  });
}
