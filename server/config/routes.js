var WallController = require('../controllers/wall.js');
module.exports = function(app){
  app.get('/posts', function(req,res){
    WallController.show(req,res);
  });
  app.post('/login', function(req, res){
    WallController.getUser(req,res);
  });
}
