const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(require('./utils/cors'));
app.use('/',require('./routes/approutes'));
app.listen(process.env.PORT || 1234 ,(err) =>{
    if(err){
        throw err;
    }
    else{
        console.log('server started at port 1234 ');
    }
})
