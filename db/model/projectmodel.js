const connection = require('../connection');
const Schema = connection.Schema;
const projectSchema = new Schema({
    username: String,
    password: String
});
const UserProject  = connection.model('meanproject',projectSchema);
module.exports = UserProject;