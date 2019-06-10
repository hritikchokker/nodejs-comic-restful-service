const mongodb = require('../utils/env');
const mongoose = require('mongoose');
mongoose.connect(mongodb.db,{useNewUrlParser: true});
module.exports = mongoose;