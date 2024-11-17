const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
  
    name:{type:String,default:""},
    email:{type:String,default:""},
    password:{type:String,default:""},

    isActive:{type:Boolean, default:false}
},

{timestamps:true}
)




module.exports=mongoose.model("User",userSchema)
