const mongoose = require('mongoose');

const db="mongodb://localhost:27017/portfolio";


mongoose.connect(db,{
   
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("db connected")).catch((err)=> console.log(err.message));