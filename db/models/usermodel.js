const connection = require('../connection');
const Schema = connection.Schema;
const UserSchema = new Schema({
    username: String,
    password: String
})
const UserSystem = connection.model('comics',UserSchema);
module.exports = UserSystem;