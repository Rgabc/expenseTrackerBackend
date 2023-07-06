const mongoose=require("mongoose")
const userSchema=new mongoose.Schema(
    {
    title:String,
    price:Number,
    date:Date
},{timestamps:true}

)
module.exports=mongoose.model("customer",userSchema);  