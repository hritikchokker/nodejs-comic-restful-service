const express = require('express');
const heroRoute = express.Router();
const fs = require('fs');
heroRoute.post('/addhero',(request,response) =>{
    const json = request.body;
    const herocrud = require('../db/helper/herocrud');
    herocrud.addHero(json,response); 
});
heroRoute.get('/findhero',(request,response) =>{
    const json = request.query.name;
    const herocrud = require('../db/helper/herocrud');
    herocrud.searchHero(json,response);
});
heroRoute.post('/login',(request, response) =>{
    const json = request.body;
    const usercrud = require('../db/helper/usercrud');
    usercrud.userLogin(json,response);
});
heroRoute.post('/register', (request, response) => {
    const json = request.body;
    const usercrud = require('../db/helper/usercrud');
    usercrud.userRegister(json, response);
});


// *.json heroes 

//API - GET ob ={}:JSON
// mongo db insertmany
module.exports = heroRoute;