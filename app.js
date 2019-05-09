const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',require('./routes/projectroutes'));
app.listen(process.env.PORT || 1234, (err) =>{
    if(err){
        console.log('error starting server');
    }
    else{
        console.log('server started at 1234 port ...');
    }
});