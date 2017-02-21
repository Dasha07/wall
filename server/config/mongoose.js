var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/{{template}}');

require('../models/{{template}}');
