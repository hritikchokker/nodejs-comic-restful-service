const connection = require('../connection');
const Schema = connection.Schema;
const UserSchema = new Schema({
    "firstname": {
        type: String,
        required: true,
        unique: false
    },
    "lastname": {
         type: String,
        required: false,
        unique: false
    },
    "username": {
        type: String,
        required: true,
        unique: true
    },
    "email": {
        type: String,
        required: true,
        unique: true
    },
    "password": {
        type: String,
        required: true,
        unique: false
    }
});
const UserModel = connection.model('userauthentication',UserSchema);
module.exports = UserModel;