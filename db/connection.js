const mongoose =require('mongoose');
const mongodb = require('../utils/env');
mongoose.connect(mongodb.db);
module.exports = mongoose;