const mongoose = require("mongoose")

const signUp =mongoose.Schema({
     userName:{
         type:String,
         require:true
     },
     password:{
         type:String,
         require:true
     }

})

module.exports=mongoose.model("credential",signUp)