const bcrypt = require('bcrypt');
const encryptionOperations = {
    salt: 10,
    encryptPassword(password){
        return bcrypt.hashSync(password, this.salt);
    },
    comparePassword(password){
        return bcrypt.compareSync(password,hashpwd);
    }
}
module.exports = encryptionOperations;