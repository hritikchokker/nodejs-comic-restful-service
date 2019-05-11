const mongodb = require('../utils/env');
const mongoose = require('mongoose');
mongoose.connect(mongodb.db);
module.exports = mongoose;