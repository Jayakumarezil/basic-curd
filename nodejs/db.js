const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/curdDB',{ useNewUrlParser: true,useUnifiedTopology: true  },(err)=>{
    if(!err)
    console.log("success db connection");
    else
    console.log("err db connection"+JSON.stringify(err,undefined,2));
})

module.exports = mongoose