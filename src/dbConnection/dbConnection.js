const mongoose = require('mongoose');
const config = require('../../configure');
mongoose.connect(config.db,{useNewUrlParser:true, useFindAndModify: false,useUnifiedTopology: true },(err)=>{
    if (!err) {
        console.log("successfully db connected");
        
    }else console.log("dbNot connected",err);
    
});
module.exports  = mongoose;