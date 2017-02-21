var mongoose = require('mongoose');
var User = mongoose.model('User');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

module.exports = {
    show: function (request, response) {
        Post.find({}, function(err, posts){
          if (err){
            response.json(err);
          }else{
            response.json(posts);
          }
        })
    },
    getUser: function(req,res){
      console.log("this is req.body",req.body);
      User.findOne({name: req.body.user.name}, function(err,user){
        if (err){
          response.json(err);
        }else{
          response.json(user);
        }
      })
    }
};
