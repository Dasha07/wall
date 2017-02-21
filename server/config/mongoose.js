var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/wall');


require('../models/post');
require('../models/user');
