var mongoose = require('mongoose');

var CommentSchema = mongoose.Schema({
  message: String,
  user: String
},{
  timestamps:true
});

mongoose.model("Comment", CommentSchema);
