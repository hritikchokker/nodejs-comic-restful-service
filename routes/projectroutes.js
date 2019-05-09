const express = require('express');
const projectRoute = express.Router();
projectRoute.post('/register',(request,response)=>{
    const json = request.body;
    const projectcrud = require('../db/helpers/projectcrud');
    projectcrud.add(json,response);
});
projectRoute.post('/login',(request,response)=>{
    const json = request.body;
    const projectcrud = require('../db/helpers/projectcrud');
    projectcrud.search(json,response);
})
module.exports = projectRoute;