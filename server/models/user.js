var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  name: String,
},{
  timestamps:true
});

mongoose.model("User", UserSchema);
