var mongoose = require('mongoose');

var CommentSchema = mongoose.Schema({
  message: String,
  user: String
},{
  timestamps:true
});

var PostSchema = mongoose.Schema({
  message: String,
  user: String,
  comments: [CommentSchema]
},{
  timestamps:true
});

mongoose.model("Post", PostSchema);
mongoose.model("Comment", CommentSchema);
