var mongoose = require('mongoose');

var PostSchema = mongoose.Schema({
  messsage: String,
  user: String,
  comments: Array
},{
  timestamps:true
});

mongoose.model("Post", PostSchema);
