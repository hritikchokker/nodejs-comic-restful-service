const express =require('express');
const app = express();
app.use(require('./utils/cors'));
app.use('/',require('./routes/userroutes'));
app.listen(process.env.PORT || 1234 ,(err) =>{
    if(err){
        console.log('error while starting the server',err)
        throw err;
    }
});