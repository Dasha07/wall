var WallController = require('../controllers/wall.js');
module.exports = function(app){
  app.get('/posts', function(req,res){
    WallController.show(req,res);
  });
  app.post('/login', function(req, res){
    WallController.getUser(req,res);
  });
  app.post('/createPost', function(req, res){
    WallController.createPost(req,res);
  });
  app.post('/createComment', function(req,res){
    WallController.createComment(req,res);
  })
}
