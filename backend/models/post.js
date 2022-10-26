const mongoose=require("mongoose")
const postSchema=new mongoose.Schema({
    title:{type:String, required:true},
    body:{type:String,required:true},
    comments:{type:String},
    author:{type:String,required:true},
    date:{type:Date,default:Date.now, required:true},
    image:{type:File,required:true},
    category:{type:String,required:true}
}
)
module.exports=mongoose.model("Post",postSchema)