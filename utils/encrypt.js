const bcrypt = require('bcrypt');
const encryptionOperations = {
    salt: 10,
    encryptPassword(password){
        return bcrypt.hashSync(password, this.salt);
    },
    compareHash(password, hashpwd){
        return bcrypt.compareSync(password, hashpwd);
    }
}
module.exports = encryptionOperations;