const UserProject = require('../model/projectmodel');
const encryptOperations = require('../../utils/encrypt');
const projectOperations = {

    add(userObject,response){

        userObject.password = encryptOperations.encryptPassword(userObject.password);

        UserProject.create(userObject,(err)=>{
            if(err){
                console.log('error in registering');
                 response.status(200).json({
                     message: 'record not added'
                 })
            } else{
                console.log("record added");
                 response.status(200).json({
                     message: 'record added'
                 })
            }
        })
    },
    search(userObject,response){
        UserProject.findOne({"username":userObject.username},(err,doc)=>{
            if(err){
                response.status(500).json({
                    message: "error in db during search"
                })
            } else {
                if(doc){
                    if(encryptOperations.compareHash(userObject.password,doc.password)){
                         response.status(200).json({
                             message: "welcome " + doc.username,
                             'record': doc
                         });
                    }
                   
            } else {
                response.status.json({
                    message: "invalid username"
                })
            }
        }

    })
    }    
}

module.exports = projectOperations;