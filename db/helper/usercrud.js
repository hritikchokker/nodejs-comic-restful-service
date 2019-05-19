const UserAuth = require('../model/usermodel');
const encryptOperations = require('../../utils/encrypt');
const userOperations ={
    userRegister(userObject,response){
        userObject.password = encryptOperations.encryptPassword(userObject.password); 
        UserAuth.create(userObject,(err)=>{
            if(err){
                console.log('error', err);
                response.status(200).json({message: "record not added"});                
            } else{
                response.status(200).json({message: "record added succesfully"});
            }
        })
    },
    userLogin(userObject,response){
        UserAuth.findOne({"username": userObject.username}, (err,doc) =>{
            if(err){
                console.log('error', err);
                response.status(500).json({message: "error in db while searching"});
            } else if(doc){
                if(encryptOperations.compareHash(userObject.password, doc.password)){
                    response.status(200).json({
                        message: "welcome " + doc.username,
                                'record': doc });
                } else{
                    response.status(200).json({
                        message: "invalid username or password"
                    })
                }
            }else{
                console.log('error', err);
                response.status(200).json({message: "could not fetch url"});
            }
        })
    }
}
module.exports = userOperations;