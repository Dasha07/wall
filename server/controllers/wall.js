var mongoose = require('mongoose');
var User = mongoose.model('User');
var Comment = mongoose.model('Comment');
var Post = mongoose.model('Post');

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
      User.findOne({name: req.body.user}, function(err,user){
        if (!user){
          var newUser = new User(req.body);
          newUser.name = req.body.user;
          newUser.save(function(err){
            if (err){
              res.json(err);
            }else{
              console.log(newUser);
              res.json(newUser);
            }
          })
        }else{
          res.json(user);
        }
      })
    },
    createPost: function(req,res){
      var newPost = new Post();
      newPost.message = req.body.message;
      newPost.user = req.body.userName;
      newPost.save(function(err){
        if (err){
          res.json({err:"err"})
        }else{
          Post.find({}, function(err,posts){
            if (err){
              res.json({err:"err"})
            }else{
              res.json(posts)
            }
          })
        }
      })
    },
    createComment: function(req,res){
      var newComment = new Comment();
      newComment.message = req.body.comment;
      newComment.user = req.body.userName;
      Post.findOne({_id:req.body._id}, function(err,post){
        if(post){
          post.comments.push(newComment);
          post.save(function(err){
            if (err){
              res.json({err:"err"});
            }else{
              Post.find({}, function(err,posts){
                if (err){
                  res.json({err:"err"})
                }else{
                  res.json(posts)
                }
              })
            }
          })
        }
      })
    }
};
